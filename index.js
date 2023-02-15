/**
 * This can be used as a starting file
 */

const express = require("express");

console.log(typeof express); //function

const app = express();
console.log(typeof app); //function

/**
 * app is the core of the whole express application
 * Everything revolve around app
 */

/**
 * Accepting the client request
 */
app.get("/", (req, res) => {
  res.status(200).send("Hello Coder ! 👩‍💻👨‍💻");
});

app.get("/home", (req, res) => {
  res.status(200).send("request for the new file");
});
/**
 * Starting a server
 */

app.listen(1315, () => {
  console.log("Server has started on 1315");
});
