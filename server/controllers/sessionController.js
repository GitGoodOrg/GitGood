const { query } = require('express');
const db = require('../db/db');
var jwt = require('jsonwebtoken');

const sessionController = {};

//Check if user is already logged in
// sessionController.isLoggedIn = (req, res, next) => {
//   try {
//     if(req.cookies.access_token) {
//       var decoded = jwt.verify(req.cookies.access_token, process.env.SECRET_KEY);
//       if(decoded.loggedIn === true) {
//         res.locals.username = decoded.username;
//         return next();
//       }
//       else {
//         return res
//           .clearCookie('access_token')
//           .json('not logged in');
//       }
//     } else {
//       return res
//         .json('not logged in');
//     }
//   } catch(err) {
//     return next({
//       log: `Cannot check if user is logged in (sessionController) Err: ${err.message}`,
//       status: 400,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

// sessionController.isLoggedInOptional = (req, res, next) => {
//   try {
//     if(req.cookies.access_token) {
//       var decoded = jwt.verify(req.cookies.access_token, process.env.SECRET_KEY);
//       if(decoded.loggedIn === true) {
//         res.locals.username = decoded.username;
//         return next();
//       }
//     }
//     res.locals.username = false;
//     return next();
//   } catch(err) {
//     return next({
//       log: `Cannot check if user is logged in (optional) Err: ${err.message}`,
//       status: 400,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

// //add session to the database
// sessionController.startSession = (req, res, next) => {
//   try {
//     const {username} = req.body;
//     var token = jwt.sign({ username: username, loggedIn: true }, process.env.SECRET_KEY);
//     res.cookie('access_token', token, {httpOnly: true});
//     return next();
//   } catch(err) {
//     return next({
//       log: `Cannot start session Err: ${err.message}`,
//       status: 400,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

module.exports = sessionController;
