import React from "react";
import styles from "./withdrawalhistory.module.css";
import AdminHeader from "../userGlobal/AdminHeader";

const WithDrawalHistory = () => {
  return (
    <>
      <AdminHeader title='My Withdrawal History' subtitle='Welcome to your withdrawal history section'/>
      <div className={styles.container}>Withdrawal History</div>
    </>
  );
};

export default WithDrawalHistory;
