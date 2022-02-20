const { query } = require('express');
const db = require('../db/db');
var jwt = require('jsonwebtoken');

const sessionController = {};

//Check if user is already logged in
sessionController.isLoggedIn = (req, res, next) => {
  try {
    if(req.cookies.ssid) {
      const decoded = jwt.verify(req.cookies.ssid, process.env.SECRET_KEY);
      if(decoded.username !== undefined) {
        res.locals.username = decoded.username;
        return next();
      }
      else {
        //JWT exists but is not verified
        return res
          .clearCookie('access_token')
          .json('not logged in');
      }
      //JWT does not exist
    } else {
      return res
        .json('not logged in');
    }
  } catch(err) {
    return next({
      log: `Cannot check if user is logged in (sessionController.isLoggedIn) Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// add session JWT to cookies
sessionController.startSession = (req, res, next) => {
  try {
    const username = res.locals.profile.login;
    const email = res.locals.profile.email;
    const token = jwt.sign({ username: username }, process.env.SECRET_KEY);
    res.cookie('ssid', token, {httpOnly: true});
    return next();
  } catch(err) {
    return next({
      log: `Cannot start session. Error in sessionController.startSession Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = sessionController;
