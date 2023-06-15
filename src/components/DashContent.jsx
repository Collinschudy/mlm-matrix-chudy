import { Box } from "@mui/material";
import React, { useState } from "react";
import StatBox from "./StatBoxUser";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SendIcon from "@mui/icons-material/Send";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GppBadIcon from "@mui/icons-material/GppBad";
import BlockIcon from "@mui/icons-material/Block";
import DownloadingIcon from "@mui/icons-material/Downloading";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setToggleView } from "../redux/navToggle/navToggleAction";
import { selectToggleView } from "../redux/navToggle/navToggleSelect";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const DashContent = ({ collapsed, setIsCollapsed }) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");

  return (
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
            borderRadius="5px"
            sx={{
              background:
                "linear-gradient(to top left, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<MonetizationOnIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Current Balance"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<LocalAtmIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total Deposits"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<PaymentIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total Withdrawal"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<MonetizationOnIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total Referral Commission"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<MonetizationOnIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total Level Commission"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<ReceiptIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total E-Pin Recharged"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={
                <AddCircleOutlinedIcon sx={{ height: "4em", width: "4em" }} />
              }
              title="N0"
              subtitle="Total E-Pin Generated"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<SendIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total Transferred Balance"
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="grey"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,50), yellowgreen)",
            }}
          >
            <StatBox
              icon={<PersonAddIcon sx={{ height: "4em", width: "4em" }} />}
              title="N0"
              subtitle="Total Direct Referrals"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
});

const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashContent);
