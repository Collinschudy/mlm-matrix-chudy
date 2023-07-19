import styles from "./title.module.css";

import { useState } from "react";

const Title = ({
  heading,
  title,
  isAbout,
  isAboutPage,
  howItWorks,
  vision,
}) => {


  return (
    <div className={styles.titleBox}>
      <h1
        className={`${vision ? styles.vision : styles.title}`}>
        {" "}
        <span>{heading}</span> {title}
      </h1>
    </div>
  );
};

export default Title;
