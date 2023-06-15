import React from "react";
import { useState, useEffect } from "react";
import { Box, List, ListItem, Typography, IconButton } from "@mui/material";
import { connect } from "react-redux";
import { selectToggleView } from "../redux/navToggle/navToggleSelect";
import { setToggleView } from "../redux/navToggle/navToggleAction";
import { createStructuredSelector } from "reselect";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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

import { useMediaQuery } from "@mui/material";

const Item = ({ title, to, icon, selected, setSelected,  }) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      className="Box"
      active={selected === title}
        color="lightgrey"
        display="flex"
        margin="0.8em 1em 0 1.25em"
        alignItems="center"
        justifyContent="flex-start"
        sx={{
          '&:hover': {
            background: 'linear-Gradient(to right, transparent, yellowgreen)'
          }
        }}
        
        // border: '1px solid yellowgreen'
      onclick={() => setSelected(title)}
    >
      <IconButton size="small">{icon}</IconButton>

      <Typography variant="p" sx={{ ml: 3, fontSize: "0.9rem" }}>
        {title}
      </Typography>
      {/* <Link to={to} /> */}
    </Box>
  );
};

const Sidebar = ({ collapsed, setIsCollapsed, }) => {
  const [selected, setSelected] = useState("Dashboard");
  const isNotMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box 
      style={{ color: "lightgray", overflowY: 'scroll' }}
    >
      {/* <ProSidebar collapsed={collapsed}> */}

        <>
          <Box
            width="16.66%"
            position="fixed"
            flex="1"
            top="0"
            left="0"
            zIndex="100"
            height="10em"
            display={`${isNotMobile ? "flex" : "none"}`}
            alignItems="center"
            justifyContent="center"
            sx={{
              background:
                "linear-Gradient(to bottom right, rgb(0, 0, 50), rgba(0,0,55, 0.9))",
                
            }}
          >
            <Typography
              variant="h5"
              sx={{
                p: "2rem 0",
                color: "transparent",
                backgroundImage:
                  "linear-Gradient(to right, skyblue, yellowgreen)",
                backgroundClip: "text",
              }}
            >
              Alliance Arcade
            </Typography>
          </Box>
          <Box pt={isNotMobile ? "11rem" : "1rem"}>
            {/* <Menu iconShape="square"> */}
            <Item
              title="Dashboard"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Deposit"
              to=""
              icon={
                <PaymentIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Subscription Plan"
              to=""
              icon={
                <LocalAtmIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Withdrawal"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="E-Pin Recharge"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transfer Balance"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Matrix"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Referral"
              to=""
              icon={
                <PeopleIcon sx={{ color: "skyblue", fontSize: "1.1rem" }} />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transactions"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="2FA Security"
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Account Settings"
              to=""
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            {/* </Menu> */}
          </Box>
        </>
     
      {/* </ProSidebar> */}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
});
const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
