/**
 * This file have the logic for idea resoucse
 */

const ideas = require("../models/idea.model");

var count = 2;

/**
 * Logic to get all ideas,
 * Need to write a methode which take req,and res object and create ideas and return the response
 *
 */

exports.getIdeas = (req, res) => {
  /**
   * Logic to get all the ideas
   */

  res.status(200).send(ideas);
};

/**
 * Method to get the idea based on id
 * 127.0.0/:8080/ideaApp/api/v1/ideas/1
 */

exports.getIdeasBasedOnId = (req, res) => {
  const ideaId = req.params.id;
  const idea = ideas[ideaId];
  res.status(200).send(idea);
};

/**
 * Method to create a new idea
 */
exports.createIdea = (req, res) => {
  /**
   * I need to first create the JSON requset body into JS object
   */
  req.body.id = ++count; //we are adding a id filed
  ideas[count] = req.body;
  res.status(201).send(ideas[count]);
};

/**
 * Methode to update an existing idea
 * PUT 127.0.0/:8080/ideaApp/api/v1/ideas/1
 * request body
 */

exports.updateIdea = (req, res) => {
  const ideaId = req.params.id;
  const idea = ideas[ideaId];

  if (idea) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({
      message: "Idea id pass by not valid",
    });
  }
};

/**
 * Methode to delete the idea
 * PUT 127.0.0/:8080/ideaApp/api/v1/ideas/1
 * request body
 */
exports.deleteIdea = (req, res) => {
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    delete ideas[ideaId];
    res.status(200).send({
      message: "Successfully deleted",
    });
  } else {
    res.status(400).send({
      message: "Idea id passed is not valid",
    });
  }
};
