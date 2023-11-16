import React from "react";
import styles from "./Contact.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.contact}>Contact Form</button>
          <button className={styles.contact}>Email</button>
          <button className={styles.contact}>Social Media</button>
          <button className={styles.contact}>Visit Us</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
