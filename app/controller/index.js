const router = require('express').Router();
const role = require('../repository/role');

router.get('/', async (req, res) => {
  const isLogin = true;
  if (isLogin) {
    res.render('role', {roles: await role.all()});
  } else{
    res.render('login');
  }
});

module.exports = router;
