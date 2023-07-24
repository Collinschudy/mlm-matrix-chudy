import React from "react";
import styles from "./passwordreset.module.css";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PasswordReset = ({ userVerify, setUserVerify }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const userResetToken = async () => {
    const token = userVerify.token;
    const email = userVerify.email;
    try{
    const res = await axios.post(
      "https://mlm.zurupevarietiesstore.com/api/auth/reset-password",
      {
        email,
        password: password,
        password_confirmation: confirmPassword,
        reset_token: token,
      }
    );
    navigate('/signin')
    }catch(error){
        toast.error(error.message)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
       
      return setErr(true);
    return;
    }
    userResetToken();
  };

  return (
    <div className={styles.container}>
        <ToastContainer limit={1} />
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formgroup}>
          <label htmlFor="password">Enter new password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value);setErr(false)}}
            required
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password">Confirm new password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {setConfirmPassword(e.target.value);setErr(false)}}
            required
          />
          {err && <div className={styles.error}>passwords don't match, ensure to enter them correctly</div>}
        </div>

        <button className={styles.button}type="submit">Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
