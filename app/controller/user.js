const router = require('express').Router();
const user = require('../repository/user');
const role = require('../repository/role');
const auth = require('../middleware/auth');

/**
 * User
 * Menampilkan halaman user management
 */
router.get('/users', auth, async (req, res) => {
  const users = await user.all();
  res.render('user', { users });
});

/**
 * User - Tambah
 * Menampilkan halaman tambah user
 */
router.get('/users/add', auth, async (req, res) => {
  res.render('user/add', { roles: await role.all() });
});

/**
 * User - Tambah Action
 * Menerima data user untuk disimpan
 */
router.post('/users/add', auth, async (req, res) => {
  const { email, password, role } = req.body;
  await user.create({
    email,
    password,
    role_id: role,
  });
  res.redirect('/users');
});

/**
 * User - Ubah
 * Menampilkan halaman ubah user
 */
router.get('/users/edit/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id);
  const userById = await user.find(id);

  if (!userById) return res.redirect('/users');

  res.render('user/edit', {
    user: userById,
    roles: await role.all(),
  });
});

module.exports = router;
