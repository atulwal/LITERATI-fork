import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Login button clicked");

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    console.log("Backend response:", res.data);

    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  } catch (err) {
  const message =
    err.response?.data?.message || "Something went wrong";

  setError(message);
}

};


  return (
    <div className="login-root">
      <img src="/cave.gif" alt="background" className="login-bg" />

      <div className="login-center">
        <div className="login-book-wrapper">
          <img src="/book-open.svg" alt="Book open" className="login-book" />

          <div className="login-form-wrapper">

            <h2 className="login-title">Login Form</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}

              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <a className="forgot-password">Forgot Password?</a>
              {error && <p className="error-text">{error}</p>}

              <button type="submit">Login</button>

              <p className="register-text">
                Don’t have an account?{" "}
                <Link to="../book">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
