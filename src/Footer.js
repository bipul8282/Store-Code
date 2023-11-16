import React from 'react';
import styles from "./Footer.module.css";  // Correct import statement
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className={styles.footer}>
      <p>@ 2023 All Rights Reserved By StoreCode</p>
      <span>Privacy Policy</span>
      <div>
        <a href='/'>
          <FacebookRoundedIcon />
        </a>
        <a href='/'>
          <FaInstagram />
        </a>
        <a href='/'>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
