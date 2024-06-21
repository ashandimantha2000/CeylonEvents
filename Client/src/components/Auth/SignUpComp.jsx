import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import styles from "./Auth.module.scss";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignUpComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.retypePassword) {
      toast.error("All fields are required!");
      return;
    }
    if (formData.password !== formData.retypePassword) {
      toast.error("Passwords do not match!");
      return;
    }
    

  };

  return (
    <Layout bg="https://wallpapercave.com/wp/wp2463807.jpg">
      <ToastContainer />
      <form className={styles.signup} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required onChange={handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required onChange={handleChange} />
        <br />
        <label htmlFor="retype-password">Confirm Password</label>
        <input type="password" id="retype-password" name="retypePassword" required onChange={handleChange} />
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <NavLink to="/login"><p>Already have an account? Login</p></NavLink>
      </form>
    </Layout>
  );
}

export default SignUpComp;