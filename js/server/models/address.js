const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  id: {type: String},
  city: {type: String}, 
  area: {type: String},
  addressLine: {type: String},
});

module.exports = {
  schema: addressSchema,
  model: mongoose.model("address", addressSchema)
};
