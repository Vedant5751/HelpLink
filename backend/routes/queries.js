const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connect();

// Basic Query
// Find all volunteers who registered in the past week.
db.volunteers.find({
  registration_date: {
    $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
  },
});

// Index Creation
// Create an index on the availability field of the volunteers collection.
db.volunteers.createIndex({ availability: 1 });

// Aggregation Pipeline
// Calculate the total number of volunteers by skill.
db.volunteers.aggregate([
  { $unwind: "$skills" },
  { $group: { _id: "$skills", total_volunteers: { $sum: 1 } } },
]);

// Compound Query
// Find all projects located in a specific city and require volunteers with a particular skill.
db.projects.find({ location: "CityName", required_skills: "SkillName" });

// Data Manipulation
// Update the registration date of a specific volunteer.
db.volunteers.updateOne(
  { _id: ObjectId("volunteerID") },
  { $set: { registration_date: new Date() } }
);

// Text Search
// Search for volunteers by their name or skills using text search.
db.volunteers.bulkWrite([
  { insertOne: { document: { name: "Volunteer1" } } },
  { insertOne: { document: { name: "Volunteer2" } } },
]);

// Bulk Write
// Insert multiple volunteers into the database in a single operation.
db.volunteers.bulkWrite([
  { insertOne: { document: { name: "Volunteer1",  } } },
  { insertOne: { document: { name: "Volunteer2",  } } },
  
]);

// Aggregation with Lookup
// Join volunteers with projects they are assigned to
db.volunteers.aggregate([
  { $lookup: { from: "projects", localField: "_id", foreignField: "volunteer_id", as: "assigned_projects" } }
])



// Conditional Query
// Find volunteers who have specific skills and are available on weekends.
db.volunteers.find({
  skills: "SkillName",
  availability: { $in: ["Saturday", "Sunday"] },
});

// Aggregation with Grouping and Sorting
// Calculate the average number of tasks assigned per project and sort them in descending order.
db.tasks.aggregate([
  { $group: { _id: "$project_id", avg_tasks: { $avg: 1 } } },
  { $sort: { avg_tasks: -1 } },
]);

// Range Query
// Find volunteers who registered between two specific dates.
db.volunteers.find({
  registration_date: {
    $gte: ISODate("2024-01-01"),
    $lte: ISODate("2024-02-01"),
  },
});

// Distinct Values Query
// Get a list of unique skills among all volunteers.
db.volunteers.distinct("skills");

// Array Update
// Add a new skill to all volunteer documents.
db.volunteers.updateMany({}, { $push: { skills: "NewSkill" } });

// Aggregation with Conditional Sum
// Calculate the total number of hours worked by volunteers in each project.
db.tasks.aggregate([
  { $group: { _id: "$project_id", total_hours: { $sum: "$hours_worked" } } },
]);

// Upsert Operation
// Insert a new volunteer if not found, or update existing volunteer's information.
db.volunteers.updateOne(
  { name: "VolunteerName" },
  { $set: { name: "VolunteerName", skills: ["NewSkill"] } },
  { upsert: true }
);

// Query with Regular Expression
// Find volunteers whose name starts with a specific letter.
db.volunteers.find({ name: { $regex: /^A/i } });

// Aggregation with Bucketing
// Group volunteers by the number of tasks they have completed.
db.tasks.aggregate([
  { $group: { _id: "$volunteer_id", total_tasks_completed: { $sum: 1 } } },
  {
    $bucketAuto: {
      groupBy: "$total_tasks_completed",
      buckets: 5,
      output: { count: { $sum: 1 } },
    },
  },
]);

// Sort and Limit Query
// Get the top 10 volunteers with the highest number of completed tasks.
db.volunteers.find().sort({ total_tasks_completed: -1 }).limit(10);

// Aggregation with Unwind and Group
// Calculate the average number of hours worked per volunteer.
db.tasks.aggregate([
  { $unwind: "$volunteer_id" },
  {
    $group: {
      _id: "$volunteer_id",
      avg_hours_worked: { $avg: "$hours_worked" },
    },
  },
]);

// Text Search with Sorting and Projection
// Search for projects containing a specific keyword and return only the project name and description, sorted by relevance.
db.projects
  .find(
    { $text: { $search: "Keyword" } },
    { score: { $meta: "textScore" }, name: 1, description: 1 }
  )
  .sort({ score: { $meta: "textScore" } });
