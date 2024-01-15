import React from "react";
import styles from "./paymentsuccessful.module.css";
import { useNavigate } from "react-router-dom";

import { selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { setLogOut } from "../../redux/userInfo/userInfoAction";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import tick from "../../assets/test66.png";
import { MdLogout } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const PaymentSuccessful = ({ userVerify, setLogOut }) => {
  const navigate = useNavigate();
  const token = userVerify?.token

  const logOutUser = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const url = "https://mlm.a1exchange.net/api/v1/auth/logout"

    try {
      const res = await axios.post(url, null, config);
      setLogOut();
      toast.success(res.data.message);
      navigate("/signin");

    } catch (error) {
      toast.error(error.message);
    }
  };

  const backToHome = () => {
    // setPaymentResponse()
    navigate("/user/dashboard");
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.messagewrapper}>
          <article className={styles.imgcontainer}>
            <img src={tick} alt="" />
          </article>
          <h2 className={styles.message}>Congratulations!</h2>
          <p>Your account has been activated</p>
        </div>

        {/* <p>Transaction Id: {paymentResponse?.reference}</p> */}
        <p className={styles.instruction}>
          Please note that for your account to be updated, you have to re-signin
        </p>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={() => backToHome()}><FaArrowLeft /><span>Back to Dashboard</span></button>
          <button className={styles.btn} onClick={() => logOutUser()}><MdLogout fill="orange"/><span>Sign out</span></button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail
});

const mapDispatchToProps = (dispatch) => ({
  setPaymentResponse: (response) => dispatch(setPaymentResponse(response)),
  setLogOut: () => dispatch(setLogOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccessful);
