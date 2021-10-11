
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: String,
});

const Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;