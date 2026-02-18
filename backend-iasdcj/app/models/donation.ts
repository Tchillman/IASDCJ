import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Donation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare donorName: string | null

  @column()
  declare donorEmail: string | null

  @column()
  declare amount: number

  /** Tipo: dizimo, oferta, doacao */
  @column()
  declare type: string

  /** Metodo: transferencia, presencial */
  @column()
  declare method: string

  @column()
  declare reference: string | null

  @column()
  declare notes: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
