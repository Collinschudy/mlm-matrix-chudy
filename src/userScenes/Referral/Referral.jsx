import React from 'react'
import AdminHeader from '../userGlobal/AdminHeader';
import { Box } from '@mui/material';

const Referral = () => {
  return (
    <div>
       <Box display="flex" justifyContent="space-between" alignItems="center">
          <AdminHeader title="Referrals" subtitle="Welcome to your referrals" />
        </Box>
    </div>
  )
}

export default Referral;