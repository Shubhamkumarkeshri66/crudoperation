const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/createUser");
const { loginUser } = require("../controllers/loginUser");
const { getallusers } = require("../controllers/getUser");
const { getoneuser } = require("../controllers/getUser");
const { deleteuserdata } = require("../controllers/deleteUser");
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/getallusers", getallusers);
router.get("/getoneuser/:id", getoneuser);
router.delete("/deleteuserdata/:id", deleteuserdata);
// router.put("/updateuser/:id",updateuser)

module.exports = router;
