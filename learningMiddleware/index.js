const express = require("express");

const app = express();

/**
 * Middleware function started here
 * coustome create middleware
 */

const warnningMessage = (req, res, next) => {
  return res.status(200).send({
    message:
      "Request REST Endpoint is in working progress please try after 1 day",
  });
};

const requestTimeLogger = (req, res, next) => {
  console.log("Req come at: " + Date.now());
  next();
};
/**
 * I want express to used Middleware
 */

app.use(requestTimeLogger); //plugging middled ware
app.use(warnningMessage); //this is called chaining middleware

app.listen(8080, () => {
  console.log("Server has started port no 8080");
});
