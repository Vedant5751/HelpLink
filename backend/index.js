import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes

// Route to handle volunteer form submission
app.post("/volunteers", async (req, res) => {
  try {
    // Parse form data from request body
    const {
      address,
      availability,
      company,
      email,
      first_name,
      last_name,
      phone,
      gender,
    } = req.body;

    // Insert data into PostgreSQL database
    const result = await pool.query(
      "INSERT INTO volunteers (address, availability, company, email, first_name, last_name, phone, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        address,
        availability,
        company,
        email,
        first_name,
        last_name,
        phone,
        gender,
      ]
    );

    // Send response
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
