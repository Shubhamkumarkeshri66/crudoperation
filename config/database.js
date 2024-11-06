const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DbConnect Successfully");
    })
    .catch((error) => {
      console.log("NoT Connected");
      process.exit(1);
    });
};
module.exports = dbConnect;
