const express = require('express');

const sessionController = require('../controllers/sessionController');

const router = express.Router();


router.get('/',
  (req, res) => res.status(200).json(res.locals)
);


module.exports = router;
