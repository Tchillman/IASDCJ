import vine from '@vinejs/vine'

export const createLessonValidator = vine.compile(
  vine.object({
    quarter: vine.string().trim().maxLength(100),
    theme: vine.string().trim().maxLength(255),
    week: vine.number().min(1).max(14),
    title: vine.string().trim().maxLength(255),
    memoryVerse: vine.string().trim().optional(),
    dateRange: vine.string().trim().optional(),
    content: vine.string().trim().optional(),
    pdfUrl: vine.string().trim().optional(),
    isCurrent: vine.boolean().optional(),
  })
)

export const updateLessonValidator = vine.compile(
  vine.object({
    quarter: vine.string().trim().maxLength(100).optional(),
    theme: vine.string().trim().maxLength(255).optional(),
    week: vine.number().min(1).max(14).optional(),
    title: vine.string().trim().maxLength(255).optional(),
    memoryVerse: vine.string().trim().optional(),
    dateRange: vine.string().trim().optional(),
    content: vine.string().trim().optional(),
    pdfUrl: vine.string().trim().optional(),
    isCurrent: vine.boolean().optional(),
  })
)

export const createClassValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255),
    time: vine.string().trim(),
    room: vine.string().trim().maxLength(100),
    teacher: vine.string().trim().maxLength(255),
  })
)

export const updateClassValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255).optional(),
    time: vine.string().trim().optional(),
    room: vine.string().trim().maxLength(100).optional(),
    teacher: vine.string().trim().maxLength(255).optional(),
  })
)
