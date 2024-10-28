const CarsService = require("./cars.service");

class CarsController {
  async create(req, res) {
    try {
      const body = req.body;
      const photos = req.files;
      console.log(req.body);

      const newCar = await CarsService.create(body, photos);
      return res.status(201).json(newCar);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req, res) {
    try {
      const allCars = await CarsService.getAll();
      return res.status(200).json(allCars);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getByid(req, res) {
    try {
      const id = req.params.id;
      const car = await CarsService.getByid(id);
      return res.status(200).json(car);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateById(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      await CarsService.updateById(id, body);
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async removeById(req, res) {
    try {
      const id = req.params.id;
      await CarsService.removeById(id);
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new CarsController();
