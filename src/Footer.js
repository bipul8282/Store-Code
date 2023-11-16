import React from 'react';
import styles from "./Footer.module.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className={styles.footer}>
      <h6>@ 2023 All Rights Reserved By StoreCode</h6>
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