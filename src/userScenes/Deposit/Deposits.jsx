import { Box } from '@mui/material'
import React from 'react'
import AdminHeader from '../userGlobal/AdminHeader';
import styles from './deposits.module.css'

const Deposits = () => {
  return (
    <>
    <AdminHeader title="Deposits" subtitle="Welcome to your deposits section" />
    <div className={styles.deposits}>
    
    </div>
    </>
  )
}

export default Deposits;