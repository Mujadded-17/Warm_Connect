import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-wrapper">
      <header>
        <h1>WarmConnect</h1>
        <p className="tagline">
          From your home to <span className="highlight">someone's hope</span>
        </p>
      </header>

      <div className="form-box">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        <div className="input-box">
          {!isLogin && <input type="text" placeholder="Full Name" required />}
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        {!isLogin && (
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
          </div>
        )}

        <button>{isLogin ? 'Login' : 'Register'}</button>

        <p className="toggle-message">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>

        <p className="browse-link">
          <Link to="/browse">Browse Donations without Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;