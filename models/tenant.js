const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const tenantrSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  imaglastName: String,
  email: String,
  contact: String,
  dob: String,
  adhar: String,
})

module.exports = Tenant = mongoose.model('Tenant', tenantrSchema);