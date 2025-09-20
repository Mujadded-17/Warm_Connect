import React, { useRef, useState } from "react";
import axios from "axios";
import "../css/post.css";

export default function Post() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",          // single full address
    title: "",
    category: "",
    image: null,          // File object
    option: "pickup",
  });
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

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
      // append fields (skip image if null)
      Object.keys(form).forEach((key) => {
        if (key === "image") {
          if (form.image) data.append("image", form.image);
        } else {
          data.append(key, form[key]);
        }
      });

      const res = await axios.post(
        "http://localhost:5000/api/donations",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Server response:", res.data);
      alert("✅ Donation submitted successfully!");

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        title: "",
        category: "",
        image: null,
        option: "pickup",
      });

      // Clear the file input visually
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

        <form className="post-form" onSubmit={handleSubmit} encType="multipart/form-data">
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
              <textarea
                name="address"
                placeholder="Enter your full address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                style={{ resize: "none" }}
              />
              <small className="hint">Full address</small>
            </div>
          </div>

          {/* ---------- Donation Details ---------- */}
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
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                ref={fileInputRef}
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
                />{" "}
                Pickup
              </label>{" "}
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
