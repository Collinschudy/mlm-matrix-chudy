import React, { useState } from "react";
import Logo from "../../logo.png";
import styles from "./signin.module.css";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  setCurrentUser,
  setUserTokenAndEmail,
} from "../../redux/userInfo/userInfoAction";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";

const SignInPage = ({ setUserData, setUserVerify, userData, userVerify }) => {
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginError, setLoginError] = useState(false)
  const [errMessage1, setErrMessage1] = useState("")
  const [errMessage, setErrMessage] = useState("");
  const [show, setShow] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {

    const phoneRegex = new RegExp(
      /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|801|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/
    );
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setError(true);
      setErrMessage("Password is too short");
      return;
    }
    if (validateEmail(loginDetail) || validatePhoneNumber(loginDetail)) {
      try {
        const res = await axios.post(
          "https://mlm.a1exchange.net/api/v1/auth/login",
          {
            login: loginDetail,
            password: password,
          }
        );
        toast.success(res.data.message);
        console.log(res.data);
        const { token } = res.data.data;
        const userdata = res.data.data.user;
        setUserVerify({ token: token, login: loginDetail });
        setUserData(userdata);

        if (userData?.email_verified_at === null) {
          navigate("/verify");
        } else navigate("/user/dashboard");
      } catch (err) {
        setError(true);
        setErrMessage(err.message);
        toast.error(error.message);
      }
    }else{
      setLoginError(true);
      setErrMessage1("Invalid Email or Phone")
    }
  };

  return (
    <>
      <ToastContainer limit={1} />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.logowrapper}>
            <img
              src={Logo}
              alt="logo"
              className={styles.logo}
              onClick={() => navigate("/")}
            />
            <span className={styles.logo_text}>
              Alliance <span className={styles.spantwo}>Arcade</span>
            </span>
          </div>
          <div className={styles.title}>
            <h2>Sign In</h2>
            <p>
              Enter your email or phone number and your password to login to
              your dashboard
            </p>
          </div>
          <div className={styles.formwrapper}>
            <form action="" onSubmit={handleSubmit} autoComplete="off">
              <div className={styles.formgroup}>
                <label htmlFor="email">Email/Phone</label>
                <input
                  type="text"
                  name="loginDetail"
                  value={loginDetail}
                  autoFocus
                  onChange={(e) => {setLoginDetail(e.target.value);setLoginError(false)}}
                />
                {loginError && <div className={styles.errors}>{errMessage1}</div>}
              </div>
              <div className={`${styles.formgroup} ${styles.pass}`}>
                <label htmlFor="email">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                />
                <p className={`${styles.showHide} ${!error ? styles.move : ""}`}>
                  {show ? (
                    <BiShow onClick={() => setShow((prev) => !prev)} />
                  ) : (
                    <BiHide onClick={() => setShow((prev) => !prev)} />
                  )}
                </p>
                {error && <div className={styles.errors}>{errMessage}</div>}
              </div>
              <div className={styles.formgroup}>
                <button className={styles.button} type="submit">
                  Login
                </button>
              </div>
            </form>
            <p className={styles.instruction}>
              Forgot your password?{" "}
              <span onClick={() => navigate("/forgotpassword")}>
                Reset Here
              </span>
            </p>
            <p className={styles.instruction}>
              Don't have an account yet?{" "}
              <span onClick={() => navigate("/signup")}>Register</span>
            </p>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
