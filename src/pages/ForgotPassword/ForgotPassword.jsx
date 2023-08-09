import React from "react";
import styles from "./forgotpassword.module.css";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = ({ userVerify, setUserVerify }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const passwordReset = async () => {
    try {
      setSubmitting(true);
      const res = await axios.post(
        "https://mlm.zurupevarietiesstore.com/api/auth/forgot-password",
        {
          email,
        }
      );

      const token = res.data.data.reset_token;
      console.log(res.data);
      setUserVerify({ token: token, email: email });
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
  userVerify: selectUserTokenAndEmail,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
