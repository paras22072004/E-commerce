const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/uploads", express.static("uploads"));


connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
  });
});

