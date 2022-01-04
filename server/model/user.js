const { Schema, model } = require("mongoose");

const userModel = new Schema({
  name: { type: "string", unique: true, required: true },
  password: { type: "string", required: true },
});

module.exports = model("userModel", userModel);
