const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const hotelSchema = new mongoose.Schema({
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  hotelType: String,
  hotelbhk: String,
  haddress: String,
  hotelRent: String,
  info: String
})

module.exports = Hotel = mongoose.model('Hotel', hotelSchema);