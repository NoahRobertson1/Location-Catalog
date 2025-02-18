const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())  
app.use(express.json())
const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()


const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: process.env.PASSWORD,
    database: 'SDAA'
});


app.get("/employees", async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query("SELECT * FROM employees");
        connection.release();
        res.status(200).json({"employees": rows});

        console.log(rows);

      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error", details: err });
      }
});


app.post("/save", async (req, res) => {
  console.log("Received POST request:", req.body);
  const query = `UPDATE employees SET name = "${req.body.name}", id = ${req.body.id}, description = "${req.body.description}" WHERE id = ${req.body.id_copy};`;
  pool.query(query);
  res.status(200).json({ message: "Data saved successfully!"});
});

app.post("/create", async (req, res) => {
  console.log("Received POST request:", req.body);
  const query = `INSERT INTo employees VALUES ("${req.body.name}", ${req.body.id}, "${req.body.description}");`;
  pool.query(query);
  res.status(200).json({ message: "Data created successfully!"});
});





app.listen(5050, () => {console.log("server started on port 5050")})