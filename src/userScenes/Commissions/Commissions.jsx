import React from "react";
import styles from "./commissions.module.css";
import axios from "axios";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import {
  setCurrentUser,
  setUserTokenAndEmail,
} from "../../redux/userInfo/userInfoAction";
import { connect } from "react-redux";
import AdminHeader from "../userGlobal/AdminHeader";

const Commissions = ({ userVerify }) => {
  const token = userVerify?.token;
  const fetchCommission = async () => {
    const url = "https://mlm.a1exchange.net/api/v1/commission/nopage-history";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get(url, config);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <AdminHeader title="My Commissions" subtitle="View your commissions here" />
    <div className={styles.container}>
      Commissions
      <button onClick={() => fetchCommission()}>fetch</button>
    </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Commissions);
