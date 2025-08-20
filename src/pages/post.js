import React, { useState } from "react";
import "../css/post.css";

export default function Post() {
  const [form, setForm] = useState({
    // NEW contact fields
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",

    // Existing donation fields
    title: "",
    category: "",
    image: null,
    option: "pickup",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", form);
    alert("Thank you! Your donation has been posted.");
  };

  return (
    <section className="post-section">
      <div className="post-container">
        <h2>Post a Donation</h2>

        <form className="post-form" onSubmit={handleSubmit}>
          {/* ---------- Name ---------- */}
          <div className="section">
            <div className="section-title">Name</div>
            <div className="grid-2">
              <div className="field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <small className="hint">First Name</small>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
                <small className="hint">Last Name</small>
              </div>
            </div>
          </div>

          {/* ---------- Contact ---------- */}
          <div className="section">
            <div className="grid-2">
              <div className="field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="(000) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                />
                <small className="hint">Please enter a valid phone number.</small>
              </div>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <small className="hint">example@example.com</small>
              </div>
            </div>
          </div>

          {/* ---------- Address ---------- */}
          <div className="section">
            <div className="section-title">Address</div>

            <div className="field">
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={form.street}
                onChange={handleChange}
              />
              <small className="hint">Street Address</small>
            </div>

            <div className="field">
              <input
                type="text"
                name="street2"
                placeholder="Street Address Line 2"
                value={form.street2}
                onChange={handleChange}
              />
              <small className="hint">Street Address Line 2</small>
            </div>

            <div className="grid-2">
              <div className="field">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                />
                <small className="hint">City</small>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="state"
                  placeholder="State / Province"
                  value={form.state}
                  onChange={handleChange}
                />
                <small className="hint">State / Province</small>
              </div>
            </div>

            <div className="field">
              <input
                type="text"
                name="zip"
                placeholder="Postal / Zip Code"
                value={form.zip}
                onChange={handleChange}
              />
              <small className="hint">Postal / Zip Code</small>
            </div>
          </div>

          {/* ---------- Your Existing Donation Fields (unchanged text) ---------- */}
          <div className="section">
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
                <option value="Books">Books</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Food">Food</option>
              </select>
            </div>

            <div className="input-box">
              <input type="file" name="image" onChange={handleChange} required />
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
                {" "}Pickup
              </label>
              {" "}
              <label>
                <input
                  type="radio"
                  name="option"
                  value="delivery"
                  checked={form.option === "delivery"}
                  onChange={handleChange}
                />
                {" "}Delivery
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit Donation</button>
        </form>
      </div>
    </section>
  );
}
