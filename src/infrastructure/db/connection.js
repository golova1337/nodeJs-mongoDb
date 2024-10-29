const mongoose = require("mongoose");
const configuration = require("../config/db.config");

const URL = `mongodb://${configuration.username}:${configuration.password}@mongo:${configuration.port}`;
async function main() {
  try {
    await mongoose.connect(URL);
    console.log("connection was successfull");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
}

module.exports = main;
