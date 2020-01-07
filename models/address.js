const Joi = require("joi");
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  postcode: Number,
  place_name: String,
  state_name: String,
  state_code: String,
  latitude: Number,
  longitude: Number,
  accuracy: Number
});

const Address = mongoose.model("Address", addressSchema);

function validateAddress(address) {
  schema = {
    postcode: Joi.number().required(),
    place_name: Joi.string().required(),
    state_name: Joi.string().required(),
    state_code: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    accuracy: Joi.number().required()
  };

  return Joi.validate(address, schema);
}

module.exports.Address = Address;
module.exports.validateAddress = validateAddress;
