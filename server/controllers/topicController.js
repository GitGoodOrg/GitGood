const db = require('../db/db');

const topicController = {};

topicController.getTopics = (req, res, next) => {

  const username = res.locals.username;

  const sqlQuery = 'SELECT * FROM topics WHERE username=$1';

  db.query(sqlQuery,[username])
    .then(payload => {
      res.locals.topics = payload.rows;
      next();
    }).catch(err => {
      return next({
        log: `topicController.getTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.getTopics. Check server log for more details.'},
      });
    });
};

topicController.postTopic = (req, res, next) => {
  const username = res.locals.username;
  const {topic_name} = req.body;
  console.log(req.body);

  const sqlQuery = 'INSERT INTO topics (username, topic_name) VALUES ($1, $2) RETURNING *';

  db.query(sqlQuery,[username, topic_name])
    .then(payload => {
      res.locals.topic = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `topicController.postTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.postTopics. Check server log for more details.'},
      });
    });
};

topicController.deleteTopic = (req, res, next) => {
  const {id} = req.params;

  const sqlQuery = 'DELETE FROM topics WHERE _id=$1 RETURNING *';

  db.query(sqlQuery,[id])
    .then(payload => {
      res.locals.topic = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `topicController.deleteTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.deleteTopics. Check server log for more details.'},
      });
    });
};

module.exports = topicController;
