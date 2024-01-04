import { Box } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./dashcontent.module.css";

import StatBox from "../../components/StatBoxUser";
import AdminHeader from "../userGlobal/AdminHeader";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SendIcon from "@mui/icons-material/Send";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

// import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
// import GppBadIcon from "@mui/icons-material/GppBad";
// import BlockIcon from "@mui/icons-material/Block";
// import DownloadingIcon from "@mui/icons-material/Downloading";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import PeopleIcon from "@mui/icons-material/People";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

import useMediaQuery from "@mui/material/useMediaQuery";
import { setToggleView } from "../../redux/navToggle/navToggleAction";
import { selectToggleView } from "../../redux/navToggle/navToggleSelect";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectPaymentResponse,
  selectUserCommissions,
  selectUserTokenAndEmail,
  selectUserWallet,
} from "../../redux/userInfo/userSelect";
import { setCurrentUser, setUserWallet } from "../../redux/userInfo/userInfoAction";
import axios from "axios";

const DashContent = ({
  collapsed,
  setIsCollapsed,
  userData,
  setUserData,
  userVerify,
  userCommissions,
  userWallet,
  setUserEarnings,
}) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const usernameCap =
    userData?.username.charAt(0).toUpperCase() + userData?.username.slice(1);
  // const maxBalance = userCommissions?.reduce(
  //   (max, current) =>
  //     current.balance_after > max.balance_after ? current : max,
  //   userCommissions[0]
  // );
  const totalCommission = userCommissions?.reduce(
    (sum, current) => Number(sum) + Number(current.amount),
    0
  );
  const token = userVerify?.token;

  useEffect(() => {
    const retrieveDetails = async () => {
      const url = "https://mlm.a1exchange.net/api/v1/profile/info";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.get(url, config);
        setUserEarnings(res?.data.data.user)
        console.log(userWallet)
      } catch (error) {
        console.log(error.message);
      }
    }

      return () => {
        retrieveDetails();
      };
  }, [token]);

  return (
    <>
      <div className={styles.adminheaderbox}>
        <AdminHeader
          title="Dashboard"
          subtitle={`Welcome to your dashboard, ${usernameCap} `}
        />
      </div>
      <div>
        <Box
          m="20px"
          backgroundColor="transparent"
          borderRadius="5px"
          p={!isNotMobile ? "0" : "20px"}
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="180px"
            gap="20px"
            sx={{
              "& > div": { gridColumn: isNotMobile ? undefined : "span 12" },
            }}
          >
            <Box
              gridColumn="span 4"
              background={``}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={
                  <MonetizationOnIcon sx={{ height: "4em", width: "4em" }} />
                }
                title={`\u20A6${
                  userWallet ? userWallet.commission.balance : "0"
                }`}
                subtitle="Current Balance"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={<LocalAtmIcon sx={{ height: "4em", width: "4em" }} />}
                title={`\u20A6${
                  userData.member_status === "active" ? "1000" : "0"
                }`}
                subtitle="Total Deposits"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={<PaymentIcon sx={{ height: "4em", width: "4em" }} />}
                title={userData?.level}
                subtitle="Current Level"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={
                  <MonetizationOnIcon sx={{ height: "4em", width: "4em" }} />
                }
                title={`\u20A6${userWallet ? userWallet.network_earnings : "0"}`}
                subtitle="Total Referral Commission"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={
                  <MonetizationOnIcon sx={{ height: "4em", width: "4em" }} />
                }
                title={`\u20A6${userWallet ? userWallet.total_earnings : "0"}`}
                subtitle="Total Earnings"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={<ReceiptIcon sx={{ height: "4em", width: "4em" }} />}
                title="0"
                subtitle="Total E-Pin Recharged"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={
                  <AddCircleOutlinedIcon sx={{ height: "4em", width: "4em" }} />
                }
                title="0"
                subtitle="Total E-Pin Generated"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={<SendIcon sx={{ height: "4em", width: "4em" }} />}
                title="0"
                subtitle="Total Transferred Balance"
              />
            </Box>
            <Box
              gridColumn="span 4"
              backgroundColor="grey"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              sx={{
                background:
                  "linear-gradient(to bottom right, #14213d, #8ec33e)",
              }}
            >
              <StatBox
                icon={<PersonAddIcon sx={{ height: "4em", width: "4em" }} />}
                title={`${userData.current_level_referrals}`}
                subtitle="Total Direct Referrals"
              />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
  userVerify: selectUserTokenAndEmail,
  userData: selectCurrentUser,
  paymentResponse: selectPaymentResponse,
  userCommissions: selectUserCommissions,
  userWallet: selectUserWallet,
});

const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
  setUserEarnings: (user) => dispatch(setUserWallet(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashContent);
