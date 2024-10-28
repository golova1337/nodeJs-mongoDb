const CarsRepository = require("./cars.repository");

class CarsService {
  async create(body, photos) {
    body.photos = photos.map((photo) => photo.path);
    return CarsRepository.create(body);
  }

  async getAll() {
    return CarsRepository.getAll();
  }

  async getByid(id) {
    return CarsRepository.getByid(id);
  }

  async updateById(id, body) {
    return CarsRepository.updateById(id, body);
  }

  async removeById(id) {
    return CarsRepository.removeById(id);
  }
}

module.exports = new CarsService();
