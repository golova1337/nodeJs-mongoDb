const { faker } = require("@faker-js/faker");
const { MongoClient, ObjectId } = require("mongodb");
const config = require("../../config/envConfig");
const configuration = require("../../config/db.config");

const URL = `mongodb://${configuration.username}:${configuration.password}@localhost:${configuration.port}`;
console.log(URL);

function generateSeedsCategories() {
  let seedsCategories = [];
  for (let i = 0; i < 100; i++) {
    const categories = {
      name: faker.vehicle.type(),
      description: faker.lorem.sentence(),
      photos: [faker.image.url()],
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      subcategories: [
        {
          _id: new ObjectId(),
          name: faker.vehicle.type(),
          description: faker.lorem.sentence(),
          photos: [faker.image.url()],
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      ],
    };
    seedsCategories.push(categories);
  }
  return seedsCategories;
}

function generateSeedsCars(idsCategories) {
  let seedsCars = [];
  for (let i = 0; i < 100; i++) {
    const cars = {
      brand: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      price: faker.commerce.price({ min: 1000, max: 200000 }),
      description: faker.lorem.sentence(),
      color: faker.vehicle.color(),
      category_id: idsCategories[i],
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };
    seedsCars.push(cars);
  }
  return seedsCars;
}

(async function seedDB() {
  const uri = URL;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const collectionCategories = client.db("test").collection("categories");
    const collectionCars = client.db("test").collection("cars");

    const seedsCategories = generateSeedsCategories();
    collectionCategories.drop();
    const categories = await collectionCategories.insertMany(seedsCategories);

    const seedsCars = generateSeedsCars(categories.insertedIds);
    collectionCars.drop();
    const cars = await collectionCars.insertMany(seedsCars);

    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
})();
