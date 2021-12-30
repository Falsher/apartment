const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config;
const routerApartment = require("./router/routerApartment");
const app = express();
const http = require("http").createServer(app);

const { DB_HOST, PORT = 8090 } = process.env;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());
app.use("/auth", routerApartment);

const start = async () => {
  try {
    await mongoose.connect(DB_HOST);
    http.listen(PORT, () => console.log(`${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
};
start();
