const mongoose = require("mongoose");
const user = require("../models/modelschema");
exports.deleteuserdata = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await user.findByIdAndDelete({ _id: id });

    if (response) {
      res.status(200).json({
        success: true,
        message: `user ${id} deleted successfully`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
