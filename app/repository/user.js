const crypto = require('crypto');
const db = require('../../system/database');

const all = async () => {
  let users = await db.select().from('users');
  users = users.map(async(user) => {
    const role = await db.select().from('roles').where({ id: user.role_id });
    user.role = role[0];
    return user;
  });

  return await Promise.all(users);
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
