import vine from '@vinejs/vine'

/** Validacao de registo de utilizador */
export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().maxLength(255),
    email: vine.string().trim().email().maxLength(254),
    password: vine.string().minLength(6).maxLength(128),
  })
)

/** Validacao de login */
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string(),
  })
)
