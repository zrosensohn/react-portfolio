const router = require("express").Router();
const mandrillRoutes = require("./mandrill");

// Mandrill routes
// api/mandrill
router.use("/mandrill", mandrillRoutes);

module.exports = router;
