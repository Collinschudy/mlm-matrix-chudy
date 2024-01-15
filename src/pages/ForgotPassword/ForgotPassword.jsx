import React from "react";
import styles from "./forgotpassword.module.css";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setResetToken, setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectResetToken, selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = ({ resetToken, setUserResetToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const passwordReset = async () => {
    try {
      setSubmitting(true);
      const url = "https://mlm.a1exchange.net/api/v1/auth/forgot-password"
      const res = await axios.post(
      url,
        {
          login: email,
        }
      );

      const token = res?.data.data.reset_token;
      console.log(res.data);
      setUserResetToken({ reset_token: token, email: email });
      navigate("/resetpassword");
    } catch (error) {
      setSubmitting(false);
      toast.error(error.message);
      setErr(true);
      setErrMessage(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    passwordReset();
  };

  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formgroup}>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr(false);
            }}
          />
          {err && <div className={styles.error}>{errMessage}</div>}
        </div>
        <button type="submit" className={styles.button}>
          {submitting === true ? "resetting..." : "reset"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  resetToken: selectResetToken,
  
});
const mapDispatchToProps = (dispatch) => ({
  setUserResetToken: (user) => dispatch(setResetToken(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
