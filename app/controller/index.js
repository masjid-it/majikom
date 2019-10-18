const router = require('express').Router();
const user = require('../repository/user');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  res.render('dashboard', {
    user_count: await user.count(),
  });
});

module.exports = router;
