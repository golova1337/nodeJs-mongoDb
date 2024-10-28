const MainRepository = require("./main.repository");

class MainService {
  async getAllCarsByCategory() {
    return MainRepository.getAllCarsByCategory();
  }
}
module.exports = new MainService();
