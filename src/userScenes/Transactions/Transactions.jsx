import React from 'react';
import { Box } from '@mui/material';
import AdminHeader from '../userGlobal/AdminHeader';

const Transactions = () => {
  return (
    <div>
       <Box display="flex" justifyContent="space-between" alignItems="center">
          <AdminHeader title="Transactions" subtitle="Welcome to your transactions" />
        </Box>
    </div>
  )
}

export default Transactions