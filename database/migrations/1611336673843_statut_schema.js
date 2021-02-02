'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatutSchema extends Schema {
  up () {
    this.create('statuts', (table) => {
      table.increments()
      table.string('statut_name',80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('statuts')
  }
}

module.exports = StatutSchema
