const path = require('path');
const fs = require('fs');


const filesIn = (dirname, {
  exclude,
}) => {
  let files = fs
    .readdirSync(dirname)
    .filter(f => {
      return path.extname(f) === '.js' && f !== path.basename(exclude)
    });
  return files;
};

module.exports = {
  filesIn,
}
