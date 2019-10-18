const crypto = require('crypto');
const db = require('../../system/database');

const all = async () => {
  return await db.select().from('users').innerJoin('roles', 'users.role_id', 'roles.id');
}

const create = async (user) => {
  user.password = crypto.createHmac('sha256', process.env.KEY)
                    .update(user.password)
                    .digest('hex');
  return await db.insert(user).into('users');
};

module.exports = {
  all,
  create,
};
