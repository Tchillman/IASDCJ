import vine from '@vinejs/vine'

export const createSermonValidator = vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(255),
    speaker: vine.string().trim().maxLength(255),
    series: vine.string().trim().optional(),
    thumbnail: vine.string().trim().optional(),
    duration: vine.string().trim().optional(),
    views: vine.number().min(0).optional(),
    type: vine.enum(['video', 'text', 'both']),
    videoUrl: vine.string().trim().optional(),
    content: vine.string().trim().optional(),
    published: vine.boolean().optional(),
  })
)

export const updateSermonValidator = vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(255).optional(),
    speaker: vine.string().trim().maxLength(255).optional(),
    series: vine.string().trim().optional(),
    thumbnail: vine.string().trim().optional(),
    duration: vine.string().trim().optional(),
    views: vine.number().min(0).optional(),
    type: vine.enum(['video', 'text', 'both']).optional(),
    videoUrl: vine.string().trim().optional(),
    content: vine.string().trim().optional(),
    published: vine.boolean().optional(),
  })
)
