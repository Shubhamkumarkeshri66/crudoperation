const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORTNO || 3000;
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => {
  console.log(`App is listen at PORT no ${PORT}`);
});

const routes = require("./routes/userroute");
app.use("/api/v1", routes);

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("mai chal rha hu apna  kam kro bhai tm");
});
