import React, { useState } from "react";
import "../css/post.css";

export default function Post() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: null,
    option: "pickup",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", form);
    alert("Thank you! Your donation has been posted.");
  };

  return (
    <div className="post-container">
      <h2>Post a Donation</h2>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Furniture">Furniture</option>
            <option value="Stationary">Stationary</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Grains">Grains</option>
            <option value="Makeup">Makeup</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="input-box">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label>
            <input
              type="radio"
              name="option"
              value="pickup"
              checked={form.option === "pickup"}
              onChange={handleChange}
            />
            Pickup
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="delivery"
              checked={form.option === "delivery"}
              onChange={handleChange}
            />
            Delivery
          </label>
        </div>

        {/* Optional live preview */}
        {form.image && (
          <div className="input-box">
            <img
              src={URL.createObjectURL(form.image)}
              alt="preview"
              style={{
                width: "100%",
                maxHeight: 220,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Submit Donation
        </button>
      </form>
    </div>
  );
}
