const mongoose = require("mongoose");
const user = require("../models/modelschema");
const bcrypt = require("bcrypt");
exports.createUser = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    if (!Email || !Password) {
      return res.status(400).json({
        success: false,
        message: "plese enter both field",
      });
    }

    const userExist = await user.findOne({ Email });
    if (userExist) {
      return res.status(401).json({
        success: false,
        message: "user already exist",
      });
    }
    const hashedPassword = await bcrypt.hash(Password, 10);
    const response = await user.create({ Email, Password: hashedPassword });
    res.status(200).json({
      success: true,
      data: response,
      message: "user register successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
