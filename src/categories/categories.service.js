const CategoriesRepository = require("./categories.repository");
const CarsReository = require("../cars/cars.repository");

class CategoriesService {
  async create(body, photos) {
    body.photos = photos.map((photo) => photo.path);
    return CategoriesRepository.create(body);
  }

  async getAll() {
    return CategoriesRepository.getAll();
  }

  async getByid(id) {
    return CategoriesRepository.getByid(id);
  }

  async updateById(id, body) {
    return CategoriesRepository.updateById(id, body);
  }

  async removeById(id) {
    return CategoriesRepository.removeById(id);
  }

  async createSubcategory(categoryId, bodySubcategory, photos) {
    bodySubcategory.photos = photos.map((photo) => photo.path);
    const category = await CategoriesRepository.getByid(categoryId);
    if (!category) throw new Error("Category not found");
    await category.subcategories.push(bodySubcategory);
    category.save();
  }

  async getAllSubcategoriesOfCategory(categoryId) {
    const category = await CategoriesRepository.getByid(categoryId);
    if (!category) throw new Error("Category not found");
    return category.subcategories;
  }
  
  async getSubcategoryById(categoryId, subcategoryId) {
    const category = await CategoriesRepository.getByid(categoryId);
    if (!category) throw new Error("Category not found");

    const subcategory = category.subcategories.find((subcategory) => subcategory._id == subcategoryId);
    if (!subcategory) throw new Error("Subcategory not found");
    return subcategory;
  }

  async getCarByCategoryAndSubcategory(carId) {
    return CarsReository.getByid(carId);
  }
}

module.exports = new CategoriesService();
