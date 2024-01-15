import React, { useEffect, useState } from "react";
import styles from "./withdrawal.module.css";
import AdminHeader from "../userGlobal/AdminHeader";
import {
  setBankList,
  setCurrentUser,
  setRecipientDetails,
  setTransferAccess,
  setUserTokenAndEmail,
} from "../../redux/userInfo/userInfoAction";
import {
  selectBankList,
  selectCurrentUser,
  selectRecipientDetails,
  selectTransferAccess,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from "axios";

const Withdrawal = ({
  userVerify,
  transferDetails,
  setTransferDetails,
  setTransferAccess,
  transferAccess,
  bankList,
  setBankList,
}) => {
  const { token } = userVerify;

  // const [bankList, setBankList] = useState(null);
  const [code, setCode] = useState("");
  const [accNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [resMessage, setResMessage] = useState(null);
  const [showName, setShowName] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [resolveError, setResolveError] = useState(false);

  useEffect(() => {
    const fetchBankList = async () => {
      const url = "https://mlm.a1exchange.net/api/v1/withdrawal/bank-list";

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const res = await axios.get(url, { headers });
        const list = res.data.data.gateway_response;
        setBankList(list);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchBankList();
  }, []);

  const resolveAccount = async (e) => {
    e.preventDefault();
    const url = "https://mlm.a1exchange.net/api/v1/withdrawal/resolve-account";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    const body = {
      account_number: accNumber,
      bank_code: code,
    };
    try {
      const res = await axios.post(url, body, config);
      const details = res?.data.data.gateway_response;
      console.log(res);
      setTransferDetails(details);
      const recipient_code = res?.data.data.recipient_code
      const reference = res?.data.data.reference
      const transfer_access = {
        recipient_code: recipient_code,
        reference: reference,
      };
      setTransferAccess(transfer_access);
      setAccountName(details?.account_name);
      setResMessage(res.data.message);
      setShowName(true);
      setShowAmount(true);
    } catch (error) {
      setResolveError(true);
      console.log(error.message);
    }
  };


  const initiateTransfer = async (e) => {
    e.preventDefault();
    const url = "https://mlm.a1exchange.net/api/v1/withdrawal/initiate";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      amount: amount,
      recipient_code: transferAccess.recipient_code,
      reference: transferAccess.reference,
    };
    try {
      const res = await axios.post(url, body, config);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdminHeader
        title="Withdrawal"
        subtitle="Welcome to your withdrawal section"
      />
      <div className={styles.withdrawal}>
        <div className={styles.container}>
          <form onSubmit={initiateTransfer} className={styles.form}>
            <div className={styles.formgroup}>
              <label>Select recipient's bank below</label>
              <select onChange={(event) => setCode(event.target.value)}>
                <option disabled>Select your bank:</option>
                {bankList?.map((key) => (
                  <option key={key.name} value={key.code}>
                    {key.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formgroup}>
              <label>Account Number:</label>
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setAccountNumber(e.target.value);
                    setResolveError(false);
                    setShowName(false);
                    setShowAmount(false);
                  }}
                />
                <span type="click" onClick={(e) => resolveAccount(e)}>
                  confirm
                </span>
              </div>
            </div>
            {showName && (
              <>
                <div className={styles.formgroup}>
                  <label>Account Name:</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setAccountName(e.target.value);
                    }}
                    value={
                      accountName
                        ? accountName
                        : 'click the "confirm" button to view'
                    }
                    disabled
                  />
                  {resMessage && (
                    <p className={styles.approved}>{resMessage}</p>
                  )}
                </div>
                {/* <div
                  className={styles.createrequest}
                  onClick={(e) => createRecipientCode(e)}
                >
                  {showAmount ? "Request Created Successfully" : "Create Transfer Request"}
                </div> */}
              </>
            )}
            {resolveError && (
              <p className={styles.notApproved}>
                Please ensure that the details provided are correct!
              </p>
            )}
            {showAmount && (
              <>
                <div className={styles.formgroup}>
                  <label>Amount:</label>
                  <input
                    type="text"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                </div>
              </>
            )}
            {showAmount && (
              <button className={styles.submitbutton} type="submit">
                submit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
  transferDetails: selectRecipientDetails,
  transferAccess: selectTransferAccess,
  bankList: selectBankList,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
  setTransferDetails: (details) => dispatch(setRecipientDetails(details)),
  setTransferAccess: (details) => dispatch(setTransferAccess(details)),
  setBankList: (banklist) => dispatch(setBankList(banklist)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
