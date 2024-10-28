const express = require("express");
const router = express.Router();
const CategoryController = require("./categories.contoller");
const upload = require("../infrastructure/multer/upload");

//category
router.post("/", upload.array("photos", 12), CategoryController.create);

router.get("/", CategoryController.getAll);

router.get("/:categoryId", CategoryController.getByid);

router.put("/:categoryId", CategoryController.updateById);

router.delete("/:categoryId", CategoryController.removeById);

// //subcategory
router.post("/:categoryId/subcategories", upload.array("photos", 12), CategoryController.createSubcategory);

router.get("/:categoryId/subcategories", CategoryController.getAllSubcategoriesOfCategory);

router.get("/:categoryId/subcategories/:subcategoryId", CategoryController.getSubcategoryById);

router.get("/:categoryId/subcategories/:subcategoryId/:carId", CategoryController.getCarByCategoryAndSubcategory);

module.exports = router;
