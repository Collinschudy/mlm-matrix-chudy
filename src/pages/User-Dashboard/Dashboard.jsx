import { Box } from "@mui/material";
import styles from "./dashboard.module.css";
import AdminHeader from "../../userScenes/userGlobal/AdminHeader";
import DashContent from "../../userScenes/UserDashboardContent/DashContent";
import Searchbar from "../../userScenes/userGlobal/Searchbar/Searchbar";
import Sidebar from "../../userScenes/userGlobal/Sidebar";
import { connect } from "react-redux";
import { setToggleView } from "../../redux/navToggle/navToggleAction";
import { selectToggleView } from "../../redux/navToggle/navToggleSelect";
import { createStructuredSelector } from "reselect";
import MobileView from "../../components/MobileView";

import { Route, Routes } from "react-router-dom";

import { useMediaQuery } from "@mui/material";
import Deposits from "../../userScenes/Deposit/Deposits";
import Commissions from "../../userScenes/Commissions/Commissions"
import Referral from "../../userScenes/Referral/Referral";
import Withdrawal from "../../userScenes/Withdrawal/Withdrawal";
import AccountSettings from "../../userScenes/Account-settings/AccountSettings";
import TwoFactorAuth from "../../userScenes/TwoFactorAuth/TwoFactorAuth";
import MyMatrix from "../../userScenes/MyMatrix/MyMatrix";
import EpinRecharge from "../../userScenes/Epin-recharge/EpinRecharge";
import UserProfile from "../../userScenes/Profile/UserProfile";
import UpdateProfile from "../../userScenes/UpdateProfile/UpdateProfile";
import WithDrawalHistory from "../../userScenes/Withdrawal-History/WithdrawalHistory";


const Dashboard = ({ collapsed, setIsCollapsed }) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  return (
    <div className={styles.dashboard}>
      {!isNotMobile && <MobileView />}
      <Box
        className={`${collapsed ? styles.hide : styles.show} ${styles.sidebar}`}
        flex={isNotMobile ? 1 : 0}
      >
        <Sidebar />
      </Box>
      <div className={styles.topbar}>
        <div className={styles.background}></div>
        <Searchbar />

        <Routes>
          <Route path="dashboard" element={<DashContent />} />
          <Route path="deposit" element={<Deposits />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="referral" element={<Referral />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="update_details" element={<UpdateProfile />} />
          <Route path="account-settings" element={<AccountSettings />} />
          <Route path="2fa-security" element={<TwoFactorAuth />} />
          <Route path="mymatrix" element={<MyMatrix />} />
          <Route path="withdraw-history" element={<WithDrawalHistory />} />
          <Route path="epin-recharge" element={<EpinRecharge />} />
        </Routes>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
});
const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
