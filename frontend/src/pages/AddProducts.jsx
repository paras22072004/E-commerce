import React, { useState } from "react";
import axios from "axios";
import './AddProduct.css'

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProduct({ ...product, image: e.target.files[0] }); 
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.image); 

    await axios.post("https://e-commerce-backend-749j.onrender.com/products", formData);
    alert("Product added!");
    setProduct({ name: "", price: "", description: "", image: null });
  };

  return (
    <div className="add-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
        <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
        <input name="image" type="file" accept="image/*" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProducts;
