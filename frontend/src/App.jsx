import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home.jsx";
import Login from "./pages/Login";
import AddProducts from "./pages/AddProducts";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


