const express = require("express");
const router = express.Router();
const CarsController = require("./cars.controller");
const upload = require("../infrastructure/multer/upload");

router.post("/", upload.array("photos", 12), CarsController.create);

router.get("/", CarsController.getAll);

router.get("/:id", CarsController.getByid);

router.put("/:id", CarsController.updateById);

router.delete("/:id", CarsController.removeById);

module.exports = router;
