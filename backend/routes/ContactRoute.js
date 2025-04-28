const express = require("express");
const router = express.Router();
const mssql = require("mssql");

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const dbPool = req.dbPool;  // Access dbPool from request object

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    if (!dbPool) {
      return res.status(500).json({ success: false, message: "Database connection not established." });
    }

    await dbPool.request()
      .input("name", mssql.NVarChar, name)
      .input("email", mssql.NVarChar, email)
      .input("message", mssql.NVarChar, message)
      .query(
        `INSERT INTO ContactMessages (name, email, message)
         VALUES (@name, @email, @message)`
      );

    res.status(200).json({
      success: true,
      message: "Message sent and saved to the database!"
    });
  } catch (err) {
    console.error("❌ Full Error Object:", err);  // Logs the full error object in the terminal
    res.status(500).json({
      success: false,
      message: "Failed to send message.",
      error: err.message,  // Send error message to frontend
      fullError: err       // Send full error object for debugging
    });
  }
});

module.exports = router;
