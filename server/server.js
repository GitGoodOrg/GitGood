const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * define route handlers
 */
// const sessionController = require('./controllers/sessionController');

app.get('/',(req,res) => {
  return res.sendFile(path.resolve('dist','index.html'));
});

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
// app.get('/dist', (req, res) => {
//   return res.sendFile(path.resolve('dist','bundle.js'));
// });

app.use('/api', apiRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.get('/logout',
  (req, res) => {
    return res
      .clearCookie('access_token')
      .redirect('/');
  }
);

app.use(express.static(path.resolve(__dirname, '../client')));

// catch-all route handler for any requests to an unknown route
// app.get('/*', (req, res) => res.redirect('/'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
