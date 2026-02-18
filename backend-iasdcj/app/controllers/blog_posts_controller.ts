import type { HttpContext } from '@adonisjs/core/http'
import BlogPost from '#models/blog_post'
import { createBlogPostValidator, updateBlogPostValidator } from '#validators/blog_post'

export default class BlogPostsController {
  /**
   * Listar posts do blog (publica retorna apenas publicados)
   * GET /api/blog
   */
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 20)
    const category = request.input('category')
    const all = request.input('all') // Se "true", retorna todos (para admin)

    const query = BlogPost.query().orderBy('created_at', 'desc')

    if (all !== 'true') {
      query.where('published', true)
    }

    if (category && category !== 'Todos') {
      query.where('category', category)
    }

    const posts = await query.paginate(page, limit)
    return response.ok(posts)
  }

  /**
   * Obter post especifico
   * GET /api/blog/:id
   */
  async show({ params, response }: HttpContext) {
    const post = await BlogPost.findOrFail(params.id)
    return response.ok(post)
  }

  /**
   * Criar novo post (autenticado)
   * POST /api/blog
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createBlogPostValidator)
    const post = await BlogPost.create(data)
    return response.created(post)
  }

  /**
   * Atualizar post (autenticado)
   * PUT /api/blog/:id
   */
  async update({ params, request, response }: HttpContext) {
    const post = await BlogPost.findOrFail(params.id)
    const data = await request.validateUsing(updateBlogPostValidator)
    post.merge(data)
    await post.save()
    return response.ok(post)
  }

  /**
   * Remover post (autenticado)
   * DELETE /api/blog/:id
   */
  async destroy({ params, response }: HttpContext) {
    const post = await BlogPost.findOrFail(params.id)
    await post.delete()
    return response.ok({ message: 'Post removido com sucesso' })
  }
}
