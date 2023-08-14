import React, {useContext} from 'react';
import styles from './mobilesidebar.module.css';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectMobileView } from '../../redux/mobileToggle/mobileToggleSelect';
import { setMobileView } from '../../redux/mobileToggle/mobileToggleAction';
import SidebarMenu from '../SidebarMenu/SidebarMenu';


const MobileSidebar = ({toggle, setToggle}) => {
  return (
    <div className={`${styles.container} ${!toggle && styles.hide}`}>
        <SidebarMenu />
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
    toggle: selectMobileView,
});


const mapDispatchToProps = (dispatch) => ({
    setToggle: () => dispatch(setMobileView()),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(MobileSidebar);