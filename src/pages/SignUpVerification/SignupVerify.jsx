import { useState } from "react";
import axios from "axios";
import Logo from "../../logo.png";
import styles from "./SignupVerify.module.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser, setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { selectCurrentUser, selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupVerify = ({ setUserVerify, userVerify, userData, setUserData }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("")
  const handleOtp = (e) => {
    setOtp(e.target.value);
  };
  

  const getUserToken = async () => {
    try {
      const res = await axios.post(
        "https://mlm.a1exchange.net/api/v1/auth/verify-otp", {login: userVerify, otp: otp}
      );
      console.log({login: userVerify, otp: otp})

      const userDetails = res.data.data.user;
      setUserData(userDetails);
      toast.success("Verification successful, sign in to continue");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const resendOtp = async () => {
    try {
      const res = axios.post("https://mlm.a1exchange.net/api/v1/auth/resend-otp", {login: userVerify})
      console.log(res)
    } catch (error) {
      toast.error(error.message)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserToken()
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
      <div className={styles.logowrapper}>
              <img
                src={Logo}
                alt="logo"
                className={styles.logo2}
                onClick={() => navigate("/")}
              />
              <span className={styles.logo_text2}>
                Alliance <span className={styles.spantwo}>Arcade</span>
              </span>
            </div>

      <h3>
        Thank you for registering with us
      </h3>
      <p>We have sent a verification code to your email</p>
        <form onSubmit={handleSubmit}>
        <input type="text" value={otp} onChange={handleOtp} className={styles.input}/>
        <p className={styles.resend} onClick={resendOtp}>Resend code</p>
        <button className={styles.button}>Submit</button>
        </form>
        
        
        {/* <span onClick={() => getUserToken()}>submit</span> */}
      <ToastContainer limit={1} />
      </div>
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

