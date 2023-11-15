import React from 'react';
import NavBar from './NavBar';
import Avatar from '@mui/material/Avatar';
import { FaUserCircle } from 'react-icons/fa';
import "./Store.css"

function Store() {
  return (
    <div className='Btn1'>
      <NavBar />
      <div className='Btn'>
        <Avatar style={{ width: '150px', height: '150px' }}>
          <FaUserCircle size={200} color="blue" />
        </Avatar>
        <h1>Product: 0</h1>
        <h4>No product found for Bigbazar</h4>
      </div>
    </div>
  );
}

export default Store;
