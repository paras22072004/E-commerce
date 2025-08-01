import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("search");

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  useEffect(() => {
    axios.get("https://e-commerce-backend-749j.onrender.com/products")
      .then((res) => {
        const filtered = searchTerm
          ? res.data.filter(p =>
              p.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : res.data;
        setProducts(filtered);
      });
  }, [searchTerm]);

  return (
    <div className="home-container">
      <h2 className="product-title">All Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
