import React from "react";
import styles from "./passwordreset.module.css";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setResetToken, setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectResetToken, selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PasswordReset = ({ resetToken, setResetToken }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const userResetToken = async () => {
    const token = resetToken?.reset_token;
    const login = resetToken?.email;
    const url = "https://mlm.a1exchange.net/api/v1/auth/reset-password"
    try{
    const res = await axios.post(
      url,
      {
        login,
        password: password,
        password_confirmation: confirmPassword,
        reset_token: token,
      }
    );
    toast.success("password changed successfully")
    navigate('/login')
    }catch(error){
        toast.error(error.message)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
       
      return setErr(true);
    
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
  resetToken: selectResetToken,
});
const mapDispatchToProps = (dispatch) => ({
  setResetToken: (user) => dispatch(setResetToken(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
