const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config;
const routerApartment = require("./router/routerApartment");
const app = express();
const http = require("http").createServer(app);
const { DB_HOST, PORT = 8090 } = process.env;
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.end(`
  <div>
    <a href="/auth/getApartment">Array</a>
    <h1>Hello</h1>
  </div>`);
});

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
