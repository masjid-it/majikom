const name = 'users';

exports.up = function(knex) {
  return knex.schema.createTable(name, (table)=>{
    table.increments();
    table.string('email');
    table.string('password');
    table.integer('role_id').unsigned().notNullable();
    table.foreign('role_id').references('id').inTable('roles');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(name);
};
