import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ministries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('slug').notNullable().unique()
      table.string('title').notNullable()
      table.string('icon').nullable() // Nome do icone (ex: Users, Music, BookOpen)
      table.string('color').nullable() // Cor em hex
      table.text('description').notNullable()
      table.string('image').nullable()
      table.json('activities').nullable() // Array de strings com atividades

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
