const { Schema, model } = require("mongoose");
const apartmentModel = new Schema({
  adress: { type: "string", required: true },
  geoAdress: { type: {}, required: true },
  description: { type: "string", required: true },
});
module.exports = model("apartmentModel", apartmentModel);
