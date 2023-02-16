/**
 * Straing point of application
 */

const express = require("express");

const app = express();

/**
 * Accepting the client request
 * I will like to get the list of all the students
 * creating api
 * GET /studentApp/api/v1/students
 */

/**
 * In memory object of students
 */
const students = {
  1: {
    Richa: {
      name: "Richa",
      age: 23,
      jobdes: "frontenddeveloper",
      skills: "reactjs",
    },
    Ashu: {
      name: "Ashu",
      age: 26,
      jobdes: "networkengneer",
      skills: "dhcp",
    },
  },

  2: {
    Shanu: {
      name: "Shanu",
      age: 20,
      jobdes: "fullstackdeveloper",
      skills: "reactjs",
    },
    Bhanu: {
      name: "Bhanu",
      age: 19,
      jobdes: "frontenddeveloper",
      skills: "nextjs",
    },
  },
};

app.get("/studentApp/api/v1/students", (req, res) => {
  console.log("Get all the students API is called");
  /**
   * Return all the present students as response
   */
  res.status(200).send(students);
});

/**
 * Create new students
 * Create students for a class
 *
 * POST /studentApp/api/v1/classes/{classId}/students
 * 
 * {classId}=pathparrms but in node js we write this :classId
 * /studentApp/api/v1/classes/1/students
 * this means classId=1
 * Request body:
 * {
 *    
      "name": "Tokyo",
      "jobdes": "fullstackdeveloper",
      "skills": "reactjs",
 * }
 */
/**
 * Starting the server
 */
//it is convert json into object formated
app.use(express.json());

app.post("/studentApp/api/v1/classes/:classId/students", (req, res) => {
  /**
   * I need to first read the class name from the path param
   */
  console.log(req.params); //return the object container all the param

  const className = req.params.classId;

  /**
   * I would like to read request body
   */
  const studentBody = req.body;
  console.log(req.body);
  students[className][req.body.name] = studentBody;
  res.status(201).send(students[className]);
});

app.listen(4343, () => {
  console.log("Server has started port no 4343");
});
