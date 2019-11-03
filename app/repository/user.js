const crypto = require('./crypto');
const db = require('../../system/database');

/**
 * User - All
 * Menyediakan data semua user
 */
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

/**
 * User - Find
 * Menyediakan data user berdasarkan id
 */
const find = async (id) => {
  if (!id || isNaN(id)) return undefined;
  const res = await db.from('users').where({ id }).first();
  return res;
};

/**
 * User - Count
 * Menyediakan data banyaknya user
 */
const count = async () => {
  const res = await db.from('users').count({ len: 'id' }).first();
  return res.len;
};

/**
 * User - Create
 * Menyimpan data user
 */
const create = async (user) => {
  user.password = crypto.hash(user.password);
  return await db.insert(user).into('users');
};

/**
 * User - Auth
 * Memeriksa kesesuaian data login dengan database
 */
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
  find,
  create,
  auth,
  count,
};
