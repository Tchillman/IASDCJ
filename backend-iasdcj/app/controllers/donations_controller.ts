import type { HttpContext } from '@adonisjs/core/http'
import Donation from '#models/donation'
import { createDonationValidator } from '#validators/donation'

export default class DonationsController {
  /**
   * Registar nova contribuicao (autenticado)
   * POST /api/donations
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createDonationValidator)
    const donation = await Donation.create(data)
    return response.created({
      message: 'Contribuicao registada com sucesso',
      donation,
    })
  }

  /**
   * Listar todas as contribuicoes (autenticado - admin)
   * GET /api/donations
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const type = request.input('type')
    const method = request.input('method')

    const query = Donation.query().orderBy('created_at', 'desc')

    if (type) {
      query.where('type', type)
    }

    if (method) {
      query.where('method', method)
    }

    const donations = await query.paginate(page, limit)
    return response.ok(donations)
  }

  /**
   * Ver contribuicao especifica (autenticado)
   * GET /api/donations/:id
   */
  async show({ params, response }: HttpContext) {
    const donation = await Donation.findOrFail(params.id)
    return response.ok(donation)
  }

  /**
   * Remover registo de contribuicao (autenticado - admin)
   * DELETE /api/donations/:id
   */
  async destroy({ params, response }: HttpContext) {
    const donation = await Donation.findOrFail(params.id)
    await donation.delete()
    return response.ok({ message: 'Registo removido com sucesso' })
  }
}
