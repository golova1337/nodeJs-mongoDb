const CategoriesService = require("../src/categories/categories.service");
const CategoriesRepository = require("../src/categories/categories.repository");
jest.mock("../src/categories/categories.repository");

describe("CategoriesController", () => {
  it("should call  create method ", async () => {
    const body = { name: "new category" };
    const photos = [{ path: "local store" }];

    await CategoriesService.create(body, photos);
    expect(CategoriesRepository.create).toHaveBeenCalledTimes(1);
  });

  it("should call  getAll ", async () => {
    await CategoriesService.getAll();
    expect(CategoriesRepository.getAll).toHaveBeenCalledTimes(1);
  });

  it("should call  get By id", async () => {
    await CategoriesService.getByid(id);
    expect(CategoriesRepository.getByid).toHaveBeenCalledTimes(1);
  });

  it("should call  update By Id", async () => {
    await CategoriesService.updateById(id);
    expect(CategoriesRepository.updateById).toHaveBeenCalledTimes(1);
  });

  it("should call  remove By Id", async () => {
    await CategoriesService.removeById(id);
    expect(CategoriesRepository.removeById).toHaveBeenCalledTimes(1);
  });
});
