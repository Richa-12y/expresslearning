/**
 * This file will be used to define the routes for the idea resocuse
 *
 */
const ideaController = require("../controllers/idea.controller");

/**
 * Define a routes for getting all the ideas
 */

module.exports = (app) => {
  /**
   * GET 127.0.0/:8080/ideaApp/api/v1/ideas
   */
  app.get("/ideaApp/api/v1/ideas", ideaController.getIdeas);

  /**
   * GET 127.0.0/:8080/ideaApp/api/v1/ideas/1
   */
  app.get("/ideaApp/api/v1/ideas/:id", ideaController.getIdeasBasedOnId);

  /**
   * POST 127.0.0/:8080/ideaApp/api/v1/ideas
   */
  app.post("/ideaApp/api/v1/ideas", ideaController.createIdea);

  /**
   * PUT 127.0.0/:8080/ideaApp/api/v1/ideas/1
   */
  app.put("/ideaApp/api/v1/ideas/:id", ideaController.updateIdea);

  /**
   * DELETE 127.0.0/:8080/ideaApp/api/v1/ideas/1
   */
  app.delete("/ideaApp/api/v1/ideas/:id", ideaController.deleteIdea);
};
