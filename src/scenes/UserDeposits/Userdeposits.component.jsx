import styles from "./userdeposits.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";
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
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const url = "https://mlm.zurupevarietiesstore.com/api/transactions/list";
      const res = await axios.get(url, { headers });
      const list = res.data.data.data;
      const sorted = list.sort((a, b) => a.id - b.id)
      setDepositList(sorted);
    };
    return () => {
      fetchUsersDeposits();
    };
  }, []);
  return (
    <div className={styles.container}>
      {/* <div className={styles.innercontainer}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {depositList?.map((transaction, idx) => {
          const { email, reference, amount, status } = transaction;
          return (
            <Box
              key={transaction.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={"#176eb6"} variant="h5" fontWeight="600">
                  {reference}
                </Typography>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  {email}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{status}</Box>
              <Box
                color={"white"}
                backgroundColor={"#176eb6"}
                p="5px 10px"
                borderRadius="4px"
              >
                {amount}
              </Box>
            </Box>
          );
        })}
      </div> */}
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
            const { reference, status, id, email, phone, amount } = trx;
            return (
              <tbody key={`${reference}`} className={styles.tbody}>
                <tr >
                  <td>{id}</td>
                  <td className={styles.hide}>{email}</td>
                  {/* <td className={styles.hide}>{amount}</td> */}
                  <td className={styles.hide}>{phone}</td>
                  <td>{reference}</td>
                  <td>{status}</td>
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
