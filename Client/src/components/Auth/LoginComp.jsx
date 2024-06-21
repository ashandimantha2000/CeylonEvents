import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LoginComp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required!");
      return;
    }

    // Axios POST request to login
    axios.post('http://localhost:3000/api/users/login', {
      email: formData.email,
      password: formData.password
    })
    .then(response => {
      toast.success("Login Successful!");
      navigate('/');

      localStorage.setItem('token', response.data.token);
      // Redirect to another route
    })
    .catch(error => {
      const message = error.response && error.response.data.msg ? error.response.data.msg : "An error occurred!";
      toast.error(message);
    });
  };

  return (
    <Layout bg="https://img3.wallspic.com/previews/0/5/0/7/17050/17050-daft_punk-deejay-disc_jockey-event-rock_concert-x750.jpg">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
        <br />
        <NavLink to="/signup">
          <p>Don't have an account? Sign Up</p>
        </NavLink>
      </form>
    </Layout>
  );
}

export default LoginComp;