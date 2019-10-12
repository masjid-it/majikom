const db = require('../../system/database');

const all = async () => {
  return await db.select().from('roles');
}

module.exports = {
  all,
};
