import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Sermon extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare speaker: string

  @column()
  declare series: string | null

  @column()
  declare thumbnail: string | null

  @column()
  declare duration: string | null

  @column()
  declare views: number

  /** Tipo de sermao: video, text, both */
  @column()
  declare type: string

  @column()
  declare videoUrl: string | null

  @column()
  declare content: string | null

  @column()
  declare published: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
