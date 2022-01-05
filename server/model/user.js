const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    adress: { type: String, required: true },
    geoAdress: { type: {}, required: true },
    description: { type: String, required: true },
    imgName: { type: String },
  },
  { versionKey: false, timestamps: true }
);
const joiUserSchema = Joi.object({
  adress: Joi.string().required(),
  geoAdress: Joi.object().required(),
  description: Joi.string(),
  imgName: Joi.string(),
});
const User = model("user", userSchema);
module.exports = {
  User,
  joiUserSchema,
};
