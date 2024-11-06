const mongoose = require("mongoose");
const user = require("../models/modelschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    if (!Email || !Password) {
      return res.status(401).json({
        success: false,
        message: "please Enter both Email and password",
      });
    }

    const userExist = await user.findOne({ Email });
    if (!userExist) {
      return res.status(401).json({
        success: false,
        message: "User not Exist",
      });
    }

    const ismatch = await bcrypt.compare(Password, userExist.Password);
    if (!ismatch) {
      return res.status(501).json({
        success: false,
        message: "please enter correct password",
      });
    }
    const token = jwt.sign(
      { id: userExist._id, email: userExist.Email },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );
    console.log(`Token:${token}`);
    res.status(200).json({
      success: true,
      message: "Login Successfull!!!!!!!",
      data:token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
