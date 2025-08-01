const Product = require("../models/product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const imagePath = "/uploads/" + req.file.filename;

  const newProduct = new Product({
    name,
    price,
    description,
    image: imagePath
  });

  await newProduct.save();
  res.json({ message: "Product added!" });
};

module.exports = {
  getAllProducts,
  addProduct,
  upload
};
