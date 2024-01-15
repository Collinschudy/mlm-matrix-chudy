import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import { connect } from "react-redux";
import { selectToggleView } from "../../redux/navToggle/navToggleSelect";
import { setToggleView } from "../../redux/navToggle/navToggleAction";
import { createStructuredSelector } from "reselect";
import {
  setCurrentUser,
  setLogOut,
  setUserTokenAndEmail,
} from "../../redux/userInfo/userInfoAction";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
} from "../../redux/userInfo/userSelect";

import { toast, ToastContainer } from "react-toastify";


import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BlockIcon from "@mui/icons-material/Block";
import { useMediaQuery } from "@mui/material";

// import { MenuItem } from "react-pro-sidebar";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
// import SendIcon from "@mui/icons-material/Send";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
// import GppBadIcon from "@mui/icons-material/GppBad";
// import DownloadingIcon from "@mui/icons-material/Downloading";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { selectMobileView } from "../../redux/mobileToggle/mobileToggleSelect";
import { setMobileView } from "../../redux/mobileToggle/mobileToggleAction";

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  backGround,
}) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "lightgrey",
        m: "0.8em 1em 0 1em",
        background: backGround,
        "&:hover": {
          background: "linear-Gradient(to right, transparent, yellowgreen)",
          cursor: "pointer",
        },
      }}
      onClick={() => {
        setSelected(title);
      }}
    >
      <IconButton size="small">{icon}</IconButton>

      <Typography variant="p" sx={{ ml: 3, fontSize: "0.9rem" }}>
        {title}
      </Typography>
    </Box>
  );
};

const Sidebar = ({
  collapsed,
  setIsCollapsed,
  mobileCollapsed,
  setMobileCollapsed,
  userVerify,
  userData,
  setUserVerify,
  setUserData,
  setLogOut,
}) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  const [pathName, setPathName] = useState("");
  const location = useLocation();
  const { pathname } = location;
  const token = userVerify?.token;
 
  
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  const logOutUser = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const url = "https://mlm.a1exchange.net/api/v1/auth/logout"

    try {
      const res = await axios.post(url, null, config);
      setLogOut();
      toast.success(res.data.message);
      navigate("/signin");

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box style={{ color: "lightgray", overflowY: "scroll" }}>
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
          <ToastContainer limit={1} />
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

        <Box pt={isNotMobile ? "11rem" : "0rem"}>
          <Link to="dashboard" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Dashboard"
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              backGround={pathName.includes("dashboard") ? "grey" : ""}
              setSelected={setSelected}
            />
          </Link>
          <Link to="deposit" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Deposit"
              to="deposit"
              icon={
                <PaymentIcon sx={{ color: "skyblue", fontSize: "1.1rem" }} />
              }
              selected={selected}
              backGround={pathName.includes("deposit") ? "grey" : ""}
              setSelected={setSelected}
            />
          </Link>

          <Link to="profile" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="My Profile"
              icon={
                <LocalAtmIcon sx={{ color: "skyblue", fontSize: "1.1rem" }} />
              }
              selected={selected}
              backGround={pathName.includes("profile") ? "grey" : ""}
              setSelected={setSelected}
            />
          </Link>

          <Link to="update_details" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Update Profile"
              icon={
                <LocalAtmIcon sx={{ color: "skyblue", fontSize: "1.1rem" }} />
              }
              selected={selected}
              backGround={pathName.includes("update_details") ? "grey" : ""}
              setSelected={setSelected}
            />
          </Link>

          <Link to="withdrawal" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Withdrawal"
              to="user/withdrawal"
              icon={
                <ReceiptIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("withdrawal") ? "grey" : ""}
            />
          </Link>

          <Link to="#" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Withdrawal History"
              icon={
                <MonetizationOnIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("withdraw-history") ? "grey" : ""}
            />
          </Link>

          <Link to="mymatrix" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="My Matrix"
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("mymatrix") ? "grey" : ""}
            />
          </Link>

          <Link to="referral" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="My Referral"
              to="user/referral"
              icon={
                <PeopleIcon sx={{ color: "skyblue", fontSize: "1.1rem" }} />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("referral") ? "grey" : ""}
            />
          </Link>

          <Link to="commissions" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Commissions"
              to="user/commissions"
              icon={
                <PointOfSaleIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("commissions") ? "grey" : ""}
            />
          </Link>

          {/* <Link to="2fa-security" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="2FA Security"
              icon={
                <BlockIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("2fa-security") ? "grey" : ""}
            />
          </Link> */}

          <Link to="account-settings" onClick={() => setMobileCollapsed(false)}>
            <Item
              title="Account Settings"
              icon={
                <HomeOutlinedIcon
                  sx={{ color: "skyblue", fontSize: "1.1rem" }}
                />
              }
              selected={selected}
              setSelected={setSelected}
              backGround={pathName.includes("account-settings") ? "grey" : ""}
            />
          </Link>

          <Box display="flex" alignItems="center" gap="5px" ml="15px" mt="5px" mb={!isNotMobile ? "15px": ""}>
            <IconButton sx={{ color: 'orange' }}>
              <LogoutOutlinedIcon />
            </IconButton>
            <Typography sx={{ cursor: 'pointer' }} onClick={() => logOutUser()}>Log out</Typography>
          </Box>
        </Box>
      </>

    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
  mobileCollapsed: selectMobileView,
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
});
const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
  setMobileCollapsed: () => dispatch(setMobileView()),
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
  setLogOut: () => dispatch(setLogOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
