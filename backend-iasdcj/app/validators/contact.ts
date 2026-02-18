import vine from '@vinejs/vine'

/** Validacao para mensagens de contato */
export const createContactValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255),
    email: vine.string().trim().email().maxLength(254),
    phone: vine.string().trim().maxLength(50).optional(),
    subject: vine.string().trim().maxLength(255),
    message: vine.string().trim(),
  })
)
