const router = require('express').Router();
const user = require('../repository/user');
const role = require('../repository/role');
const auth = require('../middleware/auth');

router.get('/users', auth, async (req, res) => {
  res.render('user', { users: await user.all() });
});

router.get('/users/add', auth, async (req, res) => {
  res.render('user/add', { roles: await role.all() });
});

router.post('/users/add', auth, async (req, res) => {
  const { email, password, role } = req.body;
  await user.create({
    email,
    password,
    role_id: role,
  });
  res.redirect('/users');
});

module.exports = router;
