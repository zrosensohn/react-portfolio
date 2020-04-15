const router = require("express").Router();
const mandrillController = require("../../controllers/mandrillController");
const contactValidator = require('../../utils/validators');

// Matches with "/api/mandrill/contact"
router.route("/contact")
  .post(contactValidator, mandrillController.send);

module.exports = router;
