const mongoose = require("mongoose");

const jwt = require('jsonwebtoken');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")
const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});
usersSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" })
  return token
}
const Users = mongoose.model("users", usersSchema);

const validate = (data) => {
  const Schema = Joi.object({
    firstName: Joi.string().required().label("firstName"),
    lastName: Joi.string().required().label("lastName"),
    email: Joi.string().required().label("email"),
    password: passwordComplexity().required().label("Password"),
  });
  return Schema.validate(data);
}

module.exports = { Users, validate };