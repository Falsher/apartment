const { User } = require("../model/user");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const getApartment = async (req, res) => {
  try {
    const apartment = await User.find({});
    // console.log(apartment.map((apart) => apart.nameImg));
    // const image = path.join(__dirname, "./temp");
    // console.log(image);
    // var readStream = fs.createReadStream("./temp");

    return res.json(apartment);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getApartment;
