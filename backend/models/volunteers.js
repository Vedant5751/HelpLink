const mongoose = require("mongoose");

const volunterSchema = new mongoose.Schema({
  address: String,
  availability: String,
  company: String,
  email: String,
  first_name: String,
  last_name: String,
  phone: String,
});

module.exports = mongoose.model(
  "Volunteer",
  volunterSchema,
  "volunteersProfile"
);
