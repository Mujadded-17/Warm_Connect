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

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState(0); // Step-based validation
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

  // Validation function per field
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return /^[A-Za-z]{2,}$/.test(value) ? "" : "First name must be letters (min 2)";
      case "lastName":
        return /^[A-Za-z]{2,}$/.test(value) ? "" : "Last name must be letters (min 2)";
      case "email":
        return /^([a-zA-Z0-9._%+-]+@(gmail\.com|[a-zA-Z0-9.-]+\.edu))$/.test(value)
          ? ""
          : "Only gmail or .edu emails allowed";
      case "phone":
        return /^(01[3-9]\d{8})$/.test(value)
          ? ""
          : "Phone must be valid Bangladeshi format (e.g. 017XXXXXXXX)";
      case "address":
        return value.length >= 5 ? "" : "Address too short";
      case "title":
        return value ? "" : "Title required";
      case "description":
        return value ? "" : "Description required";
      case "category":
        return value ? "" : "Select category";
      case "image":
        return value ? "" : "Upload an image";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const val = files ? files[0] : value;

    setForm((prev) => ({ ...prev, [name]: val }));

    // Step validation: Only allow next step if current field valid
    const errorMsg = validateField(name, val);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));

    // Move to next step automatically if no error
    if (!errorMsg) {
      setStep((prevStep) => Math.max(prevStep, Object.keys(form).indexOf(name) + 1));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submit
    const validationErrors = {};
    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) validationErrors[key] = err;
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const data = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key]) data.append(key, form[key]);
      });

      await axios.post("http://localhost:5000/api/donations", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
      setStep(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit donation");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="post-section">
      <div className="post-container">
        <h2>Post a Donation</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="post-form">
          {/* Step 0: First Name */}
          <div className="section">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="input-field"
              autoFocus
              disabled={step < 0}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          {/* Step 1: Last Name */}
          <div className="section">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="input-field"
              disabled={step < 1}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          {/* Step 2: Phone */}
          <div className="section">
            <input
              type="tel"
              name="phone"
              placeholder="01XXXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              className="input-field"
              disabled={step < 2}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* Step 3: Email */}
          <div className="section">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com or example@university.edu"
              value={form.email}
              onChange={handleChange}
              className="input-field"
              disabled={step < 3}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Step 4: Address */}
          <div className="section">
            <textarea
              name="address"
              placeholder="Full address"
              value={form.address}
              onChange={handleChange}
              className="input-field"
              rows={3}
              disabled={step < 4}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          {/* Step 5: Title */}
          <div className="section">
            <input
              type="text"
              name="title"
              placeholder="Item Title"
              value={form.title}
              onChange={handleChange}
              className="input-field"
              disabled={step < 5}
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>

          {/* Step 6: Description */}
          <div className="section">
            <textarea
              name="description"
              placeholder="Item Description"
              value={form.description}
              onChange={handleChange}
              className="input-field"
              rows={4}
              disabled={step < 6}
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>

          {/* Step 7: Category */}
          <div className="section">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="input-field"
              disabled={step < 7}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
          </div>

          {/* Step 8: Image */}
          <div className="section">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              ref={fileInputRef}
              className="input-field"
              disabled={step < 8}
            />
            {errors.image && <p className="error">{errors.image}</p>}
          </div>

          {/* Step 9: Option */}
          <div className="section">
            <label>
              <input
                type="radio"
                name="option"
                value="pickup"
                checked={form.option === "pickup"}
                onChange={handleChange}
              /> Pickup
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="delivery"
                checked={form.option === "delivery"}
                onChange={handleChange}
              /> Delivery
            </label>
          </div>

          <button type="submit" disabled={submitting} className="submit-btn">
            {submitting ? "Submitting..." : "Submit Donation"}
          </button>
        </form>
      </div>
    </section>
  );
}
