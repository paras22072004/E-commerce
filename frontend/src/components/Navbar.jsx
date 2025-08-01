import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/?search=${search}`);
    }
  };

  return (
    <nav className="navbar">
      <h2>Shop-Cart</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
      />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Admin Login</Link>
        <Link to="/cart">🛒 Cart</Link>


      </div>
    </nav>
  );
};

export default Navbar;
