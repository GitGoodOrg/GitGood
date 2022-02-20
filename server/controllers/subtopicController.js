const db = require('../db/db');

const subtopicController = {};

subtopicController.getSubtopics = (req, res, next) => {

  const {topic_id} = req.params;

  const sqlQuery = 'SELECT * FROM subtopics WHERE topic_id=$1';

  db.query(sqlQuery, [topic_id])
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
  const {topic_id} = req.params;

  const sqlQuery = 'INSERT INTO subtopics (topic_id) VALUES ($1) RETURNING *';
  console.log('topic_id',topic_id);
  db.query(sqlQuery, [topic_id])
    .then(payload => {
      res.locals.subtopic = payload.rows;
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

  const sqlQuery = 'DELETE FROM subtopics WHERE _id=$1 RETURNING *';

  db.query(sqlQuery, [id])
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
