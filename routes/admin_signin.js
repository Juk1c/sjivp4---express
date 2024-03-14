const express = require("express");
const router = express.Router();

// GET /
router.get("/admin_signin", function (req, res, next) {
  res.render("admin_signin");
});

module.exports = router;