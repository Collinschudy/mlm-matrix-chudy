import React, { useEffect } from 'react'
import styles from './userwithdrawals.module.css';
import AdminHeader from '../../adminComponents/AdminHeader/AdminHeader';
import axios from 'axios';
import { selectUserTokenAndEmail, selectUsersWithdrawals } from '../../redux/userInfo/userSelect';
import { setUserTokenAndEmail, setUsersWithdrawals } from '../../redux/userInfo/userInfoAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const UsersWithdrawals = ({ userVerify, usersWithdrawals, setUsersWithdrawalsHistory }) => {
    const token = userVerify?.token
    useEffect(() => {
        const viewWithdrawalsHistory = async () => {
            const url = "https://mlm.a1exchange.net/api/v1/admin/withdrawal/history"
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const res = await axios.get(url, config)
                setUsersWithdrawalsHistory(res.data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
    
        viewWithdrawalsHistory();
        
    }, [token])
    
    
  return (
    <div className={styles.container}>
        <AdminHeader title="Users Withdrawals" subtitle="Managing user withdrawals" />
        <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Txn.ID</th>
              <th className={`${styles.hide} ${styles.th}`}>Email </th>
              <th className={`${styles.hide} ${styles.th}`}>A/c Number</th>
              <th className={styles.th}>Name</th>
              <th className={`${styles.hide} ${styles.th}`}>Bank Code</th>
              <th className={styles.th}>Status</th>
            </tr>
          </thead>
          {usersWithdrawals?.map((trx, idx) => {
            const { user_id, email, account_number, status, name, bank_code, amount, id } =
              trx;
            return (
              <tbody key={id} className={styles.tbody}>
                <tr>
                  <td className={styles.td}>{id}</td>
                  <td className={styles.td}>{email}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{account_number}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{name}</td>
                  <td className={`${styles.hide} ${styles.td}`}>{bank_code}</td>
                  <td className={styles.td}>{status}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        </div>
        </div>
  )
}
const mapStateToProps = createStructuredSelector({
    userVerify: selectUserTokenAndEmail,
    usersWithdrawals: selectUsersWithdrawals,
  });
  const mapDispatchToProps = (dispatch) => ({
    setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
    setUsersWithdrawalsHistory: (user) => dispatch(setUsersWithdrawals(user))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersWithdrawals);
