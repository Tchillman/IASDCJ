import type { HttpContext } from '@adonisjs/core/http'
import Contact from '#models/contact'
import { createContactValidator } from '#validators/contact'

export default class ContactsController {
  /**
   * Enviar mensagem de contato (rota publica)
   * POST /api/contacts
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createContactValidator)
    const contact = await Contact.create(data)
    return response.created({
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      contact,
    })
  }

  /**
   * Listar todas as mensagens de contato (autenticado - admin)
   * GET /api/contacts
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const unread = request.input('unread')

    const query = Contact.query().orderBy('created_at', 'desc')

    if (unread === 'true') {
      query.where('read', false)
    }

    const contacts = await query.paginate(page, limit)
    return response.ok(contacts)
  }

  /**
   * Ver uma mensagem de contato (autenticado)
   * GET /api/contacts/:id
   */
  async show({ params, response }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)
    return response.ok(contact)
  }

  /**
   * Marcar mensagem como lida (autenticado)
   * PATCH /api/contacts/:id/read
   */
  async markAsRead({ params, response }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)
    contact.read = true
    await contact.save()
    return response.ok({ message: 'Mensagem marcada como lida', contact })
  }

  /**
   * Remover mensagem (autenticado)
   * DELETE /api/contacts/:id
   */
  async destroy({ params, response }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)
    await contact.delete()
    return response.ok({ message: 'Mensagem removida com sucesso' })
  }
}
