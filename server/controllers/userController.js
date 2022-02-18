const { query } = require('express');
const db = require('../db/db');
//bringing in the object we exported that has a .query method to query the pool
require('dotenv').config();

const bcrypt = require('bcryptjs');

const userController = {};

//add user
// userController.addUser = async (req, res, next) => {
//   try {
//     const {username, password, email} = req.body;
//     const hashPass = await bcrypt.hash(password, Number(process.env.SALT_WORK_FACTOR));
//     const sqlQuery = `
//     INSERT INTO Users (username, password, email)
//     VALUES ($1, $2, $3);
//     `;
//     try{ 
//       console.log([username, hashPass, email]);
//       await db.query(sqlQuery, [username, hashPass, email]); 
//       return next();
//     }
//     catch(err) {
//       return res.json({status: false});
//     }
//   } catch(err) {
//     return next({
//       log: `Cannot add user to database Err: ${err.message}`,
//       status: 400,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

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
