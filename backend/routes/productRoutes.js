const express = require("express");
const router = express.Router();
const { getAllProducts, addProduct, upload } = require("../controls/productcontrol");

router.get("/", getAllProducts);
router.post("/", upload.single("image"), addProduct); 

module.exports = router;
