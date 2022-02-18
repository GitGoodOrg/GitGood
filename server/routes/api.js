const express = require('express');

const sessionController = require('../controllers/sessionController');
const commentController = require('../controllers/commentController');
const likeController = require('../controllers/likeController');
const carController = require('../controllers/carController');

const router = express.Router();


router.get('/',
  (req, res) => res.status(200).json(res.locals)
);


module.exports = router;
