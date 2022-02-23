const db = require("../db/db");

const userController = {};

userController.addUser = async (req, res, next) => {
  const username = res.locals.profile.login;
  const email = res.locals.profile.email;
  const token = res.locals.access_token;
  try {
    const sqlQuery = `
    INSERT INTO Users (username, email, token)
    VALUES($1,$2, $3) 
    ON CONFLICT (username) DO UPDATE
    SET token = EXCLUDED.token;
    `;
    await db.query(sqlQuery, [username, email, token]);
    return next();
  } catch (err) {
    return next({
      log: `Cannot add user to database 
      (userController.addUser) Err: ${err.message}`,
      status: 400,
      message: { err: "An error occurred" },
    });
  }
};

module.exports = userController;
