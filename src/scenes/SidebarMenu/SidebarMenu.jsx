import React, { useState } from "react";
import styles from "./sidebarmenu.module.css";
import { Link } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import PeopleIco

// import { MenuItem } from "react-pro-sidebar";
// import { CalendarTodayOutlinedIcon } from "@mui/icons-material/CalendarTodayOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import { HelpOutlinedIcon } from "@mui/icons-material/HelpOutlined";
// import { PersonOutlinedIcon } from "@mui/icons-material/PersonOutlined";
// import { PieChartOutlineOutlinedIcon } from "@mui/icons-material/PieChartOutlineOutlined";
// import { TimelineOutlinedIcon } from "@mui/icons-material/TimelineOutlined";
// import { MapOutlinedIcon } from "@mui/icons-material/MapOutlined";
// import { BarChartOutlinedIcon } from "@mui/icons-material/BarChartOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
// import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
// import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
// import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { setLogOut } from "../../redux/userInfo/userInfoAction";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const Item = ({ title, to, icon, selected, setSelected, backGround }) => {

  return (
    <div
      className={styles.itembox}
      style={{ background: backGround }}
      onClick={() => {
        setSelected(title);
      }}
    >
      <IconButton size="small">{icon}</IconButton>
      <Link to={to} className={styles.textColor}>{title}</Link>
    </div>
  );
};

const SidebarMenu = ({ userData, setLogOut, userVerify }) => {
  const [selected, setSelected] = useState("Dashboard");
  const [hideTransaction, setHideTransaction] = useState(true);
  const navigate = useNavigate();
  const token = userVerify?.token
 


  const logOutUser = async () => {
    
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const url = "https://mlm.a1exchange.net/api/v1/auth/logout"

    try {
      const res = await axios.post(url, null, config);
      setLogOut();
      toast.success(res.data.message);
      navigate("/login");

    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <div className={styles.container}>

      <Item
        title="Dashboard"
        to="/admin/dashboard"
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: "black", fontSize: "1.3rem" }} />
          // #AAD3DF
        }
      />

      <Item
        title="Users"
        to="/admin/users"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <PeopleOutlinedIcon sx={{ color: "black", fontSize: "1.3rem" }} />
        }
      />
      <Item
        title="Users deposits"
        to="/admin/deposits"
        selected={selected}
        setSelected={setSelected}
        icon={
          <ReceiptOutlinedIcon sx={{ color: "black", fontSize: "1.3rem" }} />
        }
      />

      <Item
        title="Users withdrawals"
        to="/admin/withdrawals"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: "black", fontSize: "1.3rem" }} />
        }
      />

      
      <Item
        title="Calendar"
        to="/admin/calendar"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: "black", fontSize: "1.3rem" }} />
        }
      />

      <Item
        title="Account settings"
        to="/play"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: " black", fontSize: "1.3rem" }} />
        }
      />

          <Box display="flex" alignItems="center" gap="5px" ml="15px" mt="5px" >
            <IconButton sx={{ color: 'orange' }}>
              <LogoutOutlinedIcon />
            </IconButton>
            <Typography sx={{ cursor: 'pointer', color: "black" }} onClick={() => logOutUser()}>Log out</Typography>
          </Box>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail
});


const mapDispatchToProps = (dispatch) => ({
  setLogOut: () => dispatch(setLogOut())
});


export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);

