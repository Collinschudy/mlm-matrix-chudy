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





const AdminDashboardPage = () => {
    
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

  export default AdminDashboardPage;
  