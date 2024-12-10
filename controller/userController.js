const user = require("../model/userModel");

const postController = async (req, res) => {
  try {
    const allUser = new user(req.body);

    await allUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully Add",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to Add",
    });
  }
};

const getController = async (req, res) => {
  try {
    const users = await user.find({});

    res.status(200).json({
      success: true,
      message: "Successfully Get Data",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Faild to Get Data",
    });
  }
};

const updateController = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await user.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to update",
    });
  }
};

const deleteController = async (req, res) => {
  const id = req.params.id;
  try {
    await user.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to Delete",
    });
  }
};

module.exports = {
  postController,
  getController,
  updateController,
  deleteController,
};
