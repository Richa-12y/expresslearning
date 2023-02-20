const express = require("express");
const app = express();

/**
 * In-built middle for  convertion json to js object
 * and make it avialable as req.body
 */
app.use(express.json());

/**
 * Stitch the app with routes
 */

require("./routes/idea.routes")(app);
/**
 * Starting the server
 */
app.listen("8080", () => {
  console.log("Server hasv been started in port no 8080");
});
