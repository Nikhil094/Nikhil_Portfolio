const express = require("express");
const router = express.Router();
const { poolPromise } = require("./db");

router.post("/submit-contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("name", sql.NVarChar, name)
      .input("email", sql.NVarChar, email)
      .input("message", sql.NVarChar, message)
      .query(
        `INSERT INTO ContactMessages (name, email, message)
         VALUES (@name, @email, @message)`
      );

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully!",
      data: result.recordsets,
    });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
