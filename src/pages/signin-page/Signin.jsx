import React, { useState } from "react";
import Logo from "../../logo.png";
import styles from "./signin.module.css";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <form action="">
            <div className={styles.formgroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.errors}>{"Invalid Email"}</div>
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Password:</label>
              <input
                type="email"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.errors}>{"Invalid password"}</div>
            </div>
            <div className={styles.formgroup}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
