import React from 'react';
import NavBar from './NavBar';
import Avatar from '@mui/material/Avatar';
import { FaUserCircle } from 'react-icons/fa';
import "./Store.css"; 

function AnotherStore() {
  return (
    <div className='AnotherBtn1'>
      <NavBar />
      <div className='AnotherBtn'>
        <Avatar style={{ width: '100px', height: '100px' }}>
          <FaUserCircle size={100} color=" gray" />
        </Avatar> 
         <h1>Product: 0 <br></br><h4>No product found for Another Bigbazar</h4></h1>
       
        {/* <h4>No product found for Another Bigbazar</h4> */}
      </div>
    </div>
  );
}

export default AnotherStore;