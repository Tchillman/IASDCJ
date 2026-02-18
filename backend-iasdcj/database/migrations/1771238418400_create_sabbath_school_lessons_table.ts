import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sabbath_school_lessons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('quarter').notNullable() // Ex: "4o Trimestre 2025"
      table.string('theme').notNullable() // Ex: "O Evangelho de Joao"
      table.integer('week').notNullable()
      table.string('title').notNullable()
      table.string('memory_verse').nullable() // Verso para memorizar
      table.string('date_range').nullable() // Ex: "16-23 de Novembro"
      table.text('content').nullable()
      table.string('pdf_url').nullable()
      table.boolean('is_current').defaultTo(false)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
