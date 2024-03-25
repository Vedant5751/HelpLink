const mongoose = require("mongoose");

const CollaboratorSchema = new mongoose.Schema({
  address: String,
  availability: String,
  company: String,
  email: String,
  first_name: String,
  last_name: String,
  phone: String,
});

module.exports = mongoose.model(
  "Collaborator",
  CollaboratorSchema,
  "CollaboratorsProfile"
);
