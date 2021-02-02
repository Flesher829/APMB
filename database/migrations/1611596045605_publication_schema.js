'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicationSchema extends Schema {
  up () {
    this.create('publications', (table) => {
      table.increments()
      table.string('titre').notNullable()
      table.text('resume').notNullable()
      table.text('texte').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('publications')
  }
}

module.exports = PublicationSchema
