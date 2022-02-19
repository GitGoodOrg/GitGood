const express = require('express');

const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');
const OAuthController = require('../controllers/OAuthController');

const router = express.Router();

//test comment dev branch
//sign up!
router.get('/auth', (req, res) => {

  const url = 'https://github.com/login/oauth/authorize?' 
    + 'scope=user,repo&'
    + 'redirect_uri=http://localhost:3000/github/callback&'
    + 'client_id=' + process.env.CLIENT_ID;
  res.redirect(url);

});

router.get('/callback', 
  OAuthController.getToken, 
  OAuthController.getProfile,
  sessionController.startSession,
  userController.addUser,
  (req, res) => {
    // FOR DEV SERVER ONLY
    res.redirect('http://localhost:8080/');
  });


module.exports = router;