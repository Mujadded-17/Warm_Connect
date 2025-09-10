import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/reset-password/${token}`, { password });
      setMessage(res.data.message);
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
      setMessage("");
    }
  };

  return (
    <div className="login-wrapper">
      <header>
        <h1>WarmConnect</h1>
        <p className="tagline">
          From your home to <span className="highlight">someone's hope</span>
        </p>
      </header>

      <div className="form-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
