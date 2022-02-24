const db = require('../db/db');

const topicController = {};

topicController.getTopics = (req, res, next) => {
  //retrieve the single category from database
  const sqlQuery = 'SELECT * FROM categories';
  db.query(sqlQuery)
    .then(payload => {
      res.locals.topics = payload.rows;
      next();
    }).catch(err => {
      return next({
        log: `topicController.getTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.getTopics. Check server log for more details.' },
      });
    });
};

topicController.postTopic = async (req, res, next) => {

  const { name } = req.body;


  const sqlQuery = 'INSERT INTO categories (name) VALUES ($1) RETURNING *';

  try {
    const nT = await db.query(sqlQuery, [name]);
    res.locals.topic = nT.rows[0];
    next();
  } catch (err) {
    return next({
      log: `topicController.postTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: 'Error occurred in topicController.postTopics. Check server log for more details.' },
    });
  }
  // db.query(sqlQuery,[category])
  //   .then(payload => {
  //     res.locals.topic = payload.rows[0];
  //     next();
  //   }).catch(err => {
  //     return next({
  //       log: `topicController.postTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
  //       message: { err: 'Error occurred in topicController.postTopics. Check server log for more details.'},
  //     });
  //   });
};

topicController.deleteTopic = (req, res, next) => {
  const { id } = req.params;

  const sqlQuery = 'DELETE FROM topics WHERE _id=$1 RETURNING *';

  db.query(sqlQuery, [id])
    .then(payload => {
      res.locals.topic = payload.rows[0];
      next();
    }).catch(err => {
      return next({
        log: `topicController.deleteTopics: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
        message: { err: 'Error occurred in topicController.deleteTopics. Check server log for more details.' },
      });
    });
};

module.exports = topicController;
