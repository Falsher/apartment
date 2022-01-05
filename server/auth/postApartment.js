const { User } = require("../model/user");
require("dotenv").config();
const path = require("path");
const fs = require("fs/promises");

let id = "";
const signup = async (req, res) => {
  try {
    const { adress, geoAdress, description } = req.body;

    await User.create({
      adress,
      geoAdress,
      description,
    });
    // const id = user.id;
    console.log(id);
    res.status(201).json({
      status: "success",
      code: 201,
      message: "success",
    });
  } catch (error) {
    console.error(error);
  }
};

const updateAvatar = async (req, res) => {
  // const { path: tempDir, originalname } = req.file;
  // const [extension] = originalname.split(".").reverse();
  // const filename = `${id}.${extension}`;
  // const uploadDir = path.join(__dirname, "../", "temp", filename);
  try {
    // await fs.rename(tempDir, uploadDir);
    // const image = path.join("temp", filename);

    // console.log(id);
    // await User.updateOne({ _id: id }, { $set: { imgName: image } });
    // const image = path.join("images", filename);
    // await User.create({ image });
    res.json({
      status: "success",
      code: 201,
      message: "success",
    });
  } catch (error) {
    await fs.unlink(tempDir);
    // eslint-disable-next-line no-undef
    next(error);
  }
};
module.exports = { updateAvatar, signup };
