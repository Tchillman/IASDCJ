import vine from '@vinejs/vine'

export const createBlogPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(255),
    author: vine.string().trim().maxLength(255),
    category: vine.string().trim().maxLength(100),
    image: vine.string().trim().optional(),
    excerpt: vine.string().trim(),
    content: vine.string().trim().optional(),
    readTime: vine.string().trim().optional(),
    published: vine.boolean().optional(),
  })
)

export const updateBlogPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(255).optional(),
    author: vine.string().trim().maxLength(255).optional(),
    category: vine.string().trim().maxLength(100).optional(),
    image: vine.string().trim().optional(),
    excerpt: vine.string().trim().optional(),
    content: vine.string().trim().optional(),
    readTime: vine.string().trim().optional(),
    published: vine.boolean().optional(),
  })
)
