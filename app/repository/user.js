const crypto = require('./crypto');
const db = require('../../system/database');

const all = async () => {
  let users = await db.select().from('users');
  users = users.map(async(user) => {
    user.role = await db.select()
      .from('roles')
      .where({ id: user.role_id })
      .first();
    return user;
  });

  return await Promise.all(users);
}

const count = async () => {
  const res = await db.from('users').count({ len: 'id' }).first();
  return res.len;
};

const create = async (user) => {
  user.password = crypto.hash(user.password);
  return await db.insert(user).into('users');
};

const auth = async (email, password) => {
  let user = await db.select().from('users').where({ email }).first();

  if (!user) {
    return { error: true, field: 'email' };
  }

  if (!crypto.compare(password, user.password)) {
    return { error: true, field: 'password' };
  }

  user.role = await db.select()
    .from('roles')
    .where({ id: user.role_id })
    .first();

  return { error: false, user };
};

module.exports = {
  all,
  create,
  auth,
  count,
};
