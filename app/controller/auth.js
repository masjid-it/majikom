const router = require('express').Router();
const auth = require('../middleware/auth');
const user = require('../repository/user');

/**
 * Login
 * Menampilkan halaman login
 */
router.get('/login', async (req, res) => {
  res.render('login');
});

/**
 * Login Action
 * Menerima data login berupa email dan password
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const authentication = await user.auth(email, password);
  if (authentication.error) {
    res.redirect('/login');
  } else {
    req.session.user = authentication.user;
    res.redirect('/');
  }
});

/**
 * Logout
 * Membersihkan data login
 */
router.get('/logout', auth, async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
