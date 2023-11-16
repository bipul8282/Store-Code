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
        <p>Welcome to Storecode, where innovation meets inspiration! We're not just a website; we're a gateway to a world of limitless possibilities.</p>
        <p>At Storecode, we believe that every product tells a unique story. From the trendsetting fashion items that define your style to the cutting-edge tech gadgets that elevate your daily life, each product has a tale to tell. Our mission is to make these stories accessible, shareable, and unforgettable.</p>

  <button>Why Unique Codes?</button>
 <p>You might wonder, what's so special about unique codes? Well, everything! Our journey began with a simple question: "How can we bridge the gap between the products we love and the people who want them?" The answer was ingenious yet elegantly simple - unique codes. These codes are the keys that unlock a treasure trove of products, all at your fingertips.</p>

       <button>For Influencers and Creators</button>
<p>If you're an influencer or content creator, Storecode is your playground for innovation. Our platform empowers you to effortlessly share your favorite products with your audience. With just a few clicks, you can transform ordinary product links into captivating, clickable experiences. Showcase your style, your passion, and your influence like never before.</p>
        <button>For Curious Shoppers</button>
       <p>Are you tired of tedious searches for that perfect item? Say goodbye to endless scrolling and hello to efficiency. Storecode lets you explore the products you love quickly and easily. Simply enter a unique code, and voilà! You're instantly connected to the world of possibilities waiting behind that code.</p>
        <button>Our Commitment to You</button>
      <p>At Storecode, we're not just a platform; we're a community united by a love for innovation and creativity. We're committed to delivering the best experience for both creators and shoppers. Our user-friendly interface, robust security measures, and dedication to continuous improvement ensure that your journey with us is smooth, secure, and sensational.
</p>
<p>Join us on this exciting adventure as we redefine the way products are discovered, shared, and celebrated. Let's unlock the magic of unique codes together and make every product story unforgettable.</p>
<p>Welcome to Storecode, where the world's most exciting products are just a code away!</p>
<p>Ready to dive into the world of Storecode? Start exploring now!
</p>
      </div>
      <Footer />
    </>
  );
}