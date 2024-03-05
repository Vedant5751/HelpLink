const express = require('express');
const router = express.Router();
const Volunteer = require("../models/volunteers");

// data-base 
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb://localhost:27017/VolunteerDB";
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
  const valProfile = await Volunteer.create(req.body) 
  res.json(req.body)
})

module.exports = router;
