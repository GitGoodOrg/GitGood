const { query } = require('express');
const db = require('../db/db');
//bringing in the object we exported that has a .query method to query the pool
// require('dotenv').config();

// const bcrypt = require('bcryptjs');

const userController = {};

// add user to database
userController.addUser = async (req, res, next) => {
  const username = res.locals.profile.login;
  console.log(res.locals.profile.login);
  //const email = res.locals.profile.email;
  //const token = res.locals.access_token;
  try {
    const sqlQuery = `
    INSERT INTO Users (name)
    VALUES($1)
    `;
    //ON CONFLICT (username) DO UPDATE
    //SET token = EXCLUDED.token;

    //might need to re-add token if errors occurr in oath
    await db.query(sqlQuery, [username]); 
    return next();
  } catch(err) {
    return next({
      log: `Cannot add user to database 
      (userController.addUser) Err: ${err.message}`,
      status: 400,
      message: { err: 'An error occurred' },
    });
  }
};

// userController.findUser = async (req, res, next) => {
//   try {
//     const {username, password} = req.body;
//     const sqlQuery = `
//     SELECT * 
//     FROM Users 
//     WHERE username = $1;
//     `;
//     const user = await db.query(sqlQuery, [username]);
//     if(!user.rows[0]) return res.json({status: false});
//     const verify = await bcrypt.compare(password, user.rows[0].password);
//     if(verify) return next();
//     else return res.json({status: false});
//   } catch(err) {
//     return next({
//       log: `Cannot find user in database Err: ${err.message}`,
//       status: 400,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

module.exports = userController;
