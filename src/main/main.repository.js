const Category = require("../categories/categories.scheme");

class MainRepository {
  async getAllCarsByCategory() {
    return Category.aggregate().lookup({
      from: "cars",
      localField: "_id",
      foreignField: "category_id",
      as: "cars",
    });
  }
}

module.exports = new MainRepository();
