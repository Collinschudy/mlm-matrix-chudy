import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navcontents.module.css';
import { connect } from 'react-redux';
import { setToggleView } from '../../redux/navToggle/navToggleAction';

const Navcontent = ({ showheader, setShowHeader, mobileNavBar,  }) => {
    const [navScroll, setNavScroll] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <div className={`${styles.links} ${mobileNavBar ? styles.mobileNavLinks : ""}`}>
            <Link to='/'
                className={`${styles.link} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                Home<span></span>
            </Link>
            <Link to='about'
                className={`${styles.link} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                About<span></span>
            </Link>
            <Link to='how'
                className={`${styles.link} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                How It Works<span></span>
            </Link>
            <Link to='plan'
                className={`${styles.link} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                Plan<span></span>
            </Link>
            <Link to='faqs'
                className={`${styles.link} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                FAQs<span></span>
            </Link>
            <Link to='contact'
                className={`${styles.link} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                contact<span></span>
            </Link>
            <Link to='signin'
                className={`${styles.link} ${styles.signin} ${navScroll ? styles.change : ""} ${
                    mobileNavBar ? styles.mobileLinks : ""
                  }`}
            >
                Sign In<span></span>
            </Link>
        
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setShowHeader: () => dispatch(setToggleView())
  })
  

export default connect(null,mapDispatchToProps)(Navcontent)