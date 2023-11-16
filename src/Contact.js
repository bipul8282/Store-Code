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
        <p>We're thrilled that you want to connect with us.At Storecode, your thoughts, questions, and feedback are the driving force behind our commitment to excellence. We're here to listen, assist, and engage with you. Choose your preferred way to reach out:</p>
        <div className={styles.buttonContainer}>
          <button className={styles.contact}>Contact Form</button>
          <p>Got a specific question or request? Fill out the form below, and we'll get back to you in no time. Your message is important to us, and we're dedicated to providing the answers and solutions you need.</p>
          <button className={styles.contact}>Email</button>
          <p>Prefer to send us an email? Feel free to reach out to our dedicated support team at support@storecode.in. We're always ready to assist you, whether it's a technical issue or simply a friendly chat..
</p>
<p>For Influencers: If you're an influencer looking to join our community or have questions related to your account, please contact our dedicated Influencer Support Team at influencers@storecode.in</p>
     <p>For Brand Collaborations: For business-related inquiries, brand collaborations, or partnership opportunities, please contact our Collaboration Team at business@storecode.in. We're always open to exploring new opportunities and ideas.</p>
          <button className={styles.contact}>Social Media</button>
          <p>Connect with us on social media to stay updated on the latest Storecode news, product highlights, and community stories.</p>
          <button className={styles.contact}>Visit Us</button>
          <p>If you're in the neighborhood, why not drop by our headquarters? We'd love to meet you in person. Here's our address:<br></br>

Storecode Headquarters <br></br>
Kharadi<br></br>
Pune, India<br></br>

Working Hours:<br></br>

Monday - Friday: 9:00 AM - 6:00 PM<br></br>
Saturday: 10:00 AM - 4:00 PM<br></br>
Sunday: Closed<br></br>

Let's Connect, Collaborate, and Create Magic Together!<br></br>

Thank you for choosing Storecode. We value your trust and look forward to hearing from you. Your feedback fuels our innovation, and your questions drive us to provide the best experiences. Join us on this exciting journey, and let's make every interaction with Storecode exceptional.
</p>
        </div>
      </div>
      <Footer />
    </>
  );
}