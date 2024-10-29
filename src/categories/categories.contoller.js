const CategoriesService = require("./categories.service");

class CategoriesController {
  async create(req, res) {
    const body = req.body;
    const photos = req.files;
    try {
      const newCategory = await CategoriesService.create(body, photos);
      return res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req, res) {
    try {
      const allCategories = await CategoriesService.getAll();
      return res.status(200).json(allCategories);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getByid(req, res) {
    const categoryId = req.params.categoryId;
    try {
      const category = await CategoriesService.getByid(categoryId);
      return res.status(200).render("category", category);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateById(req, res) {
    const body = req.body;
    const categoryId = req.params.categoryId;
    try {
      await CategoriesService.updateById(categoryId, body);
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async removeById(req, res) {
    const categoryId = req.params.categoryId;
    try {
      await CategoriesService.removeById(categoryId);
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createSubcategory(req, res) {
    const bodySubcategory = req.body;
    const photos = req.files;
    const categoryId = req.params.categoryId;
    try {
      const newCategory = await CategoriesService.createSubcategory(categoryId, bodySubcategory, photos);
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAllSubcategoriesOfCategory(req, res) {
    const categoryId = req.params.categoryId;
    try {
      const subcategories = await CategoriesService.getAllSubcategoriesOfCategory(categoryId);
      return res.status(201).json(subcategories);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getSubcategoryById(req, res) {
    const { categoryId, subcategoryId } = req.params;
    try {
      const subcategories = await CategoriesService.getSubcategoryById(categoryId, subcategoryId);
      return res.status(201).json(subcategories);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCarByCategoryAndSubcategory(req, res) {
    const { carId } = req.params;
    try {
      const subcategories = await CategoriesService.getCarByCategoryAndSubcategory(carId);
    } catch (error) {}
  }
}

module.exports = new CategoriesController();
