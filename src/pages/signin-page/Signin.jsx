import React, { useState } from "react";
import Logo from "../../logo.png";
import styles from "./signin.module.css";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 5) {
      return setError(true);
    }
    try {
      const res = await axios.post(
        "https://mlm.zurupevarietiesstore.com/api/auth/login",
        {
          email,
          password,
        }
      );
      toast.success(res.data.message);
      console.log(res.data);
      const token = res.data.data.token;
      const userdata = res.data.data.user;
      setUserVerify({ token: token, email: email });
      setUserData(userdata);

      if (userData?.email_verified_at === null) {
        navigate("/verify");
      } else navigate("/user/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
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
            Enter your email address and password to login to your dashboard
          </p>
        </div>
        <div className={styles.formwrapper}>
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.formgroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {<div className={styles.errors}>{"Invalid Email"}</div>} */}
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <div className={styles.errors}>{"Invalid password"}</div>
              )}
            </div>
            <div className={styles.formgroup}>
              <button type="submit">Login</button>
            </div>
          </form>
          <p className={styles.instruction}>
            Forgot your password?{" "}
            <span onClick={() => navigate("/forgotpassword")}>Reset Here</span>
          </p>
          <p className={styles.instruction}>
            Don't have an account yet?{" "}
            <span onClick={() => navigate("/signup")}>Register</span>
          </p>
          <ToastContainer limit={1} />
        </div>
      </div>
    </div>
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
