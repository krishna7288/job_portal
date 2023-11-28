const express = require("express");
const cors = require("cors");
const mongoose = require("./models/connection");
const path = require("path");
const candidatesRouter = require("./route/route");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/candidates", candidatesRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
