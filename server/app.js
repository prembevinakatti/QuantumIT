const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const authRoute = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
