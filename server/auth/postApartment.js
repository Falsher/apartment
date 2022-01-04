const apartmentModel = require("../model/apartment");

require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { adress, geoAdress, description, imgName } = req.body;

    await apartmentModel.create({
      adress,
      geoAdress,
      description,
      imgName,
    });
    res.status(201).json({
      status: "success",
      code: 201,
      message: "success",
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = signup;
