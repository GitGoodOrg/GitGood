const express = require('express');

const sessionController = require('../controllers/sessionController');
const topicController = require('../controllers/topicController');
const subtopicController = require('../controllers/subtopicController');

const router = express.Router();

// TOPIC - CRUD routes
router.get('/topic',
  sessionController.isLoggedIn,
  topicController.getTopics,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.post('/topic/',
  sessionController.isLoggedIn,
  topicController.postTopic,
  (req, res) => res.status(200).json(res.locals.topic)
);

router.delete('/topic/:id',
  sessionController.isLoggedIn,
  topicController.deleteTopic,
  (req, res) => res.status(200).json(res.locals.topic)
);

// SUBTOPIC - CRUD routes
router.get('/subtopic/:topic_id',
  sessionController.isLoggedIn,
  subtopicController.getSubtopics,
  (req, res) => res.status(200).json(res.locals.subtopics)
);

router.post('/subtopic/:topic_id',
  sessionController.isLoggedIn,
  subtopicController.postSubtopic,
  (req, res) => res.status(200).json(res.locals.subtopic)
);

router.delete('/subtopic/:id',
  sessionController.isLoggedIn,
  subtopicController.deleteSubtopic,
  (req, res) => res.status(200).json(res.locals.subtopic)
);

router.put('/subtopic/:id',
  sessionController.isLoggedIn,
  subtopicController.putSubtopic,
  (req, res) => res.status(200).json(res.locals.subtopic)
);

module.exports = router;
