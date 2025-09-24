import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // ===== Validations =====

    // Name: only letters + spaces, not empty or just spaces
    const nameTrimmed = name.trim();
    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    if (!nameTrimmed || !nameRegex.test(nameTrimmed)) {
      setError('Name can only contain letters and spaces');
      return;
    }

    // Email: basic valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password: at least 8 chars, letters + digits
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters and include letters and numbers');
      return;
    }

    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";


      const res = await axios.post(`${API_URL}/api/auth/register`, { 
        name: nameTrimmed, 
        email, 
        password 
      });

      setSuccess(res.data.message);
      console.log("Registration successful:", res.data);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error("Registration error:", err);
      const msg = err.response?.data?.message || err.message || 'Registration failed';
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
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {success && <p style={{ color: 'green' }}>{success}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p className="toggle-message">
          Already have an account? <Link to="/login" className="toggle-link">Login</Link>
        </p>

        <p className="browse-link">
          <Link to="/browse">Browse Donations without Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
