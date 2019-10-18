const session = require('express-session');
require('dotenv').config();
const load = require('./helpers/load');

const userConfigDir = `${__dirname}/../config`;

const run = (app) => {
  const files = load.filesIn(userConfigDir, { exclude: `${userConfigDir}/index.js` });
  files.forEach(file => {
    const config = require(`${userConfigDir}/${file}`);
    process.env = {
      ...process['env'],
      ...config,
    }
  });

  app.use(session({
    name: `${process.env.app.name}.sid`,
    secret: process.env.app.key,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production'
    },
  }));
};

module.exports = {
  run
};
