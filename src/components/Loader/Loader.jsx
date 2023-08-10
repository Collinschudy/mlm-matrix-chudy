import styles from "./loader.module.css";

import React from "react";

const Loader = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
