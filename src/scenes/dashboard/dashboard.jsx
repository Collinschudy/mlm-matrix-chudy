import React, { useEffect } from "react";
import styles from "./dashboard.module.css";

import AdminHeader from "../../adminComponents/AdminHeader/AdminHeader";
import { Button, Box, IconButton, Typography, useTheme } from "@mui/material";
import StatBox from "../../components/StatBox/StatBox";
import { tokens } from "../../theme";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
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
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  setUserTokenAndEmail,
  setUserUpdated,
  setUsersList,
} from "../../redux/userInfo/userInfoAction";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
  selectUsersList,
} from "../../redux/userInfo/userSelect";

const Dashboard = ({ usersList }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const members = usersList?.filter((user) => user.type === "member")
  const admins = usersList?.filter((user) => user.type === "admin")
  const active = usersList?.filter((user) => user.member_status === "active");
  const inactive = usersList?.filter((user) => user.member_status === "inactive");
  const verified = usersList?.filter((user) => user.is_verified === "1");
  const notVerified = usersList?.filter((user) => user.is_verified !== "1")

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <AdminHeader title="Dashboard" subtitle="Welcome to your dashboard" />
      </div>

      <div className={styles.innercontainer}>
        {/* ROWS */}
        {/* <USERS>                        </USERS> */}
        <div className={styles.card}>
          <StatBox
            title={`${usersList?.length}`}
            subtitle="Number of Users"
            progress="0.75"
            increase="+14%"
            icon={<PeopleIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`${active?.length}`}
            subtitle="Active Users"
            progress="0.75"
            increase="+14%"
            icon={<PeopleIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>
        <div className={styles.card}>
          <StatBox
            title={`${inactive?.length}`}
            subtitle="Inactive Users"
            progress="0.75"
            // increase="+14%"
            icon={
              <VerifiedUserIcon sx={{ color: "#176eb6", fontSize: "26px" }} />
            }
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`${verified?.length}`}
            subtitle="Verified Users"
            progress="0.75"
            // increase="+14%"
            icon={
              <VerifiedUserIcon sx={{ color: "#176eb6", fontSize: "26px" }} />
            }
          />
        </div>
    

        <div className={styles.card}>
          <StatBox
            title={`${members?.length}`}
            subtitle="Members"
            progress="0.25"
            // increase="+14%"
            icon={<PeopleIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`${admins?.length}`}
            subtitle="Admins"
            progress="0.25"
            // increase="+14%"
            icon={<PeopleIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        {/* <DEPOSITS>       </DEPOSITS> */}
        <div className={styles.card}>
          <StatBox
            title={`\u20A6${active?.length * 1000}`}
            subtitle="Amount Deposited"
            progress="0.75"
            increase="+14%"
            icon={<ReceiptIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title="3"
            subtitle="Pending Deposits"
            progress="0.75"
            increase="+14%"
            icon={
              <DownloadingIcon sx={{ color: "#176eb6", fontSize: "26px" }} />
            }
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title="3"
            subtitle="Rejected Deposits"
            progress="0.75"
            increase="+14%"
            icon={<BlockIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Deposit Charges"
            progress="0.75"
            increase="+12%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </div>

        {/* WITHDRAWALS */}
        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Total Withdrawn"
            progress="0.75"
            // increase="+14%"
            icon={<LocalAtmIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        <div className={styles.card}>
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
        </div>
        <div className={styles.card}>
          <StatBox
            title="8"
            subtitle="Rejected Withrawals"
            progress="0.75"
            increase="+14%"
            icon={<BlockIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Withrawal Charges"
            progress="0.75"
            increase="+14%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Total Investments"
            progress="0.15"
            increase="+5%"
            icon={<LocalAtmIcon sx={{ color: "#176eb6", fontSize: "26px" }} />}
          />
        </div>
        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Last 7 days investments"
            progress="0.15"
            increase="+5%"
            icon={
              <LocalAtmOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </div>

        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Total Referral Commission"
            progress="0.15"
            increase="+5%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </div>
        <div className={styles.card}>
          <StatBox
            title={`\u20A6`}
            subtitle="Total Binary Commission"
            progress="0.15"
            increase="+5%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: "#176eb6", fontSize: "26px" }}
              />
            }
          />
        </div>
      </div>
      {/* </Box> */}

      {/* CHARTS */}
      {/* <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" mt="20px" gridAutoRows='140px' sx={{
          "& > div": { gridColumn: isNotMobile ? undefined : "span 12" },
          
        }}> */}
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

      {/* </Box> */}
      {/*  */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
  // userProfile: selectUserUpdated,
  usersList: selectUsersList,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  // setUserProfile: (profile) => dispatch(setUserUpdated(profile)),
  setUsersList: (users) => dispatch(setUsersList(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default Dashboard;
