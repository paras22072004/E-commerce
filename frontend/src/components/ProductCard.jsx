
import React from "react";
import './ProductCart.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img
        src={`http://localhost:3000${product.image}`}
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
