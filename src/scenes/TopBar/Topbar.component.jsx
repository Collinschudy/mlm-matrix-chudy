import React, { useState, useContext } from "react";
import styles from "./Topbar.module.css";
import Logo from "../../logo.png";
import { useNavigate } from 'react-router-dom'
import hamburger from '../../assets/icons/menu.svg'
import { SlArrowDown } from "react-icons/sl";
import { TfiClose } from 'react-icons/tfi'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMobileView } from '../../redux/mobileToggle/mobileToggleSelect';
import { setMobileView } from '../../redux/mobileToggle/mobileToggleAction';
import { selectCurrentUser } from "../../redux/userInfo/userSelect"


const AdminTopbar = ({toggle, setToggle, userData }) => {
  const navigate = useNavigate(); 
  const [arrowFlip, setArrowFlip] = useState(false);
  const firstName = userData?.first_name, lastName = userData?.last_name;
  const firstNameCap = firstName?.charAt(0).toUpperCase() + firstName?.slice(1),
    lastNameCap = lastName?.charAt(0).toUpperCase() + lastName?.slice(1),
    initials = firstNameCap.charAt(0) + lastNameCap.charAt(0);
  return (
    <div className={styles.container}>
      <div className={styles.logocontainer}>
      <img
            src={Logo}
            alt="logo"
            className={`${styles.logo}`}
            onClick={() => navigate("/")}
          />
          <span className={styles.logo_text}>Alliance <span>Arcade</span></span>
      </div>

      <div className={styles.namecontainer}>
        <div className={styles.usericon}>
        <div>
              {userData.image_path === null ? (
                <span className={styles.initials}>{initials}</span>
              ) : (
                <img className={styles.pp} src={userData?.image_path} alt="" />
              )}
            </div>
        </div>
        <div className={styles.namewrap}>
          <p>{firstNameCap + " " + lastNameCap}</p>
          <SlArrowDown
            size="0.8rem"
            fill='white'
            className={`${styles.arrow} ${arrowFlip ? styles.arrowflip : ""}`}
            onClick={() => setArrowFlip((prev) => !prev)}
          />
        </div>
      </div>
      <div className={styles.menubar}>
        {!toggle ? (
          <img
            src={hamburger}
            alt="menu-icon"
            onClick={() => setToggle(false)}
          />
        ) : (
          <TfiClose onClick={() => setToggle(toggle)} className={styles.close} fill='white' />
        )}
      </div>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  toggle: selectMobileView,
  userData: selectCurrentUser,
});


const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(setMobileView()),
  
});


export default connect(mapStateToProps, mapDispatchToProps)(AdminTopbar);

