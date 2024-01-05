import React, { useEffect, useState } from "react";
import styles from "./commissions.module.css";
import axios from "axios";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
  selectUserCommissions,
} from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import {
  setCurrentUser,
  setUserTokenAndEmail,
  setUserCommissions,
} from "../../redux/userInfo/userInfoAction";
import { connect } from "react-redux";
import AdminHeader from "../userGlobal/AdminHeader";

const Commissions = ({ userVerify, userCommissions, setCommissions }) => {
  const token = userVerify?.token;

  useEffect(() => {
    const fetchCommission = async () => {
      const url = "https://mlm.a1exchange.net/api/v1/commission/nopage-history";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.get(url, config);
        const list = res?.data.data.transactions;
        const sorted = list.sort((a, b) => a.id - b.id);
        setCommissions(sorted);
      } catch (error) {
        console.log(error.message);
      }
    };

      fetchCommission();
  }, [token]);

  return (
    <>
      <AdminHeader
        title="My Commissions"
        subtitle="View your commissions here"
      />
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Id</th>
              <th className={styles.th}>Narration</th>
              <th className={styles.th}>Amount</th>
              <th className={`${styles.th} ${styles.hide}`}>Current Balance</th>
              <th className={`${styles.hide} ${styles.th}`}>Commission Type</th>
            </tr>
          </thead>
          {userCommissions?.map((userCommission, idx) => {
            const {
              balance_after,
              balance_before,
              amount,
              id,
              commission_type,
              narration,
            } = userCommission;
            return (
              <tbody key={idx} className={styles.tbody}>
                <tr className={styles.tr}>
                  <td className={styles.td}>{idx + 1}</td>
                  <td className={styles.td}>{narration}</td>
                  <td className={styles.td}>{amount}</td>
                  <td className={`${styles.td} ${styles.hide}`}>
                    {balance_after}
                  </td>
                  <td className={`${styles.hide} ${styles.td}`}>
                    {commission_type}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
  userCommissions: selectUserCommissions,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
  setCommissions: (userData) => dispatch(setUserCommissions(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Commissions);
