// About.js

import React from "react";
import styles from "./About.module.css"; // Import your CSS module
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <div className={styles.aboutContainer}>
        <h1>About StoreCode</h1>
        <button>Why Unique Codes?</button>
        <button>For Influencers and Creators</button>
        <button>For Curious Shoppers</button>
        <button>Our Commitment to You</button>
      </div>
      <Footer />
    </>
  );
}
