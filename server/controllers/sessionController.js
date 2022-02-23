var jwt = require("jsonwebtoken");

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  try {
    const username = res.locals.profile.login;
    const token = jwt.sign({ username: username }, process.env.SECRET_KEY);
    res.cookie("ssid", token);
    return next();
  } catch (err) {
    return next({
      log: `Cannot start session. Error in sessionController.startSession Err: ${err.message}`,
      status: 500,
      message: { err: "An error occurred" },
    });
  }
};

sessionController.isLoggedIn = (req, res, next) => {
  try {
    if (req.cookies.ssid) {
      const decoded = jwt.verify(req.cookies.ssid, process.env.SECRET_KEY);
      if (decoded.username) {
        res.locals.username = decoded.username;
        return next();
      } else {
        //JWT exists but is not verified (e.g. a user creates an ssid cookie themselves in the browser)
        return res.clearCookie("access_token").json("not logged in");
      }
    } else {
      //SSID cookie does not exist
      //In Dev, bypass the need to login
      if (process.env.NODE_ENV === "development") {
        // TODO - change
        res.locals.username = "nlakshman";
        return next();
      } else {
        return res.json("not logged in");
      }
    }
  } catch (err) {
    return next({
      log: `Cannot check if user is logged in (sessionController.isLoggedIn) Err: ${err.message}`,
      status: 500,
      message: { err: "An error occurred" },
    });
  }
};

module.exports = sessionController;
