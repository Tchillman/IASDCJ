import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sermons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('title').notNullable()
      table.string('speaker').notNullable()
      table.string('series').nullable() // Ex: "Serie: Vivendo com Esperanca"
      table.string('thumbnail').nullable()
      table.string('duration').nullable()
      table.integer('views').defaultTo(0)
      table.string('type').notNullable().defaultTo('video') // video, text, both
      table.string('video_url').nullable()
      table.text('content').nullable() // Conteudo textual do sermao
      table.boolean('published').defaultTo(false)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
