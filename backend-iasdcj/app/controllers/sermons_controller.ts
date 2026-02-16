import type { HttpContext } from '@adonisjs/core/http'
import Sermon from '#models/sermon'
import { createSermonValidator, updateSermonValidator } from '#validators/sermon'

export default class SermonsController {
  /**
   * Listar sermoes (publica retorna apenas publicados)
   * GET /api/sermoes
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const series = request.input('series')
    const type = request.input('type')
    const all = request.input('all')

    const query = Sermon.query().orderBy('created_at', 'desc')

    if (all !== 'true') {
      query.where('published', true)
    }

    if (series && series !== 'Todos') {
      query.where('series', 'like', `%${series}%`)
    }

    if (type) {
      query.where('type', type)
    }

    const sermons = await query.paginate(page, limit)
    return response.ok(sermons)
  }

  /**
   * Obter sermao especifico
   * GET /api/sermoes/:id
   */
  async show({ params, response }: HttpContext) {
    const sermon = await Sermon.findOrFail(params.id)

    // Incrementar visualizacoes
    sermon.views += 1
    await sermon.save()

    return response.ok(sermon)
  }

  /**
   * Criar sermao (autenticado)
   * POST /api/sermoes
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createSermonValidator)
    const sermon = await Sermon.create(data)
    return response.created(sermon)
  }

  /**
   * Atualizar sermao (autenticado)
   * PUT /api/sermoes/:id
   */
  async update({ params, request, response }: HttpContext) {
    const sermon = await Sermon.findOrFail(params.id)
    const data = await request.validateUsing(updateSermonValidator)
    sermon.merge(data)
    await sermon.save()
    return response.ok(sermon)
  }

  /**
   * Remover sermao (autenticado)
   * DELETE /api/sermoes/:id
   */
  async destroy({ params, response }: HttpContext) {
    const sermon = await Sermon.findOrFail(params.id)
    await sermon.delete()
    return response.ok({ message: 'Sermao removido com sucesso' })
  }
}
