const express = require("express");
const router = express.Router();
const MainController = require("./main.controller");

router.get("/", MainController.getAllCarsByCategory);

module.exports = router;
