const config = require("./infrastructure/config/envConfig");


const express = require("express");
const app = express();

const logger = require("./logger/logger");
const connection = require("./infrastructure/db/connection")();

const carsRouter = require("./cars/cars.router");
const categoryRouter = require("./categories/categories.router");
const mainRouter = require("./main/main.router");

// Middleware for parsing request body and logging requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//Routers
app.use("/", mainRouter);
app.use("/cars", carsRouter);
app.use("/categories", categoryRouter);

app.listen(parseInt(process.env.PORT, 10) || 3000, () => {
  console.log(`Example app listening on port `);
});
