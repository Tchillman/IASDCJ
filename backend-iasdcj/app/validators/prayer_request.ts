import vine from '@vinejs/vine'

/** Validacao para pedidos de oracao (rota publica) */
export const createPrayerRequestValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255),
    email: vine.string().trim().email().optional(),
    request: vine.string().trim(),
    privacy: vine.enum(['public', 'private']),
  })
)
