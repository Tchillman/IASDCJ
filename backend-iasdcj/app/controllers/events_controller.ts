import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
import { createEventValidator, updateEventValidator } from '#validators/event'

export default class EventsController {
  /**
   * Listar todos os eventos (rota publica)
   * GET /api/events
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const category = request.input('category')
    const isWeekly = request.input('is_weekly')
    const upcoming = request.input('upcoming') // Se "true", retorna apenas eventos futuros

    const query = Event.query().orderBy('date', 'asc')

    if (category) {
      query.where('category', category)
    }

    if (isWeekly !== undefined) {
      query.where('is_weekly', isWeekly === 'true')
    }

    if (upcoming === 'true') {
      query.where('date', '>=', new Date().toISOString().split('T')[0])
    }

    const events = await query.paginate(page, limit)
    return response.ok(events)
  }

  /**
   * Obter um evento especifico
   * GET /api/events/:id
   */
  async show({ params, response }: HttpContext) {
    const event = await Event.findOrFail(params.id)
    return response.ok(event)
  }

  /**
   * Criar novo evento (autenticado)
   * POST /api/events
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createEventValidator)
    const event = await Event.create(data)
    return response.created(event)
  }

  /**
   * Atualizar evento existente (autenticado)
   * PUT /api/events/:id
   */
  async update({ params, request, response }: HttpContext) {
    const event = await Event.findOrFail(params.id)
    const data = await request.validateUsing(updateEventValidator)
    event.merge(data)
    await event.save()
    return response.ok(event)
  }

  /**
   * Remover evento (autenticado)
   * DELETE /api/events/:id
   */
  async destroy({ params, response }: HttpContext) {
    const event = await Event.findOrFail(params.id)
    await event.delete()
    return response.ok({ message: 'Evento removido com sucesso' })
  }
}
