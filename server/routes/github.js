const express = require("express");

const sessionController = require("../controllers/sessionController");
const userController = require("../controllers/userController");
const githubOAuthController = require("../controllers/GithubOAuthController");

const router = express.Router();

//Authorize user via Github redirect
router.get("/auth", (req, res) => {
  console.log("got auth request");
  const url =
    "https://github.com/login/oauth/authorize?" +
    "scope=user,repo&" +
    "redirect_uri=http://localhost:3000/github/callback&" +
    "client_id=" +
    process.env.CLIENT_ID;
  res.redirect(url);
});

//Process Github Oauth callback to start user's session
router.get(
  "/callback",
  githubOAuthController.getToken,
  githubOAuthController.getProfile,
  sessionController.startSession,
  userController.addUser,
  (req, res) => {
    //TODO - why are we redirecting to 8080?
    if (process.env.NODE_ENV === "development") {
      res.redirect("http://localhost:8080/");
    } else {
      res.redirect("/");
    }
  }
);

module.exports = router;
