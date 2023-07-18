import React, { useState } from "react";
import Logo from "../../logo.png";
import styles from "./signin.module.css";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 5){
    
      return setError(true)
    }
    console.log(email,password)
    navigate('/user/dashboard')
  }
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
        <div className={styles.formwrapper}>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
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
              {error && <div className={styles.errors}>{"Invalid password"}</div>}
            </div>
            <div className={styles.formgroup}>
              <button type="submit">Login</button>
            </div>
          </form>
          <p className={styles.instruction}>
            If you do not have an account, <span onClick={() => navigate('/signup')}>click here to Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
