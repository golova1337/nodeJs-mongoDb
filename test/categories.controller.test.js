const CategoriesController = require("../src/categories/categories.contoller");
jest.mock("../src/categories/categories.service")

describe("CategoriesController", () => {
  it("should call create", async () => {
    const req = {
      body: {
        name: "New Category",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await CategoriesController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("should call get all", async () => {
    const req = {};

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await CategoriesController.getAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should call get by id", async () => {
    const req = {
      params: { categoryId: 1 },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await CategoriesController.getByid(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should call update By Id", async () => {
    const req = {
      params: { categoryId: 1 },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await CategoriesController.updateById(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
  });

  it("should call  remove By Id", async () => {
    const req = {
      params: { categoryId: 1 },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await CategoriesController.updateById(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
  });
});
