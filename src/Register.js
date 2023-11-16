import React, { useState } from 'react';
import NavBar from './NavBar';
import './Register.css';  
import Footer from './Footer';


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.storeName || !formData.mobileNumber || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Perform registration logic (you can send data to an API, etc.)
    console.log('Registration data:', formData);
  };

  return (
    <>
   <div><NavBar/></div>
    <div className="register-container">
 
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Store Name:
          <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} />
        </label>

        <label>
          Mobile Number:
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>

        <button type="submit">Sign Up</button>
<h3>Or Sign in Using</h3>
<h5>SIGN IN</h5>

      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Register;