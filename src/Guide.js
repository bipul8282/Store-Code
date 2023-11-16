import React, { useState } from 'react';


import style from './Guide.module.css';

function Guide() {
  const [showStories, setShowStories] = useState(false);

  const toggleStories = () => {
    setShowStories(!showStories);
  };

  return (
    <>
      <div className={style.Guide}>
        <h1>Guide Your Followers</h1>
        <div className={style.Guide1}>
          {/* <FontAwesomeIcon icon={faMoney} style={{ fontSize: '48px', color: 'DarkPink' }} /> */}
          <h2>Earn Rewards</h2>
          <p>Earn from every purchase made through your unique codes.</p>
        </div>
        <div className={style.Guide2}>
          {/* <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '48px', color: 'DarkPink' }} /> */}
          <h2>Your Personal Store</h2>
          <p>Have a personal store powered by your influence.</p>
        </div>
        <div className={style.Guide3}>
          {/* <FontAwesomeIcon icon={faLock} style={{ fontSize: '48px', color: 'DarkPink' }} /> */}
          <h2>Exclusive Codes</h2>
          <p>Keep your recommended sites a secret under your unique code.</p>
        </div>
        <div className={style.Guide4}>
          <h1>The Exclusive Partnership Program</h1>
          <button style={{ backgroundColor: ' pink' }} onClick={toggleStories}>
            {showStories ? 'Close' : 'View More'}
          </button>
          {showStories && (
            <>
              <p>Additional story paragraph 1</p>
              <p>Additional story paragraph 2</p>
              {/* Add more paragraphs as needed */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Guide;