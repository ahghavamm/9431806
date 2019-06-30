const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  id: String,
  city: String, 
  area: String,
  addressLine: {type: String},
});

const addressChar = mongoose.model('addresschar', addressSchema);

module.exports = addressChar;

// module.exports = {
//   schema: addressSchema,
//   model: mongoose.model("address", addressSchema)
// };