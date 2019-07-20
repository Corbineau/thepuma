const router = require("express").Router();
const gControl = require("../../controllers/gControl");

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;