const apartmentModel = require("../model/apartment");
const userModel = require("../model/User");
const path = require("path");
const fs = require("fs");
const getApartment = async (req, res) => {
  try {
    // const { _id } = req;
    console.log(req.candidate);
    const apartment = await apartmentModel.find({});

    const onlyPath = path.join(__dirname, "../", "images");

    fs.readdir(onlyPath, (err, data) => {
      data;
    });

    return res.json(apartment);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getApartment;
