import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class SabbathSchoolLesson extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare quarter: string

  @column()
  declare theme: string

  @column()
  declare week: number

  @column()
  declare title: string

  @column()
  declare memoryVerse: string | null

  @column()
  declare dateRange: string | null

  @column()
  declare content: string | null

  @column()
  declare pdfUrl: string | null

  @column()
  declare isCurrent: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
