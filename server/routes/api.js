const express = require('express');

const sessionController = require('../controllers/sessionController');
const topicController = require('../controllers/topicController');

const router = express.Router();

// TOPIC - CRUD routes
router.get('/topic',
  sessionController.isLoggedIn,
  topicController.getTopics,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.post('/topic',
  sessionController.isLoggedIn,
  topicController.postTopic,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.delete('/topic',
  sessionController.isLoggedIn,
  topicController.deleteTopic,
  (req, res) => res.status(200).json(res.locals.topics)
);

// SUBTOPIC - CRUD routes
router.get('/subtopic',
  sessionController.isLoggedIn,
  topicController.getTopics,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.post('/subtopic',
  sessionController.isLoggedIn,
  topicController.postTopic,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.delete('/subtopic',
  sessionController.isLoggedIn,
  topicController.postTopic,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.put('/subtopic',
  sessionController.isLoggedIn,
  topicController.postTopic,
  (req, res) => res.status(200).json(res.locals.topics)
);

module.exports = router;
