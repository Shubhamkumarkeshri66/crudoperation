const mongoose = require("mongoose");
const user = require("../models/modelschema");
exports.getallusers = async (req, res) => {
  try {
    const response = await user.find({});

    res.status(200).json({
      success: true,
      data: response,
      messsage: "all data fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
exports.getoneuser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await user.findOne({ _id: id });
    console.log(response);
    if (!response) {
      return res.status(401).json({
        success: false,
        message: "no any user have this id",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
