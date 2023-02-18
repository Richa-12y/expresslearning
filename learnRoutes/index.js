const express = require("express");
const app = express();

app.get("/students", (req, res) => {
  res.status(200).send({
    message: "Student is created",
  });
});

/**
 * it is supported all the http verb (get,put,post,delete)
 * Normally use all is bad coding p
 */
app.all("/studentsdetails", (req, res) => {
  res.status(200).send({
    message: "How you doing",
  });
});
/**
 * Multiple handler
 * cb1,cb2 is act like middleware
 * whren we used mutible middle ware like cb1 cb2 then we have to pass this in array [cb1,cb2]
 */

const cb1 = (req, res, next) => {
  console.log("First callbabk");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callbabk");
  next();
};
app.get("/movies", (req, res) => {
  console.log("Multiple handlers");
  res.status(201).send({
    message: "Movies are here",
  });
});

const studentRoute = require("./student.route");
app.use("./rootUri", studentRoute);

app.listen("1111", () => {
  console.log("Server has started in 1111");
});
