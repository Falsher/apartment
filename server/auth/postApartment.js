const { User } = require("../model/user");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const signup = async (req, res) => {
  try {
    const { adress, geoAdress, description, basePage, nameImg } = req.body;
    let base64Image = basePage.split("data:image/jpeg;base64,").pop();
    const user = await User.create({
      adress,
      geoAdress,
      description,
      nameImg,
    });
    const filename = `${user.id}_${nameImg}`;
    fs.writeFile(
      `./public/${filename}`,
      base64Image,
      { encoding: "base64" },
      function (err) {
        console.log("File created");
      }
    );
    const image = path.join(filename);
    console.log(image);
    await User.updateOne({ _id: user.id }, { $set: { nameImg: image } });
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
