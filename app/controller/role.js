const router = require('express').Router();
const role = require('../repository/role');
const auth = require('../middleware/auth');

/**
 * Role
 * Menampilkan list role
 */
router.get('/roles', auth, async (req, res) => {
  res.render('role', {
    roles: await role.all(),
  });
});

module.exports = router;
