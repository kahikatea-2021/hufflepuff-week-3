exports.up = (knex) => {
    return knex.schema.createTable('steps', (table) => {
      table.increments('id').primary()
      table.integer('recipe_id').references('recipe.id')
      table.string('sequence')
      table.string('step')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('steps')
  }