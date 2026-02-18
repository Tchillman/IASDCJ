import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare date: string

  @column()
  declare time: string

  @column()
  declare location: string

  @column()
  declare category: string

  @column()
  declare description: string | null

  @column()
  declare attendees: number

  @column()
  declare image: string | null

  /** Indica se e um evento da programacao semanal regular */
  @column()
  declare isWeekly: boolean

  /** Dia da semana para eventos semanais (Sab, Qua, Dom, etc.) */
  @column()
  declare dayOfWeek: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
