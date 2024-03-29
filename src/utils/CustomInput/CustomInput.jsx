import React from "react";
import styles from "./CustomInput.module.css";

const CustomInput = ({ label, onChange, referralInput, ...otherprops }) => {
  return (
    <div className={styles.container}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type="text"
        {...otherprops}
        className={`${styles.input} ${referralInput ? styles.smaller : ""}`}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;