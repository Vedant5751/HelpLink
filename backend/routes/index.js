const express = require('express');
const mongoose = require("mongoose");

const Volunteer = require("../models/volunteers");
const Collaborator = require("../models/collaborators");

const router = express.Router();

const mongoDB = "mongodb://localhost:27017/VolunteerDB";

mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected to mongoDB');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/volProfile", async(req,res) => {
  const volProfile = await Volunteer.create(req.body) 
  res.json(req.body)
})

router.post("/ColProfile", async(req,res) => {
  const colProfile = await Collaborator.create(req.body) 
  res.json(req.body)
})

module.exports = router;
