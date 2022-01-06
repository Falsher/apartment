const { User } = require("../model/user");
require("dotenv").config();
const fs = require("fs");
const signup = async (req, res) => {
  try {
    const { adress, geoAdress, description, basePage } = req.body;
    let base64Image = basePage.split("data:image/jpeg;base64,").pop();

    fs.writeFile(
      "./temp/image.jpg",
      base64Image,
      { encoding: "base64" },
      function (err) {
        console.log("File created");
      }
    );
    await User.create({
      adress,
      geoAdress,
      description,
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
