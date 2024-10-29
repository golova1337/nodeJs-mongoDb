const express = require("express");
const router = express.Router();
const AdminController = require("./admin.controller");

router.get("/edit-car", AdminController.editCar);

module.exports = router;
