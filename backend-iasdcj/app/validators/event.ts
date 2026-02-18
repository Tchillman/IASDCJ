import vine from '@vinejs/vine'

/** Validacao para criar/atualizar eventos */
export const createEventValidator = vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(255),
    date: vine.string().trim(),
    time: vine.string().trim(),
    location: vine.string().trim().maxLength(255),
    category: vine.string().trim().maxLength(100),
    description: vine.string().trim().optional(),
    attendees: vine.number().min(0).optional(),
    image: vine.string().trim().optional(),
    isWeekly: vine.boolean().optional(),
    dayOfWeek: vine.string().trim().optional(),
  })
)

export const updateEventValidator = vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(255).optional(),
    date: vine.string().trim().optional(),
    time: vine.string().trim().optional(),
    location: vine.string().trim().maxLength(255).optional(),
    category: vine.string().trim().maxLength(100).optional(),
    description: vine.string().trim().optional(),
    attendees: vine.number().min(0).optional(),
    image: vine.string().trim().optional(),
    isWeekly: vine.boolean().optional(),
    dayOfWeek: vine.string().trim().optional(),
  })
)
