import React, { useEffect } from "react";
import styles from "./withdrawalhistory.module.css";
import AdminHeader from "../userGlobal/AdminHeader";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
  selectWithdrawalHistory,
} from "../../redux/userInfo/userSelect";
import { setUserTokenAndEmail, setWithdrawalHistory } from "../../redux/userInfo/userInfoAction";
import { connect } from "react-redux";
import axios from "axios";

const WithDrawalHistory = ({ userVerify, userData, withdrawalHistory, setWithdrawalHistory }) => {
  const token = userVerify?.token;
  const id = userData?.id;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://mlm.a1exchange.net/api/v1/withdrawal/history`;
  useEffect(() => {
    const fetchUserWithdrawalHistory = async () => {
      try {
        const res = await axios.get(url, config);
        const data = res.data.data
        console.log(data)
        setWithdrawalHistory(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserWithdrawalHistory();
  }, [token]);

  return (
    <>
      <AdminHeader
        title="My Withdrawal History"
        subtitle="Welcome to your withdrawal history section"
      />
      <div className={styles.container}>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Txn.ID</th>
              <th className={`${styles.hide} ${styles.th}`}>Email </th>
              <th className={`${styles.hide} ${styles.th}`}>A/c Number</th>
              <th className={styles.th}>Name</th>
              <th className={`${styles.hide} ${styles.th}`}>Amount</th>
              <th className={styles.th}>Status</th>
            </tr>
          </thead>
          {withdrawalHistory?.history?.map((trx, idx) => {
            const { user_id, email, account_number, status, name, bank_code, amount, id } =
              trx;
            return (
              <tbody key={id} className={styles.tbody}>
                <tr>
                  <td className={styles.td}>{id}</td>
                  <td className={styles.td}>{email}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{account_number}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{name}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{amount}</td>
                  <td className={styles.td}>{status}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail,
  userData: selectCurrentUser,
  withdrawalHistory: selectWithdrawalHistory,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setWithdrawalHistory: (user) => dispatch(setWithdrawalHistory(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(WithDrawalHistory);
