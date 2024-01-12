import AdminSidebar from '../../scenes/Sidebar/Sidebar.component';
import AdminTopbar from '../../scenes/TopBar/Topbar.component';
import MobileSidebar from '../../scenes/MobileSidebar/MobileSidebar';
import styles from './adminpage.module.css';
import { Routes, Route } from 'react-router-dom';
import Calendar from '../../scenes/calender/calender';
import Dashboard from '../../scenes/dashboard/dashboard';
import UserDeposits from '../../scenes/UserDeposits/Userdeposits.component';
import Users from '../../scenes/users/Users';
import UsersWithdrawals from '../../scenes/withdrawals/UsersWithdrawals';
import { selectUserTokenAndEmail, selectUsersList } from '../../redux/userInfo/userSelect';
import { setUsersList } from '../../redux/userInfo/userInfoAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useEffect } from 'react';
import axios from 'axios';





const AdminDashboardPage = ({ userVerify, usersList, setUsersList }) => {

  const token = userVerify?.token
  

  useEffect(() => {
    const listUsers = async () => {
      const url = "https://mlm.a1exchange.net/api/v1/admin/users";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.get(url, config);
        const users = res?.data.data;
        const sorted = users.sort((a, b) => a.id - b.id);
        setUsersList(sorted);
      } catch (error) {
        console.log(error);
      }
    };
      listUsers();
    
  }, [token]);
    
    return (
      <div className={styles.container}>
        <AdminTopbar />
        <div className={styles.wrap}>
        <MobileSidebar />
          <AdminSidebar />
          <div className={styles.pageroute}>
          <Routes>
            {/* <Route index element={<Navigate to="profile" />} /> */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deposits" element={<UserDeposits />} />
            <Route path="/users" element={<Users />} />
            <Route path="/withdrawals" element={<UsersWithdrawals />} />
            {/* <Route path="/results" element={<Results />} /> */}
            {/* <Route path="/referral" element={<Referral />} /> */}
          </Routes>
          </div>
        </div>
      </div>
    );
  };
  const mapStateToProps = createStructuredSelector({
    // userData: selectCurrentUser,
    userVerify: selectUserTokenAndEmail,
    // userProfile: selectUserUpdated,
    usersList: selectUsersList,
  });
  const mapDispatchToProps = (dispatch) => ({
    // setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
    // setUserProfile: (profile) => dispatch(setUserUpdated(profile)),
    setUsersList: (users) => dispatch(setUsersList(users)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardPage);
  