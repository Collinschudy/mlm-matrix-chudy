import React from "react";
import styles from "./vision.module.css";
import Title from "../titleComponent/title.component";

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Title heading='Our Vision' vision/>
        <p>
          Our vision is to create a powerful platform for Nigeria to make money
          everyday and to provide them best environment to act and achieve big
          as well as to create your present and future to bring happiness in
          your life.
        </p>
      </div>
    </div>
  );
};

export default Vision;
