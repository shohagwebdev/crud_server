const express = require("express");
const {
  postController,
  getController,
  updateController,
  deleteController,
} = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/post", postController);
userRouter.get("/get", getController);
userRouter.put("/update/:id", updateController);
userRouter.delete("/delete/:id", deleteController);

module.exports = userRouter;
