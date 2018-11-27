const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const rentalSchema = new mongoose.Schema({
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  roomType: String,
  bhkType: String,
  address: String,
  roomRent: String,
  contact: String
})

module.exports = Rental = mongoose.model('Rental', rentalSchema);