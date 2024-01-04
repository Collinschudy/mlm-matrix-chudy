import styles from "./users.module.css";
import { useEffect } from "react";
import AdminHeader from "../../adminComponents/AdminHeader/AdminHeader";

// import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
// import { DataGrid } from "@mui/x-data-grid";
// import { mockDataUsers } from "../../data/mockData";

// import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
// import { LockOpenOutlinedIcon } from "@mui/icons-material/LockOpenOutlined";
// import { SecurityOutlinedIcon } from "@mui/icons-material/SecurityOutlined";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
  selectUserUpdated,
  selectUsersList,
} from "../../redux/userInfo/userSelect";
import {
  setUserTokenAndEmail,
  setUserUpdated,
  setUsersList,
} from "../../redux/userInfo/userInfoAction";
import axios from "axios";

const Users = ({ userData, userVerify, usersList, setUsersList }) => {
  const token = userVerify?.token
  

    const listUsers = async () => {
      const url = "https://mlm.a1exchange.net/api/v1/admin/users";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.get(url, config);
        const users = res.data.data;
        const sorted = users.sort((a, b) => a.id - b.id);
        setUsersList(sorted);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      listUsers();
    }, [])

  return (
    <div className={styles.container}>
      <AdminHeader title="Users" subtitle="Managing users" />
   
      <div className={styles.users}>
      <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>ID</th>
              <th className={`${styles.hide} ${styles.th}`}>First Name </th>
              <th className={`${styles.hide} ${styles.th}`}>Last Name</th>
              <th className={styles.th}>Email</th>
              <th className={`${styles.hide} ${styles.th}`}>Type</th>
              <th className={styles.th}>Status</th>
            </tr>
          </thead>
          {usersList?.map((user, idx) => {
            const { first_name, last_name, member_status, email, type, id } =
              user;
            return (
              <tbody key={id} className={styles.tbody}>
                <tr>
                  <td className={styles.td}>{id}</td>
                  <td className={styles.td}>{email}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{first_name}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{last_name}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{type}</td>
                  <td className={styles.td}>{member_status}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {/* <button onClick={listUsers}>View</button> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
  userProfile: selectUserUpdated,
  usersList: selectUsersList,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserProfile: (profile) => dispatch(setUserUpdated(profile)),
  setUsersList: (users) => dispatch(setUsersList(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
