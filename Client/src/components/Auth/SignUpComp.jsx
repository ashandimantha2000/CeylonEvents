import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout"; // Ensure you have this component
import styles from "./Auth.module.scss"; // Ensure this file exists

const SignUpComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.retypePassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/users/", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <Layout bg="https://wallpapercave.com/wp/wp2463807.jpg">
      <ToastContainer />
      <form className={styles.signup} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="retype-password">Confirm Password</label>
        <input
          type="password"
          id="retype-password"
          name="retypePassword"
          required
          value={formData.retypePassword}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <NavLink to="/login">
          <p>Already have an account? Login</p>
        </NavLink>
      </form>
    </Layout>
  );
};

export default SignUpComp;
