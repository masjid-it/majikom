/**
 * Auth Middleware
 * Memeriksa akses user (sudah login atau belum)
 */
module.exports = (req, res, next) => {
  if (!!req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};
