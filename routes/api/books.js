const router = require("express").Router();
const controller = require("../../controllers/controller");
// const API = require("../../client/src/utils/API");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAll)
  .post(controller.save);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(controller.findById)
//   .put(controller.update)
  .delete(controller.remove);

  router
  .route("/?search=:query")
  .get();

module.exports = router;