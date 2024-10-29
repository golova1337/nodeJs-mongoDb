const path = require("path");

class AdminController {
  async editCar(req, res) {
    try {
      const filePath = path.join(`${__dirname}/../public/edit-car.html`);
      return res.sendFile(filePath);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new AdminController();
