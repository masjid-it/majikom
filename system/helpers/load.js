const path = require('path');
const fs = require('fs');


const requireAndRun = (dirname) => {
  let files = fs
    .readdirSync(dirname)
    .filter(f => path.extname(f) === '.js' && f !== __filename);
  console.log(files);
};

module.exports = {
  requireAndRun,
}
