const { User } = require("../model/user");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { adress, geoAdress, description, basePage } = req.body;

    await User.create({
      adress,
      geoAdress,
      description,
      basePage,
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

module.exports = { signup };
