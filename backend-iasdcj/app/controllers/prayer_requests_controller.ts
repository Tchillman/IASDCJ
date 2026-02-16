import type { HttpContext } from '@adonisjs/core/http'
import PrayerRequest from '#models/prayer_request'
import { createPrayerRequestValidator } from '#validators/prayer_request'

export default class PrayerRequestsController {
  /**
   * Listar pedidos de oracao publicos (rota publica)
   * GET /api/oracoes
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)

    const query = PrayerRequest.query().orderBy('created_at', 'desc')

    query.where('privacy', 'public')

    const prayerRequests = await query.paginate(page, limit)
    return response.ok(prayerRequests, true)
  }

  /**
   * Listar todos os pedidos incluindo privados (autenticado - lideranca)
   * GET /api/oracoes/todos
   */
  async indexAll({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const privacy = request.input('privacy')
    const query = PrayerRequest.query().orderBy('created_at', 'desc')

    if (privacy) {
      query.where('privacy', privacy)
    }

    const prayerRequests = await query.paginate(page, limit)
    return response.ok(prayerRequests)
  }

  /**
   * Enviar pedido de oracao (rota publica)
   * POST /api/oracoes
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createPrayerRequestValidator)
    const prayerRequest = await PrayerRequest.create(data)
    return response.created({
      message: 'Pedido de oracao enviado com sucesso',
      prayerRequest,
    })
  }

  /**
   * Incrementar contador de oracoes (rota publica)
   * POST /api/oracoes/:id/orar
   */
  async pray({ params, response }: HttpContext) {
    const prayerRequest = await PrayerRequest.findOrFail(params.id)

    // Apenas pedidos publicos podem receber oracoes da comunidade
    if (prayerRequest.privacy !== 'public') {
      return response.forbidden({ message: 'Nao e possivel interagir com pedidos privados' })
    }

    prayerRequest.prayers += 1
    await prayerRequest.save()

    return response.ok({
      message: 'Obrigado por orar!',
      prayers: prayerRequest.prayers,
    })
  }

  /**
   * Remover pedido de oracao (autenticado)
   * DELETE /api/oracoes/:id
   */
  async destroy({ params, response }: HttpContext) {
    const prayerRequest = await PrayerRequest.findOrFail(params.id)
    await prayerRequest.delete()
    return response.ok({ message: 'Pedido removido com sucesso' })
  }
}
