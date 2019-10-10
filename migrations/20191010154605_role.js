const tableName = 'roles';

exports.up = function(knex) {
  return knex.schema.createTable(tableName, (table)=>{
    table.increments();
    table.string('title').notNullable().unique();
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(tableName);
};
