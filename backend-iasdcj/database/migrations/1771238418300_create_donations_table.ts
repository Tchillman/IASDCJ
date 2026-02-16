import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'donations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('donor_name').nullable()
      table.string('donor_email').nullable()
      table.decimal('amount', 12, 2).notNullable()
      table.string('type').notNullable() // dizimo, oferta, doacao
      table.string('method').notNullable() // transferencia, presencial
      table.string('reference').nullable()
      table.text('notes').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
