require('dotenv').config();
const load = require('./helpers/load');

const userConfigDir = `${__dirname}/../config`;

const run = () => {
  const files = load.filesIn(userConfigDir, { exclude: `${userConfigDir}/index.js` });
  files.forEach(file => {
    const config = require(`${userConfigDir}/${file}`);
    process.env = {
      ...process['env'],
      ...config,
    }
  });
};

module.exports = {
  run
};
