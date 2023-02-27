/**
 * We are going to define the schema of student document
 *
 * name,age
 */

const { Model } = require("mongoose");
const mongoose = require("mongoose");

/**
 * Create a the schema for student document
 */

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 20,
    require: true,
  },
  age: {
    type: Number,
    minAge: 18,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    minLength: 15,
    require: true,
  },
  createAt: {
    type: Date,
    // default: Date.now(),
    default: () => {
      return Date.now();
    },
    immutable: true,
  },
  updateAt: {
    type: Date,
    // default: Date.now(),
    default: () => {
      return Date.now();
    },
  },
  subjects: {
    type: [String],
    //custome validator
    validate: {
      validator: (s) => s.length != 0,
      message: (props) => "Subject list can not be Empty",
    },
  },
});

/**
 * Register this schema with the mongo collections and expose it other files
 */
module.exports = mongoose.model("Student", studentSchema);
