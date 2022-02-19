const express = require('express');

const sessionController = require('../controllers/sessionController');
const topicController = require('../controllers/topicController');

const router = express.Router();


router.get('/',
  topicController.getTopics,
  (req, res) => res.status(200).json(res.locals.topics)
);

router.post('/',
  topicController.postTopic,
  (req, res) => res.status(200).json(res.locals.topics)
);

module.exports = router;
