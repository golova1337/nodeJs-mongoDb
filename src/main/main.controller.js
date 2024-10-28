const MainService = require("./main.service");

class MainController {
  async getAllCarsByCategory(req, res) {
    try {
      const allCarsByCategory = await MainService.getAllCarsByCategory();
      return res.status(200).json(allCarsByCategory);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = new MainController();
