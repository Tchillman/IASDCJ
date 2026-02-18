import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { registerValidator, loginValidator } from '#validators/auth'

export default class AuthController {
  /**
   * Registo de novo utilizador (apenas admin pode criar)
   * POST /api/auth/register
   */
  async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      role: 'editor',
    })

    const token = await User.accessTokens.create(user)

    return response.created({
      message: 'Utilizador registado com sucesso',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token: token,
    })
  }

  /**
   * Login do utilizador
   * POST /api/auth/login
   */
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.ok({
      message: 'Login realizado com sucesso',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token: token,
    })
  }

  /**
   * Logout (revoga o token actual)
   * POST /api/auth/logout
   */
  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const token = auth.user!.currentAccessToken
    await User.accessTokens.delete(user, token.identifier)

    return response.ok({ message: 'Logout realizado com sucesso' })
  }

  /**
   * Retorna os dados do utilizador autenticado
   * GET /api/auth/me
   */
  async me({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    return response.ok({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    })
  }
}
