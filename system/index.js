const load = require('./helpers/load');

load.filesIn(__dirname, {
  exclude: __filename,
})
.forEach(file => {
  require(`./${file}`).run();
});
