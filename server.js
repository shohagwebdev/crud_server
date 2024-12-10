const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter");

//config
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 5000;

// welcome message
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the server",
  });
});

// Database Connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (error) {
    console.log("MongoDB database connection faild");
  }
};

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", userRouter);

//App runing
app.listen(port, () => {
  connectDB();
  console.log(`server is running at http://localhost:${port}`);
});

// 1CsadaeonfwN4LUY
// shohagwebdev
