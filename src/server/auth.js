export const authenticate = (req, res, next) => {
  // if using 3rd auth (passport.js/cookiejs), <= put it here
  // base on technical document. handle different method, can jwt via header/params, or cookies
  const auth = true;
  if (!auth) {
    res.status(401);
    return;
  }

  // check user access: such as be locked, be expirered......

  req.authenticatedUser = { username: 'An', userId: 1 };
  req.isAuthenticated = auth;
  next();
}
