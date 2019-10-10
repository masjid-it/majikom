const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { nama: 'hammurabi' });
});

module.exports = router;
