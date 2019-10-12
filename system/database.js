const knex = require('knex');

const run = () => {
  return knex({
    client: process.env.database.driver,
    connection: {
      user:     process.env.database.user,
      password: process.env.database.pass,
      database: process.env.database.name
    },
    pool: {
      min: 2,
      max: 10
    },
  });
};

const db = run();
db.run = run;

module.exports = db;
