const apartmentModel = require("../model/apartment");
require("dotenv").config();

const signup = async (req, res) => {
  const { adress, geoAdress, description } = req.body;

  await apartmentModel.create({
    adress,
    geoAdress,
    description,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    message: "success",
  });
};

module.exports = signup;
