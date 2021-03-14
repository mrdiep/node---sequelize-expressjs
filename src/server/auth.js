import Cookies from 'universal-cookie';

import { verify } from '../services/loginServices'
const ignoreRoute = ['/login', '/api/login', '/assets', '/doc', '/favicon.ico']

export const authenticate = async (req, res, next) => {
  // if using 3rd auth (passport.js/cookiejs), <= put it here
  // base on technical document. handle different method, can jwt via header/params, or cookies

  if (ignoreRoute.filter(x => req.url.startsWith(x)).length > 0) {
    next();
    return;
  }

  const cookies = new Cookies(req.headers.cookie)
  const token = cookies.get('auth') || req.headers.authorization
  const {success, decoded} = await verify(token);

  if (!success) {
    res.status(401);
    res.json({error: 'not auth'})
    return;
  }

  req.authenticatedUser = decoded;
  req.isAuthenticated = success;
  next();
};
