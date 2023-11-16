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
              <h3>Storecode is gearing up to collaborate with major shopping brands. As an Influencer on our platform, you gain a fantastic advantage – your very own personal store on our website. This store is powered by your influence and recommendations. Here's the twist: We encourage you not to reveal the exact websites from which you purchase the products you promote in your new videos henceforth. Instead, keep it a secret under the code you share. Why? Because disclosing sites directly can create unnecessary competition and, in many cases, lead to users buying directly from those mentioned sites, bypassing all your hard work. By sharing your unique code, your followers are directed to the product on your recommended site. As we embark on our collaboration with major brands, your influencer status will transform into a powerful partnership program, offering you the opportunity to earn from every purchase made through your unique codes. Your influence becomes your earning potential. This approach ensures that your hard work as an influencer is rewarded, and it aligns perfectly with our mission to create a win-win ecosystem for influencers and their followers. Get ready to make the most of this exclusive partnership program with Storecode!</h3>

              
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Guide;