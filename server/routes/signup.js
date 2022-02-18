const express = require('express');

const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router();

//sign up!
router.post('/', userController.addUser, 
  sessionController.startSession,
  (req, res) => res.status(200).json({status: true})
);

module.exports = router;