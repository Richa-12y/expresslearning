const express = require("express");
const app = express();

/**
 * Middleware applied at the application level
 */
const loggerDate = (req, res, next) => {
  console.log("Request recived at:+" + Date.now());
  next();
};

app.use(loggerDate);

/**
 * Middleware applied at the router level
 */

app.use("/students", function (req, res, next) {
  console.log("This is Router lever middleware");
  next();
});

app.use((req, res, next) => {
  res.status(200).send({
    message: "App is under processing",
  });
});

app.listen("7777", () => {
  console.log("Server has stared as 7777");
});
