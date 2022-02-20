const db = require('../db/db');

const subtopicController = {};

subtopicController.getSubtopics = (req, res, next) => {

  const username = res.locals.username;

  const sqlQuery = `SELECT * FROM topics WHERE username=${username}`;

  db.query(sqlQuery)
    .then(payload => {
      res.locals.subtopics = payload.rows;
      next();
    }).catch(err => {
      return next({
        log: `subtopicController.getSubtopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in subtopicController.getSubtopics. Check server log for more details.'},
      });
    });
};

subtopicController.postSubtopic = (req, res, next) => {
  const username = res.locals.username;
  const {topic_name} = req.body;

  const sqlQuery = `INSERT INTO topics (username, topic_name) VALUES ('${username}', '${topic_name}') RETURNING _id`;

  db.query(sqlQuery)
    .then(payload => {
      res.locals.subtopic = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `subtopicController.postSubtopic: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in subtopicController.postSubtopic. Check server log for more details.'},
      });
    });
};

subtopicController.deleteSubtopic = (req, res, next) => {
  const {id} = req.params;

  const sqlQuery = `DELETE FROM topics WHERE _id=${id} RETURNING *`;

  db.query(sqlQuery)
    .then(payload => {
      res.locals.subtopic = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `subtopicController.deleteSubtopic: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in subtopicController.deleteSubtopic. Check server log for more details.'},
      });
    });
};

subtopicController.putSubtopic = (req, res, next) => {
  const {id} = req.params;
  const {emoji, title, text, progress} = req.body;

  const sqlQuery = `UPDATE subtopics SET emoji='${emoji}', title='${title}', text='${text}', progress=${progress} WHERE _id=${id} RETURNING *`;

  db.query(sqlQuery)
    .then(payload => {
      res.locals.subtopic = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `subtopicController.putSubtopic: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in subtopicController.putSubtopic. Check server log for more details.'},
      });
    });
};

module.exports = subtopicController;
