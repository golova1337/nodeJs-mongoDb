const Cetegory = require("./categories.scheme");

class CetegorysRepository {
  async create(body) {
    return Cetegory.create(body);
  }

  async getAll() {
    return Cetegory.find({});
  }

  async getByid(id) {
    return Cetegory.findById(id);
  }

  async updateById(id, body) {
    return Cetegory.findByIdAndUpdate(id, body, { new: true });
  }

  async removeById(id) {
    return Cetegory.findByIdAndDelete(id);
  }
}

module.exports = new CetegorysRepository();
