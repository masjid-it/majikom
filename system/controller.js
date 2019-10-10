const load = require('./helpers/load');

const controllerDir = `${__dirname}/../app/controller`;

const run = (app) => {
  const files = load.filesIn(controllerDir, { exclude: '' });
  files.forEach(file => {
    const controller = require(`${controllerDir}/${file}`);
    app.use(controller);
  });
};

module.exports = {
  run
};
