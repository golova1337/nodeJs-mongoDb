const express = require("express");
const router = express.Router();
const MainController = require("./main.controller");

router.get("/", MainController.getAllCarsByCategory);
router.get("/login", MainController.showLoginPage);

module.exports = router;
