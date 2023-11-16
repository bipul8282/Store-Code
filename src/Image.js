// Image.js

import React from 'react';
import styles from './Image.module.css'; // Import your CSS module

function Image() {
  return (
    <div className={styles.imageContainer}>
      <img
        src="https://storecode.in/images/influence-bg.jpg"
        alt="Description"
        className={styles.image}
      />
    </div>
  );
}

export default Image;
