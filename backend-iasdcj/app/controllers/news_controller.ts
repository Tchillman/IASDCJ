import type { HttpContext } from '@adonisjs/core/http'
import News from '#models/news'
import { createNewsValidator, updateNewsValidator } from '#validators/news'

export default class NewsController {
  /**
   * Listar noticias (publica retorna apenas publicadas)
   * GET /api/noticias
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const category = request.input('category')
    const all = request.input('all')

    const query = News.query().orderBy('created_at', 'desc')

    if (all !== 'true') {
      query.where('published', true)
    }

    if (category && category !== 'Todos') {
      query.where('category', category)
    }

    const news = await query.paginate(page, limit)
    return response.ok(news)
  }

  /**
   * Obter noticia especifica
   * GET /api/noticias/:id
   */
  async show({ params, response }: HttpContext) {
    const news = await News.findOrFail(params.id)
    return response.ok(news)
  }

  /**
   * Criar noticia (autenticado)
   * POST /api/noticias
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createNewsValidator)
    const news = await News.create(data)
    return response.created(news)
  }

  /**
   * Atualizar noticia (autenticado)
   * PUT /api/noticias/:id
   */
  async update({ params, request, response }: HttpContext) {
    const news = await News.findOrFail(params.id)
    const data = await request.validateUsing(updateNewsValidator)
    news.merge(data)
    await news.save()
    return response.ok(news)
  }

  /**
   * Remover noticia (autenticado)
   * DELETE /api/noticias/:id
   */
  async destroy({ params, response }: HttpContext) {
    const news = await News.findOrFail(params.id)
    await news.delete()
    return response.ok({ message: 'Noticia removida com sucesso' })
  }
}
