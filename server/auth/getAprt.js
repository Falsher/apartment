const { User } = require("../model/user");
require("dotenv").config();
// const path = require("path");
// const fs = require("fs");
const getApartment = async (req, res) => {
  try {
    const apartment = await User.find({});

    // const onlyPath = path.join(__dirname, "../", "images");

    // fs.readdir(onlyPath, (err, data) => {
    //   data;
    // });

    return res.json(apartment);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getApartment;
