const db = require('../db/db');

const topicController = {};

topicController.getTopics = (req, res, next) => {
  const sqlQuery = 'SELECT topic FROM topics';

  db.query(sqlQuery)
    .then(payload => {
      res.locals.topics = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `topicController.getTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.getTopics. Check server log for more details.'},
      });
    });
};

topicController.postTopics = (req, res, next) => {
  const sqlQuery = 'INSERT INTO ';

  db.query(sqlQuery)
    .then(payload => {
      res.locals.topics = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `topicController.getTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.getTopics. Check server log for more details.'},
      });
    });
};

topicController.updateTopics = (req, res, next) => {
  const sqlQuery = 'UPDATE tablename SET column=value WHERE _id=';

  db.query(sqlQuery)
    .then(payload => {
      res.locals.topics = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `topicController.getTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.getTopics. Check server log for more details.'},
      });
    });
};

module.exports = topicController;
