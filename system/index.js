const load = require('./helpers/load');
const bodyParser = require('body-parser');
const express = require('express');

const init = (app) => {
  app.use(express.static(`${__dirname}/../public`));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // loading all system files
  load.filesIn(__dirname, {
    exclude: __filename,
  })
  .forEach(file => {
    require(`./${file}`).run(app);
  });
};

module.exports = {
  init
};
