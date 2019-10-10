const edge = require('edge.js');
const fs = require('fs');

edge.configure({ cache: process.env.NODE_ENV === 'production' });

const run = (app) => {
  app.engine('edge', (filePath, options, callback) => {
    edge.registerViews(app.settings.views);

    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        return callback(err);
      }

      return callback(null, edge.renderString(content, options));
    });
  });

  app.set('view engine', 'edge');
  app.set('views', `${__dirname}/../app/view`);
};

module.exports = {
  run
};
