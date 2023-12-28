import styles from "./userdeposits.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { mockTransactions } from "../../data/mockData";
import { connect } from "react-redux";
import { setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";

const UserDeposits = ({ userVerify, setUserVerify }) => {
  const [depositList, setDepositList] = useState(null);
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const isNotMobile = useMediaQuery("(min-width: 600px)");
  const { token } = userVerify;

  useEffect(() => {
    const fetchUsersDeposits = async () => {
      const config = {
         headers: {
          Authorization: `Bearer ${token}`,
        },
      }
     
      try {
        const url = "https://mlm.a1exchange.net/api/v1/payment/history";
      const res = await axios.get(url, config);
      const list = res.data.data.data;
      const sorted = list.sort((a, b) => a.id - b.id)
      setDepositList(sorted);
      } catch (error) {
        console.log(error)
      }  
    };
    return () => {
      fetchUsersDeposits();
    };
  }, [token]);
  return (
    <div className={styles.container}>

      <div className={styles.innercontainer}>
      <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th className={styles.hide}>Email</th>
              {/* <th className={styles.hide}>Amount</th> */}
              <th className={styles.hide}>Phone Number</th>
              <th>TransactionId</th>
              <th>Status</th>
            </tr>
          </thead>
          {depositList?.reverse().map((trx, idx) => {
            const { reference, status, id, email, phone } = trx;
            return (
              <tbody key={`${reference}`} className={styles.tbody}>
                <tr >
                  <td className={styles.td}>{id}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{email}</td>
                  {/* <td className={styles.hide}>{amount}</td> */}
                  <td className={`${styles.hide} ${styles.td}`}>{phone}</td>
                  <td className={styles.td}>{reference}</td>
                  <td className={styles.td}>{status}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDeposits);
