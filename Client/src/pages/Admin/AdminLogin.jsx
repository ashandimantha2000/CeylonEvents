import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Layout from "../../components/Auth/Layout";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
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
      navigate('/admin/dashboard');

      localStorage.setItem('token', response.data.token);
      // Redirect to another route
    })
    .catch(error => {
      const message = error.response && error.response.data.msg ? error.response.data.msg : "An error occurred!";
      toast.error(message);
    });
  };

  return (
    <Layout bg="https://images7.alphacoders.com/371/371294.jpg">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
 
      </form>
    </Layout>
  );
}

export default AdminLogin;