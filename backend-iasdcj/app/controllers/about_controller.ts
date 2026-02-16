import type { HttpContext } from '@adonisjs/core/http'
import AboutContent from '#models/about_content'
import Leader from '#models/leader'
import {
  createAboutContentValidator,
  updateAboutContentValidator,
  createLeaderValidator,
  updateLeaderValidator,
} from '#validators/about'

export default class AboutController {
  // =====================
  // CONTEUDO SOBRE (historia, missao, visao, valores)
  // =====================

  /**
   * Listar todo o conteudo da pagina Sobre (rota publica)
   * GET /api/sobre
   */
  async indexContent({ response }: HttpContext) {
    const content = await AboutContent.query().orderBy('sort_order', 'asc')
    return response.ok(content)
  }

  /**
   * Obter conteudo por secao
   * GET /api/sobre/secao/:section
   */
  async showBySection({ params, response }: HttpContext) {
    const content = await AboutContent.query().where('section', params.section).firstOrFail()
    return response.ok(content)
  }

  /**
   * Criar conteudo (autenticado)
   * POST /api/sobre
   */
  async storeContent({ request, response }: HttpContext) {
    const data = await request.validateUsing(createAboutContentValidator)
    const content = await AboutContent.create(data)
    return response.created(content)
  }

  /**
   * Atualizar conteudo (autenticado)
   * PUT /api/sobre/:id
   */
  async updateContent({ params, request, response }: HttpContext) {
    const content = await AboutContent.findOrFail(params.id)
    const data = await request.validateUsing(updateAboutContentValidator)
    content.merge(data)
    await content.save()
    return response.ok(content)
  }

  /**
   * Remover conteudo (autenticado)
   * DELETE /api/sobre/:id
   */
  async destroyContent({ params, response }: HttpContext) {
    const content = await AboutContent.findOrFail(params.id)
    await content.delete()
    return response.ok({ message: 'Conteudo removido com sucesso' })
  }

  // =====================
  // LIDERANCA
  // =====================

  /**
   * Listar lideres (rota publica)
   * GET /api/sobre/lideranca
   */
  async indexLeaders({ response }: HttpContext) {
    const leaders = await Leader.query().orderBy('sort_order', 'asc')
    return response.ok(leaders)
  }

  /**
   * Criar lider (autenticado)
   * POST /api/sobre/lideranca
   */
  async storeLeader({ request, response }: HttpContext) {
    const data = await request.validateUsing(createLeaderValidator)
    const leader = await Leader.create(data)
    return response.created(leader)
  }

  /**
   * Atualizar lider (autenticado)
   * PUT /api/sobre/lideranca/:id
   */
  async updateLeader({ params, request, response }: HttpContext) {
    const leader = await Leader.findOrFail(params.id)
    const data = await request.validateUsing(updateLeaderValidator)
    leader.merge(data)
    await leader.save()
    return response.ok(leader)
  }

  /**
   * Remover lider (autenticado)
   * DELETE /api/sobre/lideranca/:id
   */
  async destroyLeader({ params, response }: HttpContext) {
    const leader = await Leader.findOrFail(params.id)
    await leader.delete()
    return response.ok({ message: 'Lider removido com sucesso' })
  }
}
