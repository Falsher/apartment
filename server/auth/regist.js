const userModel = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;
const registr = async (req, res) => {
  try {
    const { name, password } = req.body;
    const candidate = await userModel.findOne({ name });
    if (!candidate) {
      const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
      const user = await userModel.create({
        name,
        password: hashPass,
      });
      const payload = {
        id: user._id.toString(),
      };
      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "64h" });
      return res.json({ token, message: "registration" });
    }
    const isCorrectPassword = await bcrypt.compare(
      password,
      candidate.password
    );
    if (!isCorrectPassword) {
      console.log("You errror password");
    }
    const payload = {
      id: user._id.toString(),
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "64h" });
    return res.json({ token, message: "you login" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = registr;
