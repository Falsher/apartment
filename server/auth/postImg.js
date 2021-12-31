const apartmentModel = require("../model/apartment");
const path = require("path");
const fs = require("fs/promises");
require("dotenv").config();

const postImg = async (req, res) => {
  try {
    const { originalname } = req.file;

    res.status(201).json({
      status: "success",
      code: 201,
      message: "success",
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = postImg;
