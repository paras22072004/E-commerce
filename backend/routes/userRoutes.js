const express = require("express");
const router = express.Router();
const { loginUser } = require("../controls/usercontrol");

router.post("/login", loginUser);

module.exports = router;
