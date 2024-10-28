const Car = require("./cars.scheme");

class CarsRepository {
  async create(body) {
    return Car.create(body);
  }

  async getAll() {
    return Car.find({});
  }

  async getByid(id) {
    return Car.findById(id);
  }

  async updateById(id, body) {
    return Car.findByIdAndUpdate(id, body, { new: true });
  }

  async removeById(id) {
    return Car.findByIdAndDelete(id);
  }
}

module.exports = new CarsRepository();
