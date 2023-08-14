import React, {useEffect } from "react";
import styles from './dashboard.module.css';
import AdminHeader from "../../adminComponents/AdminHeader";
import { Button, Box, IconButton, Typography, useTheme } from "@mui/material";
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PeopleIcon from "@mui/icons-material/People";

import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GppBadIcon from "@mui/icons-material/GppBad";
import BlockIcon from "@mui/icons-material/Block";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import DownloadingIcon from "@mui/icons-material/Downloading";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
// import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
// import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";


import useMediaQuery from "@mui/material/useMediaQuery";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNotMobile = useMediaQuery("(min-width: 600px)");

  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <AdminHeader title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: 'rgb(0,0,50)',
              color: 'white',
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </div>
      <Box
        className="dashboardcontainer"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": { gridColumn: isNotMobile ? undefined : "span 6" },
        }}
        // flexWrap='wrap'
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROWS */}
        {/* <USERS>                        </USERS> */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="121"
            subtitle="Number of Users"
            progress="0.75"
            increase="+14%"
            icon={
              <PeopleIcon
                sx={{ color: '#176eb6', fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="121"
            subtitle="Active Users"
            progress="0.75"
            increase="+14%"
            icon={
              <PeopleIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="121"
            subtitle="Verified Users"
            progress="0.75"
            // increase="+14%"
            icon={
              <VerifiedUserIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12"
            subtitle="Unverified Users"
            progress="0.25"
            // increase="+14%"
            icon={
              <GppBadIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* <DEPOSITS>       </DEPOSITS> */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$56,998"
            subtitle="Amount Deposited"
            progress="0.75"
            increase="+14%"
            icon={
              <ReceiptIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3"
            subtitle="Pending Deposits"
            progress="0.75"
            increase="+14%"
            icon={
              <DownloadingIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3"
            subtitle="Rejected Deposits"
            progress="0.75"
            increase="+14%"
            icon={
              <BlockIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$322"
            subtitle="Deposit Charges"
            progress="0.75"
            increase="+12%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* WITHDRAWALS */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$20,486"
            subtitle="Total Withdrawn"
            progress="0.75"
            // increase="+14%"
            icon={
              <LocalAtmIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="8"
            subtitle="Pending Withrawals"
            progress="0.75"
            increase="+14%"
            icon={
              <HourglassBottomIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="8"
            subtitle="Rejected Withrawals"
            progress="0.75"
            increase="+14%"
            icon={
              <BlockIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$144"
            subtitle="Withrawal Charges"
            progress="0.75"
            increase="+14%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$48,210"
            subtitle="Total Investments"
            progress="0.15"
            increase="+5%"
            icon={
              <LocalAtmIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$80"
            subtitle="Last 7 days investments"
            progress="0.15"
            increase="+5%"
            icon={
              <LocalAtmOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$480"
            subtitle="Total Referral Commission"
            progress="0.15"
            increase="+5%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$480"
            subtitle="Total Binary Commission"
            progress="0.15"
            increase="+5%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>

      {/* CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" mt="20px" gridAutoRows='140px' sx={{
          "& > div": { gridColumn: isNotMobile ? undefined : "span 12" },
          
        }}>
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Investment Chart, February, 2023
              </Typography>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box> */}

        {/* TRANSACTIONS */}

     
      </Box>
      {/*  */}
    </div>
  );
};

export default Dashboard;
