import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AboutContent extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  /** Secao: historia, missao, visao, valores */
  @column()
  declare section: string

  @column()
  declare title: string

  @column()
  declare content: string

  @column()
  declare sortOrder: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
