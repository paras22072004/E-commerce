
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); // Optional

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live ");
});

app.use("/products", productRoutes);
// Comment below line if not using userRoutes yet
app.use("/users", userRoutes); 
app.use("/uploads", express.static("uploads"));

connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
});
