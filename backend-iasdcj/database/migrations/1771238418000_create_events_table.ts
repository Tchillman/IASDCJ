import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('title').notNullable()
      table.date('date').notNullable()
      table.string('time').notNullable()
      table.string('location').notNullable()
      table.string('category').notNullable()
      table.text('description').nullable()
      table.integer('attendees').defaultTo(0)
      table.string('image').nullable()
      table.boolean('is_weekly').defaultTo(false)
      table.string('day_of_week').nullable() // Para programacao semanal: Sab, Qua, Dom, etc.

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
