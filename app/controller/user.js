const router = require('express').Router();

router.get('/users', (req, res) => {
  res.send('users data');
});

module.exports = router;
