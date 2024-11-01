const config = require("./infrastructure/config/envConfig");
const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const logger = require("./common/logger/logger");
const connection = require("./infrastructure/db/connection")();

// Register '.mustache' extension with The Mustache Express
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

const carsRouter = require("./cars/cars.router");
const categoryRouter = require("./categories/categories.router");
const mainRouter = require("./main/main.router");
const adminRouter = require("./admin/admin.router");

// Middleware for parsing request body and logging requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//Routers
app.use("/", mainRouter);
app.use("/cars", carsRouter);
app.use("/categories", categoryRouter);
app.use("/admin", adminRouter);

app.listen(parseInt(process.env.PORT, 10) || 3000, () => {
  console.log(`Example app listening on port `);
});

module.exports = app;
