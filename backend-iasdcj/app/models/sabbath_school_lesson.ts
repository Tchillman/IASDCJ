// app/models/sabbath_school_lesson.ts
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class SabbathSchoolLesson extends BaseModel {
  static table = 'sabbath_school_lessons'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare week: number

  @column()
  declare quarter: string

  @column()
  declare title: string

  @column()
  declare theme: string | null

  @column()
  declare memoryVerse: string | null

  @column()
  declare period: string | null

  @column.date()
  declare startDate: DateTime | null

  @column.date()
  declare endDate: DateTime | null

  @column()
  declare externalLink: string | null

  @column()
  declare pdfUrl: string | null

  @column()
  declare content: string | null

  @column()
  declare downloadCount: number

  @column()
  declare isCurrent: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
