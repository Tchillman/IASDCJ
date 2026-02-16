import vine from '@vinejs/vine'

export const createDonationValidator = vine.compile(
  vine.object({
    donorName: vine.string().trim().maxLength(255).optional(),
    donorEmail: vine.string().trim().email().optional(),
    amount: vine.number().min(0),
    type: vine.enum(['dizimo', 'oferta', 'doacao']),
    method: vine.enum(['transferencia', 'presencial']),
    reference: vine.string().trim().optional(),
    notes: vine.string().trim().optional(),
  })
)
