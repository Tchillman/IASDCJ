// app/controllers/sabbath_school_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import SabbathSchoolLesson from '#models/sabbath_school_lesson'
import SabbathSchoolClass from '#models/sabbath_school_class'
import {
  createLessonValidator,
  updateLessonValidator,
  createClassValidator,
  updateClassValidator,
} from '#validators/sabbath_school'
import axios from 'axios'
import env from '#start/env'
import { DateTime } from 'luxon' // Adicionar import do DateTime

export default class SabbathSchoolController {
  // =====================
  // LICOES
  // =====================

  async indexLessons({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const quarter = request.input('quarter')
    const current = request.input('current')

    const query = SabbathSchoolLesson.query().orderBy('week', 'asc')

    if (quarter) {
      query.where('quarter', quarter)
    }

    if (current === 'true') {
      query.where('is_current', true)
    }

    const lessons = await query.paginate(page, limit)
    return response.ok(lessons)
  }

  async currentLesson({ response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.query().where('is_current', true).first()

    if (!lesson) {
      return response.notFound({ message: 'Nenhuma licao atual encontrada' })
    }
    return response.ok(lesson)
  }

  async showLessonByQuarter({ params, response }: HttpContext) {
    const { quarter, week } = params
    const lesson = await SabbathSchoolLesson.query()
      .where('quarter', quarter)
      .where('week', week)
      .first()

    if (!lesson) {
      return response.notFound({ message: 'Licao nao encontrada' })
    }
    return response.ok(lesson)
  }

  async showLesson({ params, response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.findOrFail(params.id)
    return response.ok(lesson)
  }

  async storeLesson({ request, response }: HttpContext) {
    const data = await request.validateUsing(createLessonValidator)

    if (data.isCurrent) {
      await SabbathSchoolLesson.query().where('is_current', true).update({ is_current: false })
    }

    const lesson = await SabbathSchoolLesson.create(data)
    return response.created(lesson)
  }

  async updateLesson({ params, request, response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.findOrFail(params.id)
    const data = await request.validateUsing(updateLessonValidator)

    if (data.isCurrent) {
      await SabbathSchoolLesson.query()
        .where('is_current', true)
        .whereNot('id', lesson.id)
        .update({ is_current: false })
    }

    lesson.merge(data)
    await lesson.save()
    return response.ok(lesson)
  }

  async destroyLesson({ params, response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.findOrFail(params.id)
    await lesson.delete()
    return response.ok({ message: 'Licao removida com sucesso' })
  }

  // =====================
  // SINCRONIZACAO COM CPB
  // =====================

  async syncWithCPB({ response }: HttpContext) {
    try {
      const result = await this.fetchAndSyncLessons()
      return response.ok(result)
    } catch (error) {
      console.error('Erro na sincronizacao:', error)
      return response.internalServerError({
        message: 'Erro ao sincronizar com CPB',
        error: 'error.message',
      })
    }
  }

  private async fetchAndSyncLessons() {
    const cpbUrl = env.get('CPB_API_URL', 'https://mais.cpb.com.br/wp-json/wp/v2')
    const categoryId = env.get('CPB_LESSONS_CATEGORY', '412')

    const response = await axios.get(`${cpbUrl}/posts?categories=${categoryId}&per_page=50&_embed`)
    const posts = response.data

    const syncedLessons = []

    for (const post of posts) {
      const lessonData = await this.extractLessonData(post)

      if (lessonData) {
        let lesson = await SabbathSchoolLesson.query()
          .where('quarter', lessonData.quarter)
          .where('week', lessonData.week)
          .first()

        if (lesson) {
          lesson.merge(lessonData)
          await lesson.save()
          syncedLessons.push({ action: 'updated', lesson })
        } else {
          lesson = await SabbathSchoolLesson.create(lessonData)
          syncedLessons.push({ action: 'created', lesson })
        }
      }
    }

    return {
      success: true,
      message: `Sincronizadas ${syncedLessons.length} licoes`,
      lessons: syncedLessons,
    }
  }

  private async extractLessonData(post: any) {
    try {
      const title = post.title.rendered
      const content = post.content.rendered

      const weekMatch = title.match(/Liç[ãa]o\s+(\d+)/)
      const week = weekMatch ? Number.parseInt(weekMatch[1]) : null

      if (!week) return null

      const quarter = this.extractQuarter(title)
      if (!quarter) return null

      const lessonTitle = title.replace(/Liç[ãa]o\s+\d+\s*[-–]\s*/, '').trim()
      const memoryVerse = this.extractMemoryVerse(content)
      const period = this.extractPeriod(content)
      const dates = this.parsePeriodDates(period)

      // Converter Date para DateTime do Luxon
      const startDate = dates.start ? DateTime.fromJSDate(dates.start) : null
      const endDate = dates.end ? DateTime.fromJSDate(dates.end) : null

      // Verificar se é a lição atual
      const isCurrent = this.isCurrentLesson(startDate, endDate)

      // Se for atual, desmarcar as outras (mas isso será feito na criação/atualização)

      return {
        week,
        quarter,
        title: lessonTitle,
        theme: this.extractTheme(content),
        memoryVerse: memoryVerse,
        period: period,
        startDate: startDate,
        endDate: endDate,
        externalLink: post.link,
        content: content.substring(0, 5000),
        isCurrent: isCurrent,
        pdfUrl: null,
        downloadCount: 0,
      }
    } catch (error) {
      console.error('Erro ao extrair dados da licao:', error)
      return null
    }
  }

  private extractQuarter(title: string): string | null {
    const currentYear = new Date().getFullYear()
    if (title.includes('1º Trimestre')) return `1º Trimestre ${currentYear}`
    if (title.includes('2º Trimestre')) return `2º Trimestre ${currentYear}`
    if (title.includes('3º Trimestre')) return `3º Trimestre ${currentYear}`
    if (title.includes('4º Trimestre')) return `4º Trimestre ${currentYear}`
    return null
  }

  private extractMemoryVerse(content: string): string | null {
    const patterns = [
      /["'](.*?)["']\s*\(([^)]+)\)/,
      /Vers[oô] para memorizar:?\s*([^<]+)/i,
      /Memorizar:?\s*([^<]+)/i,
    ]

    for (const pattern of patterns) {
      const match = content.match(pattern)
      if (match) {
        return match[2] || match[1]
      }
    }
    return null
  }

  private extractPeriod(content: string): string | null {
    const patterns = [
      /(\d{1,2})\s+a\s+(\d{1,2})\s+de\s+(\w+)/i,
      /(\d{1,2})[-\s]+(\d{1,2})\s+de\s+(\w+)/i,
    ]

    for (const pattern of patterns) {
      const match = content.match(pattern)
      if (match) {
        return `${match[1]} a ${match[2]} de ${match[3]}`
      }
    }
    return null
  }

  private extractTheme(content: string): string | null {
    const match = content.match(/Tema do Trimestre:?\s*([^<.]+)/i)
    return match ? match[1].trim() : null
  }

  private parsePeriodDates(period: string | null): { start: Date | null; end: Date | null } {
    if (!period) return { start: null, end: null }

    const months: Record<string, number> = {
      janeiro: 1,
      fevereiro: 2,
      março: 3,
      abril: 4,
      maio: 5,
      junho: 6,
      julho: 7,
      agosto: 8,
      setembro: 9,
      outubro: 10,
      novembro: 11,
      dezembro: 12,
    }

    const match = period.match(/(\d+)\s+a\s+(\d+)\s+de\s+(\w+)/i)
    if (match) {
      const currentYear = new Date().getFullYear()
      const month = months[match[3].toLowerCase()]

      if (month) {
        return {
          start: new Date(currentYear, month - 1, Number.parseInt(match[1])),
          end: new Date(currentYear, month - 1, Number.parseInt(match[2])),
        }
      }
    }

    return { start: null, end: null }
  }

  private isCurrentLesson(startDate: DateTime | null, endDate: DateTime | null): boolean {
    if (!startDate || !endDate) return false

    const today = DateTime.now().startOf('day')
    const start = startDate.startOf('day')
    const end = endDate.startOf('day')

    return today >= start && today <= end
  }

  // =====================
  // CLASSES
  // =====================

  async indexClasses({ response }: HttpContext) {
    const classes = await SabbathSchoolClass.query().orderBy('time', 'asc')
    return response.ok(classes)
  }

  async storeClass({ request, response }: HttpContext) {
    const data = await request.validateUsing(createClassValidator)
    const classItem = await SabbathSchoolClass.create(data)
    return response.created(classItem)
  }

  async updateClass({ params, request, response }: HttpContext) {
    const classItem = await SabbathSchoolClass.findOrFail(params.id)
    const data = await request.validateUsing(updateClassValidator)
    classItem.merge(data)
    await classItem.save()
    return response.ok(classItem)
  }

  async destroyClass({ params, response }: HttpContext) {
    const classItem = await SabbathSchoolClass.findOrFail(params.id)
    await classItem.delete()
    return response.ok({ message: 'Classe removida com sucesso' })
  }
}
