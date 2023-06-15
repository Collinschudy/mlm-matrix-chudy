import { Box } from "@mui/material";
import styles from './dashboard.module.css'
import AdminHeader from "../../components/AdminHeader";
import DashContent from "../../components/DashContent";
import Searchbar from "../../components/Searchbar";
import Sidebar from "../../components/Sidebar";
import { connect } from "react-redux";
import { setToggleView } from "../../redux/navToggle/navToggleAction";
import { selectToggleView } from "../../redux/navToggle/navToggleSelect";
import { createStructuredSelector } from "reselect";
import MobileView from "../../components/MobileView";

import {useMediaQuery} from "@mui/material";


const Dashboard = ({collapsed, setIsCollapsed}) => {
  const isNotMobile = useMediaQuery('(min-width: 600px)')
  return (
    <div className={styles.dashboard}>
      {!isNotMobile && <MobileView />}
      <Box className={`${collapsed ? styles.hide : styles.show} ${styles.sidebar}`} flex={isNotMobile ? 1 : 0}>
        <Sidebar />
        
      </Box>
      <div className={styles.topbar}>
        <div className={styles.background}></div>
        <Searchbar />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AdminHeader title="Dashboard" subtitle="Welcome to your dashboard" />
        </Box>

        <DashContent />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView
})
const mapDispatchToProps = dispatch => ({
  setIsCollapsed: () => dispatch(setToggleView())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
