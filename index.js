const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to DB");
});

app.use(express.json());

app.use("/api/movement", authRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is up and running on!`)
);
