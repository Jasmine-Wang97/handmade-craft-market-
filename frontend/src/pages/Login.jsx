import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    setError("");
    navigate("/home");
  };

  return (
    <div className="login-screen">
      <div className="login-left">
        <div className="login-card">
          <div className="login-brand">
            <img src="/images/logo.png" alt="Handmade Craft Market logo" />
          </div>

          <form onSubmit={handleLogin} className="login-form-box">
            <h1 className="login-header">Welcome!</h1>
            <p className="login-subtext">Login to explore more handmade products!</p>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`login-field ${error ? "error" : ""}`}
            />

            {error && <div style={{ color: "#d34d4d", marginTop: 12, fontWeight: 700 }}>{error}</div>}

            <button type="submit" className="login-button" style={{ marginTop: 22 }}>
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div className="login-right">
        <img className="login-visual" src="/images/login image.webp" alt="Login product decoration" />
      </div>
    </div>
  );
}


