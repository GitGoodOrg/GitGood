const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const apiRouter = require("./routes/api");
const githubRouter = require("./routes/github");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// webpack dev config
if (process.env.NODE_ENV !== "development") {
  app.use("/", express.static(path.resolve(__dirname, "../dist")));
}

app.use("/api", apiRouter);
app.use("/github", githubRouter);

app.get("/logout", (req, res) => {
  return res.clearCookie("ssid").redirect("/");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
