import vine from '@vinejs/vine'

export const createAboutContentValidator = vine.compile(
  vine.object({
    section: vine.string().trim().maxLength(100),
    title: vine.string().trim().maxLength(255),
    content: vine.string().trim(),
    sortOrder: vine.number().optional(),
  })
)

export const updateAboutContentValidator = vine.compile(
  vine.object({
    section: vine.string().trim().maxLength(100).optional(),
    title: vine.string().trim().maxLength(255).optional(),
    content: vine.string().trim().optional(),
    sortOrder: vine.number().optional(),
  })
)

export const createLeaderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255),
    role: vine.string().trim().maxLength(255),
    image: vine.string().trim().optional(),
    sortOrder: vine.number().optional(),
  })
)

export const updateLeaderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255).optional(),
    role: vine.string().trim().maxLength(255).optional(),
    image: vine.string().trim().optional(),
    sortOrder: vine.number().optional(),
  })
)
