import type { HttpContext } from '@adonisjs/core/http'
import SabbathSchoolLesson from '#models/sabbath_school_lesson'
import SabbathSchoolClass from '#models/sabbath_school_class'
import {
  createLessonValidator,
  updateLessonValidator,
  createClassValidator,
  updateClassValidator,
} from '#validators/sabbath_school'

export default class SabbathSchoolController {
  // =====================
  // LICOES
  // =====================

  /**
   * Listar licoes (rota publica)
   * GET /api/escola-sabatina/licoes
   */
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

  /**
   * Obter licao atual (rota publica)
   * GET /api/escola-sabatina/licoes/atual
   */
  async currentLesson({ response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.query().where('is_current', true).first()
    if (!lesson) {
      return response.notFound({ message: 'Nenhuma licao atual encontrada' })
    }
    return response.ok(lesson)
  }

  /**
   * Obter licao especifica
   * GET /api/escola-sabatina/licoes/:id
   */
  async showLesson({ params, response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.findOrFail(params.id)
    return response.ok(lesson)
  }

  /**
   * Criar licao (autenticado)
   * POST /api/escola-sabatina/licoes
   */
  async storeLesson({ request, response }: HttpContext) {
    const data = await request.validateUsing(createLessonValidator)

    // Se esta licao e marcada como atual, desmarcar as outras
    if (data.isCurrent) {
      await SabbathSchoolLesson.query().where('is_current', true).update({ is_current: false })
    }

    const lesson = await SabbathSchoolLesson.create(data)
    return response.created(lesson)
  }

  /**
   * Atualizar licao (autenticado)
   * PUT /api/escola-sabatina/licoes/:id
   */
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

  /**
   * Remover licao (autenticado)
   * DELETE /api/escola-sabatina/licoes/:id
   */
  async destroyLesson({ params, response }: HttpContext) {
    const lesson = await SabbathSchoolLesson.findOrFail(params.id)
    await lesson.delete()
    return response.ok({ message: 'Licao removida com sucesso' })
  }

  // =====================
  // CLASSES
  // =====================

  /**
   * Listar classes (rota publica)
   * GET /api/escola-sabatina/classes
   */
  async indexClasses({ response }: HttpContext) {
    const classes = await SabbathSchoolClass.query().orderBy('time', 'asc')
    return response.ok(classes)
  }

  /**
   * Criar classe (autenticado)
   * POST /api/escola-sabatina/classes
   */
  async storeClass({ request, response }: HttpContext) {
    const data = await request.validateUsing(createClassValidator)
    const classItem = await SabbathSchoolClass.create(data)
    return response.created(classItem)
  }

  /**
   * Atualizar classe (autenticado)
   * PUT /api/escola-sabatina/classes/:id
   */
  async updateClass({ params, request, response }: HttpContext) {
    const classItem = await SabbathSchoolClass.findOrFail(params.id)
    const data = await request.validateUsing(updateClassValidator)
    classItem.merge(data)
    await classItem.save()
    return response.ok(classItem)
  }

  /**
   * Remover classe (autenticado)
   * DELETE /api/escola-sabatina/classes/:id
   */
  async destroyClass({ params, response }: HttpContext) {
    const classItem = await SabbathSchoolClass.findOrFail(params.id)
    await classItem.delete()
    return response.ok({ message: 'Classe removida com sucesso' })
  }
}
