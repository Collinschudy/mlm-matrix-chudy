import React, { useEffect } from "react";
import styles from "./withdrawalhistory.module.css";
import AdminHeader from "../userGlobal/AdminHeader";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";
import { setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { connect } from "react-redux";
import axios from "axios";

const WithDrawalHistory = ({ userVerify, userData }) => {
  const token = userVerify?.token;
  const id = userData?.id;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://mlm.a1exchange.net/api/v1/admin/withdrawal/history/${id}`;
  useEffect(() => {
    const fetchUserWithdrawalHistory = async () => {
      try {
        const res = await axios.get(url, config);
        console.log(res.data);
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
      <div className={styles.container}>Withdrawal History</div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail,
  userData: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithDrawalHistory);
