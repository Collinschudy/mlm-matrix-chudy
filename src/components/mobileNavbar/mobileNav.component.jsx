import styles from './mobilenav.module.css';
import { FaTimes } from 'react-icons/fa';

import { connect } from 'react-redux';

import React from 'react'
import { createStructuredSelector } from 'reselect';
import { selectToggleView } from '../../redux/navToggle/navToggleSelect';
import { setToggleView } from '../../redux/navToggle/navToggleAction';
import Navcontent from '../nav-contents/navcontents.components';

const MobileNavBar = ({ showHeader, setShowHeader }) => {
    return (
        <div className={`${styles.container} ${showHeader ? styles.show : ''}`}>
            <div className={styles.iconframe} onClick={() => setShowHeader()}>
                <FaTimes className={styles.fatimes} />
            </div>
            <Navcontent mobileNavBar />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    showHeader: selectToggleView
})

const mapDispatchToProps = dispatch => ({
    setShowHeader: () => dispatch(setToggleView())
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavBar);