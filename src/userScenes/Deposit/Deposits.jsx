import { useState, useRef } from "react";

import AdminHeader from "../userGlobal/AdminHeader";
import styles from "./deposits.module.css";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";

import {
  selectCurrentUser,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";
import {
  setCurrentUser,
  setUserTokenAndEmail,
} from "../../redux/userInfo/userInfoAction";
import { createStructuredSelector } from "reselect";

const Deposits = ({ userData, userVerify }) => {
  const [paymentUrl, setPaymentUrl] = useState("");
  const makePayment = async (e) => {
    e.preventDefault();
    const { token } = userVerify;
    const url = "https://mlm.a1exchange.net/api/v1/payment/pay";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      amount: "1000",
      type: "membership",
    };
    try {
      const res = await axios.post(url, body, config);
      console.log(res);
      setPaymentUrl(res.data.data.payment_url);
      alert(res.data.message);
    } catch (error) {
      console.log(error)
    }
  };
  // const [txn_ref, setTxn_ref] = useState("");

  // const generateRef = () => {
  //   const timestamp = Date.now();
  //   const randStr = uuidv4();
  //   let reference = randStr;
  //   return reference;
  // };

  // const initiateTransaction = async (e) => {
  //   e.preventDefault();
  //   const { token } = userVerify;

  //   try {
  //     const reference = generateRef();
  //     setTxn_ref(reference);
  //     const url =
  //       "https://mlm.zurupevarietiesstore.com/api/transactions/initialize";
  //     const body = {
  //       email: userData.email,
  //       amount: 1000,
  //       callback_url: "http://localhost:3000/verifypayment",
  //       phone: userData.phone_number,
  //       reference: reference,
  //     };
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };
  //     const res = await axios.post(url, body, { headers });
  //     const authorizationUrl = res.data.data.transaction.authorization_url;
  //     window.location.href = authorizationUrl;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <AdminHeader
        title="Deposits"
        subtitle="Welcome to your deposits section"
      />
      <div className={styles.deposits}>
        <div className={styles.depositbox}>
          <h3>Begin your payment process</h3>
          <p className={styles.warning}>
            *Note* Details are autofilled, just click on the deposit button
            below
          </p>{
            userData.member_status === "active" ? (
              <>
              <p>Hey, {userData.username},</p>
              <p>You have already made your one time payment!</p>
              </>
            ) : (
              <form onSubmit={makePayment} className={styles.form}>
            {/* <div className={styles.formgroup}>
              <label>Email</label>
              <input type="text" defaultValue={userData.email} disabled />
            </div> */}
            {/* <div className={styles.formgroup}>
              <label>Phone</label>
              <input
                type="text"
                defaultValue={userData.phone_number}
                disabled
              />
            </div> */}

            <div className={styles.formgroup}>
              <label>Amount</label>
              <input type="text" defaultValue="1000" disabled />
            </div>

            <div className={styles.formgroup}>
              <label>Type</label>
              <input type="text" defaultValue={"membership"} disabled />
            </div>
            <div>
              <button className={styles.button} type="submit">
                Deposit
              </button>
            </div>
          </form>
            )
          }
          
          {(paymentUrl &&
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  window.location.href = paymentUrl;
                }}
                className={styles.paymentButton}
              >
                Make Payment
              </button>
            </div>
          )}
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Deposits);
