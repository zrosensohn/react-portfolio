const router = require("express").Router();
const mandrillRoutes = require("./mandrill");

// Mandrill routes
router.use("/mandrill", mandrillRoutes);

module.exports = router;
