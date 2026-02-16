import type { HttpContext } from '@adonisjs/core/http'
import Ministry from '#models/ministry'
import { createMinistryValidator, updateMinistryValidator } from '#validators/ministry'

export default class MinistriesController {
  /**
   * Listar todos os ministerios (rota publica)
   * GET /api/ministerios
   */
  async index({ response }: HttpContext) {
    const ministries = await Ministry.query().orderBy('title', 'asc')
    return response.ok(ministries)
  }

  /**
   * Obter ministerio por slug (rota publica)
   * GET /api/ministerios/:slug
   */
  async show({ params, response }: HttpContext) {
    const ministry = await Ministry.query().where('slug', params.slug).firstOrFail()
    return response.ok(ministry)
  }

  /**
   * Criar ministerio (autenticado)
   * POST /api/ministerios
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createMinistryValidator)
    const ministry = await Ministry.create(data)
    return response.created(ministry)
  }

  /**
   * Atualizar ministerio (autenticado)
   * PUT /api/ministerios/:id
   */
  async update({ params, request, response }: HttpContext) {
    const ministry = await Ministry.findOrFail(params.id)
    const data = await request.validateUsing(updateMinistryValidator)
    ministry.merge(data)
    await ministry.save()
    return response.ok(ministry)
  }

  /**
   * Remover ministerio (autenticado)
   * DELETE /api/ministerios/:id
   */
  async destroy({ params, response }: HttpContext) {
    const ministry = await Ministry.findOrFail(params.id)
    await ministry.delete()
    return response.ok({ message: 'Ministerio removido com sucesso' })
  }
}
