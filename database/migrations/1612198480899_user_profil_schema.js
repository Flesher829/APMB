'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserProfilSchema extends Schema {
  up () {
    this.create('user_profils', (table) => {
      table.integer("user_id").unsigned();
      table.integer("profile_id").unsigned();
      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table
        .foreign("profile_id")
        .references("profiles.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.unique(["user_id", "profile_id"]);
    
      
    })
  }

  
  down () {
    this.drop('user_profils')
  }
}

module.exports = UserProfilSchema
