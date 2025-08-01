
import React from "react";
import './ProductCart.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img
        src={`https://e-commerce-backend-749j.onrender.com${product.image}`}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
