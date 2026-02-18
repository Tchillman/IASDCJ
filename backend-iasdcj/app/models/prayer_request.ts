import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PrayerRequest extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare request: string

  /** Privacidade: public ou private */
  @column()
  declare privacy: 'public' | 'private'

  /** Quantidade de pessoas que oraram por este pedido */
  @column()
  declare prayers: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
