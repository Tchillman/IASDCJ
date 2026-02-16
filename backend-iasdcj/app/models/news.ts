import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class News extends BaseModel {
  static table = 'news'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare category: string

  @column()
  declare image: string | null

  @column()
  declare excerpt: string

  @column()
  declare content: string | null

  @column()
  declare published: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
