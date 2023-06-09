import styles from "./title.module.css";

import { useState } from "react";

const Title = ({ heading, title, isAbout, isAboutPage, howItWorks }) => {
  const [showAboutTitle, setShowAboutTitle] = useState(false);
  const [showServicestTitle, setShowServicesTitle] = useState(false);
  const [showTestimonialTitle, setShowTestimonialTitle] = useState(false);
  const [showContactTitle, setShowContactTitle] = useState(false);
  const [showHowItWorksTitle, setShowHowItWorks] = useState(false)

  const showSection = () => {
    if (window.scrollY >= 200) {
      setShowAboutTitle(true);
    } else {
      setShowAboutTitle(false);
    }
    if (window.scrollY >= 210) {
      setShowHowItWorks(true);
    } 

    if (window.scrollY >= 900) {
      setShowServicesTitle(true);
    } else {
      setShowServicesTitle(false);
    }
    if (window.scrollY >= 1500) {
      setShowTestimonialTitle(true);
    } else {
      setShowTestimonialTitle(false);
    }
    if (window.scrollY >= 1900) {
      setShowContactTitle(true);
    } else {
      setShowContactTitle(false);
    }
  };
  window.addEventListener("scroll", showSection);

  return (
    <div className={styles.titleBox}>
      <h1
        className={`${isAboutPage ? styles.title2 : styles.title} ${isAbout && showAboutTitle ? styles.showTitle : ""
          } ${howItWorks && showHowItWorksTitle ? styles.showTitle: ''}`}
      >
        {" "}
        <span>{heading}</span> {title}
      </h1>
    </div>
  );
};

export default Title;
