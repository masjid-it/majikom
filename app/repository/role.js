const db = require('../../system/database');

/**
 * Roles
 * Menyediakan data roles
 */
const all = async () => {
  return await db.select().from('roles');
}

module.exports = {
  all,
};
