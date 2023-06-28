import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './aboutSection.module.css';
import Title from '../titleComponent/title.component';

const AboutSection = ({ isAboutPage }) => {
  const [showSectionSlide, setShowSectionSlide] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(false);
  const [aboutMobileSlide, setAboutMobileSlide] = useState(false);
  const [mobileSlide2, setMobileSlide2] = useState(false);
  const [aboutMobileSlide2, setAboutMobileSlide2] = useState(false);
  const [mobileSlideButton, setMobileSlideButton] = useState(false);
  const navigate = useNavigate()

  const showSection = () => {
    if (window.scrollY >= 250) {
      setShowSectionSlide(true);
    } else {
      setShowSectionSlide(false);
    }
    if (window.scrollY >= 500) {
      setMobileSlide(true);
    } else {
      setMobileSlide(false);
    }
    if (window.scrollY >= 250) {
      setAboutMobileSlide(true);
    } else {
      setAboutMobileSlide(false);
    }
    if (window.scrollY >= 900) {
      setMobileSlide2(true);
    } else {
      setMobileSlide2(false);
    }
    if (window.scrollY >= 500) {
      setAboutMobileSlide2(true);
    } else {
      setAboutMobileSlide2(false);
    }
    if (window.scrollY >= 1100) {
      setMobileSlideButton(true);
    } else {
      setMobileSlideButton(false);
    }
  };
  window.addEventListener("scroll", showSection);

  return (
    <section className={styles.wrapper}>
      <Title heading={"about Alliance Arcade"} title={""} isAbout />
      <div className={styles.contentBox}>
        <img
          src="./images/about.jpg"
          alt="background"
          className={`${styles.backgroundImg} ${
            showSectionSlide ? styles.showBackground : ""
          } ${isAboutPage && styles.showBackground}`}
        />
        <div
          className={`${styles.content} ${
            showSectionSlide ? styles.showBackground : ""
          } ${isAboutPage && styles.showBackground}`}
        >
          <span
            className={` ${styles.spanMobile} ${
              mobileSlide ? styles.mobileShow : ""
            } ${isAboutPage && aboutMobileSlide ? styles.mobileShow : ""}`}
          >
          Alliance arcade is a complete networking business, The most easy to do Nigeria Home Based Business, 
          Where everything is done for you. Just Register, Activate your membership by paying N1,000 and you are in business. 
          YOU HAVE Nothing to LOSE - ZERO RISK - YOU MAKE MONEY and HAVE UNLIMITED BENEFITS No other payment- only N1,000 and you 
          become a partner, You will start earning money from the first person you introduce. Just think about 3 people you know 
          that can afford N1,000 only. And you are on your way to make millions. 
          Alliancearcade earners created opportunities. We are helping you get richer by using the power of leverage
          </span>

          {/* <span
            className={` ${styles.spanMobile} ${
              mobileSlide2 ? styles.mobileShow : ""
            } ${isAboutPage && aboutMobileSlide2 ? styles.mobileShow : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            
          </span> */}
          <div
            className={`${styles.buttonBox} ${
              mobileSlideButton ? styles.mobileShow : ""
            } ${isAboutPage && styles.hide}`}
          >
            <button className={`${styles.moreinfo} ${isAboutPage ? styles.hide : ''}`} onClick={() => navigate("/about")}>
              more info
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default AboutSection;