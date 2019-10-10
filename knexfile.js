require('./system/config').run();

module.exports = {

  development: {
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
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
      stub: './database/migration.stub',
    },
    seeds: {
      directory: './database/seed'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
