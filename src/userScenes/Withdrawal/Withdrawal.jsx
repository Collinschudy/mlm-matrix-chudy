import React from 'react'
import AdminHeader from '../userGlobal/AdminHeader'
import { Box } from '@mui/material'

const Withdrawal = () => {
  return (
    <div>
       <Box display="flex" justifyContent="space-between" alignItems="center">
          <AdminHeader title="Withdrawal" subtitle="Welcome to your withdrawal section" />
        </Box>
    </div>
  )
}

export default Withdrawal