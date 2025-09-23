import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous errors
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/profile");
    } catch (err) {
      console.error("Login error:", err); // Log full error
      // Show backend message if exists
      const msg = err.response?.data?.message || err.message || "Login failed";
      setError(msg);
    } finally {
      setLoading(false);
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="toggle-message">
          Don't have an account? <Link to="/register" className="toggle-link">Register</Link>
        </p>

        <p className="browse-link">
          <Link to="/browse">Browse Donations without Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
