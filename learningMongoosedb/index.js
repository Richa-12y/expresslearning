/**
 * I will try to connect to Mongodb
 */
const mongoose = require("mongoose");

/**
 * Will make a connection to db
 */

mongoose.connect(
  "mongodb://localhost/mydemomodb",
  () => {
    console.log("MongoDB get connected");
  },
  (err) => {
    console.log("Error while connectiong to MongoDB", err);
  }
);

const Student = require("./models/students.modle");

/**
 * db Operations
 */

async function dbOperations() {
  try {
    /**
     * I would like to add a new document
     */
    const student = await Student.create({
      name: "Richa",
      age: 22,
      email: "reone15@gmail.com",
      subjects: ["Web development"],
    });
    // const student1 = await Student.create({
    //   name: "Ashu",
    //   age: 23,
    //   email: "ashu13@gmail.com",
    //   subjects: ["Networking"],
    // });

    // const student2 = await Student.create({
    //   name: "Shanu",
    //   age: 20,
    //   email: "shanu01@gmail.com",
    //   subjects: ["Fullstack developer"],
    // });
    // const student3 = await Student.create({
    //   name: "Bhanu",
    //   age: 18,
    //   email: "bhanu15@gmail.com",
    //   subjects: ["UI/UX developer"],
    // });
    // console.log(student);
    /**Searching the documents with is */

    // const studentsn = await student.findById("63fc6d7b060a0fe54edf5025");
    // const studentsn = await student.find({ name: "Richa" });
    const studentsn = await student.findOne({ name: "Richa" });

    console.log(studentsn);
  } catch (error) {
    console.log(error);
  }
}
dbOperations();
