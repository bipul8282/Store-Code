import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './NavBar.module.css';
import HamburgerBtn from './HamburgerBtn.js';

export default function NavBar() {
  return (
    <div className={style.main}>
      <Link to="/">
        <img
          src="https://storecode.in/images/logo-nav.png"
          style={{ height: '50px', width: 'auto' }}
          alt="Description"
        />
      </Link>
      <h1>StoreCode</h1>

      <div className={style.HamburgerBtn}>
        <HamburgerBtn />
      </div>

      <ul>
        <p>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
              backgroundColor: '',
            }}
          >
            Home
          </NavLink>
        </p>

        <p>
          <NavLink
            exact
            to="/Store"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '',
            }}
          >
            Store
          </NavLink>
        </p>

        <p>
          <NavLink
            to="/Login"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '',
            }}
          >
            Login
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/Register"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '',
            }}
          >
            Register
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/Contact"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '',
            }}
          >
            Contact
          </NavLink>
        </p>

        <p>
          <NavLink
            to="/About"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '',
            }}
          >
            About
          </NavLink>
        </p>
      </ul>
    </div>
  );
}
