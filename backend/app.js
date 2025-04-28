const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mssql = require("mssql");
const contactRoutes = require("./routes/ContactRoute");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let dbPool;

mssql.connect(dbConfig)
  .then(pool => {
    dbPool = pool;
    console.log("✅ Connected to MSSQL");
  })
  .catch(err => {
    console.error("❌ Database connection failed:", err);
  });

// Use Routes
app.use("/api", (req, res, next) => {
  req.dbPool = dbPool;  // Pass dbPool to every route
  next();
}, contactRoutes);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
