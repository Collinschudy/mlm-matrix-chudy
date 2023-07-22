import axios from "axios";
import React from "react";
import styles from "./SignupVerify.module.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser, setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectCurrentUser, selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupVerify = ({ setUserVerify, userVerify, userData, setUserData }) => {
  const navigate = useNavigate();

  const getUserToken = async () => {
    try {
      const res = await axios.post(
        "https://mlm.zurupevarietiesstore.com/api/auth/verify-signup", userVerify
      );
      // console.log(res.data.data);
      const userDetails = res.data.data.user;
      setUserData(userDetails);
      toast.success("Verification successful");
      navigate("/user/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={styles.container}>
      {console.log("userData:", userData)}
      <h3>
        Thank you for registering with us, to verify your account, kindly{" "}
        <span onClick={() => getUserToken()}>click here</span>
      </h3>
      <ToastContainer limit={1} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail,
  userData: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupVerify);

// const config = {
//   headers: { Authorization: `Bearer ${token}` }
// };
// console.log(token)
