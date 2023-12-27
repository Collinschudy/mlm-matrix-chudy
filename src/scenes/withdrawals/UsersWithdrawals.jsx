import React from 'react'
import styles from './userwithdrawals.module.css';
import AdminHeader from '../../adminComponents/AdminHeader/AdminHeader';
import axios from 'axios';
import { selectUserTokenAndEmail } from '../../redux/userInfo/userSelect';
import { setUserTokenAndEmail } from '../../redux/userInfo/userInfoAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const UsersWithdrawals = ({ userVerify }) => {
    const token = userVerify?.token
    const viewWithdrawals = async () => {
        const url = "https://mlm.a1exchange.net/api/v1/admin/withdrawal/history"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const res = await axios.get(url, config)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={styles.container}>
        <AdminHeader title="Users" subtitle="Managing users" />
        UsersWithdrawals 
        <button onClick={viewWithdrawals}>View</button></div>
  )
}
const mapStateToProps = createStructuredSelector({
    userVerify: selectUserTokenAndEmail,
  });
  const mapDispatchToProps = (dispatch) => ({
    setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersWithdrawals);
