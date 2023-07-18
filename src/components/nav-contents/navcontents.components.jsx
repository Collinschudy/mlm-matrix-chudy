import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navcontents.module.css";
import { connect } from "react-redux";
import { setToggleView } from "../../redux/navToggle/navToggleAction";
import { handleScrollTop } from "../backToTop/backToTop";

const Navcontent = ({ showheader, setShowHeader, mobileNavBar }) => {
  const [pathName, setPathName] = useState("");
  const location = useLocation();
  const { pathname } = location;
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`${styles.links} ${mobileNavBar ? styles.mobileNavLinks : ""}`}
    >
      <Link
        to="/"
        className={`${styles.link} ${navScroll ? styles.change : ""} ${
          mobileNavBar ? styles.mobileLinks : ""
        } ${pathName === "/" ? styles.pathname : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader((prev) => !prev);
        }}
      >
        Home<span></span>
      </Link>
      <Link
        to="/about"
        className={`${styles.link} ${navScroll ? styles.change : ""} ${
          mobileNavBar ? styles.mobileLinks : ""
        } ${pathName.includes("about") ? styles.pathname : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader(false);
        }}
      >
        About<span></span>
      </Link>
      <Link
        to="/how"
        className={`${styles.link} ${navScroll ? styles.change : ""} ${
          mobileNavBar ? styles.mobileLinks : ""
        } ${pathName.includes("how") ? styles.pathname : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader(false);
        }}
      >
        How It Works<span></span>
      </Link>
      <Link
        to="/plan"
        className={`${styles.link} ${navScroll ? styles.change : ""} ${
          mobileNavBar ? styles.mobileLinks : ""
        } ${pathName.includes("plan") ? styles.pathname : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader(false);
        }}
      >
        Plan<span></span>
      </Link>
      <Link
        to="/faqs"
        className={`${styles.link} ${navScroll ? styles.change : ""} ${
          mobileNavBar ? styles.mobileLinks : ""
        } ${pathName.includes("faqs") ? styles.pathname : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader(false);
        }}
      >
        Faq<span></span>
      </Link>
      <Link
        to="/contact"
        className={`${styles.link} ${navScroll ? styles.change : ""} ${
          mobileNavBar ? styles.mobileLinks : ""
        } ${pathName.includes("contact") ? styles.pathname : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader(false);
        }}
      >
        Contact<span></span>
      </Link>
      <Link
        to="/signin"
        className={`${styles.link} ${styles.signin} ${
          navScroll ? styles.change : ""
        } ${mobileNavBar ? styles.mobileLinks : ""}`}
        onClick={() => {
          handleScrollTop();
          setShowHeader(false);
        }}
      >
        Login/Register<span></span>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setShowHeader: () => dispatch(setToggleView()),
});

export default connect(null, mapDispatchToProps)(Navcontent);
