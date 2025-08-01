import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetail.css'

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productId}`)
      .then((res) => setProduct(res.data));
  }, [productId]);

  const addToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert("Added to cart!");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail-view">
      <img src={product.image} width="250" alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
