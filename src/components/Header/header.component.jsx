import styles from './header.module.css';
import { useState } from 'react';
import Logo from '../../logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import Navcontent from '../nav-contents/navcontents.components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToggleView } from '../../redux/navToggle/navToggleSelect';
import { setToggleView } from '../../redux/navToggle/navToggleAction';
import MobileNavBar from '../mobileNavbar/mobileNav.component';

import { useNavigate } from 'react-router-dom';

const Header = ({ setShowHeader, showHeader }) => {
    const [navScroll, setNavScroll] = useState(false);
    const navigate = useNavigate()

    const handleScrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const changeBackground = () => {
        if (window.scrollY >= 50) {
          setNavScroll(true);
        } else {
          setNavScroll(false);
        }
      };
      window.addEventListener("scroll", changeBackground);

  return (
    <nav className={styles.wrapper}>
        <div className={`${styles.container} ${navScroll ? styles.scroll : ""}`}>
          <div className={styles.logowrapper}>
          <img src={Logo} alt="logo" className={`${styles.logo}`} onClick={() => navigate('/')}/>
          <span className={styles.logo_text}>Alliance Arcade</span>
          </div>
            
            <Navcontent />
        
        <div
          className={styles.hamburgercontainer}
          onClick={() => {
            setShowHeader();
            handleScrollTop();
          }}
        >
          <FaBars
            className={`${styles.icon} ${navScroll ? styles.change : ""}`}
          />
          </div>
        </div>
        <MobileNavBar />
    </nav>
  )
}

const mapStateToProps = createStructuredSelector({
  showHeader: selectToggleView
})

const mapDispatchToProps = dispatch => ({
  setShowHeader: () => dispatch(setToggleView())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);