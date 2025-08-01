import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalCost = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">No items in cart</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product._id}>
                <img
                  src={`https://e-commerce-backend-y934.onrender.com${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="cart-info">
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <div className="cart-buttons">
                    <button id="removebtn" onClick={() => removeFromCart(product._id)}>
                      Remove
                    </button>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalCost}</h3>
            <button className="buy-all">Buy All</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
