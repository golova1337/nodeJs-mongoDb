const MainService = require("./main.service");
const path = require("path");

class MainController {
  async getAllCarsByCategory(req, res) {
    try {
      const categories = await MainService.getAllCarsByCategory();
      return res.status(200).render("main", { categories });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async showLoginPage(req, res) {
    try {
      const filePath = path.join(`${__dirname}/../public/login.html`);
      return res.sendFile(filePath);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = new MainController();
