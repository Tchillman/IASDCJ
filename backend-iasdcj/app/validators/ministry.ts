import vine from '@vinejs/vine'

export const createMinistryValidator = vine.compile(
  vine.object({
    slug: vine.string().trim().maxLength(100),
    title: vine.string().trim().maxLength(255),
    icon: vine.string().trim().optional(),
    color: vine.string().trim().optional(),
    description: vine.string().trim(),
    image: vine.string().trim().optional(),
    activities: vine.array(vine.string().trim()).optional(),
  })
)

export const updateMinistryValidator = vine.compile(
  vine.object({
    slug: vine.string().trim().maxLength(100).optional(),
    title: vine.string().trim().maxLength(255).optional(),
    icon: vine.string().trim().optional(),
    color: vine.string().trim().optional(),
    description: vine.string().trim().optional(),
    image: vine.string().trim().optional(),
    activities: vine.array(vine.string().trim()).optional(),
  })
)
