const express = require("express");

const app = express();

/**
 * Middleware function started here
 * coustome create middleware
 */

let count = 0;
const countNounberofReq = (req, res, next) => {
  count = count + 1;
  res.status(200).send({
    "No of request till now": `${count}`,
  });
  console.log(count);
  next();
};

/**
 * I want express to used Middleware
 */

app.use(countNounberofReq); //plugging middled ware

app.listen(8080, () => {
  console.log("Server has started port no 8080");
});
