import React, { useRef, useState } from "react";
import axios from "axios";
import "../css/post.css";

export default function Post() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    title: "",
    description: "",
    category: "",
    image: null,
    option: "pickup",
  });
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const categories = [
    "Clothes",
    "Furniture",
    "Stationary",
    "Gadgets",
    "Grains",
    "Makeup",
    "Accessories",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append("firstName", form.firstName);
      data.append("lastName", form.lastName);
      data.append("phone", form.phone);
      data.append("email", form.email);
      data.append("address", form.address);
      data.append("title", form.title);
      data.append("description", form.description); // ✅ description included
      data.append("category", form.category);
      data.append("option", form.option);
      if (form.image) data.append("image", form.image);

      const res = await axios.post(
        "http://localhost:5000/api/donations",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Server response:", res.data);
      alert("✅ Donation submitted successfully!");

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        title: "",
        description: "",
        category: "",
        image: null,
        option: "pickup",
      });

      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("❌ Failed to submit donation");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="post-section">
      <div className="post-container">
        <h2>Post a Donation</h2>

        <form
          className="post-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="section">
            <div className="section-title">Name</div>
            <div className="grid-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="input-field"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="section grid-2">
            <input
              type="tel"
              name="phone"
              placeholder="(000) 000-0000"
              value={form.phone}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={form.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="section">
            <div className="section-title">Address</div>
            <textarea
              name="address"
              placeholder="Enter your full address"
              value={form.address}
              onChange={handleChange}
              className="input-field"
              rows={3}
              required
            />
          </div>

          <div className="section">
            <input
              type="text"
              name="title"
              placeholder="Item Title"
              value={form.title}
              onChange={handleChange}
              className="input-field"
              required
            />

            <textarea
              name="description"
              placeholder="Description of the item"
              value={form.description}
              onChange={handleChange}
              className="input-field"
              rows={4}
              required
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              ref={fileInputRef}
              className="input-field"
              required
            />

            <div className="section">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="pickup"
                  checked={form.option === "pickup"}
                  onChange={handleChange}
                />{" "}
                Pickup
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="delivery"
                  checked={form.option === "delivery"}
                  onChange={handleChange}
                />{" "}
                Delivery
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Donation"}
          </button>
        </form>
      </div>
    </section>
  );
}
