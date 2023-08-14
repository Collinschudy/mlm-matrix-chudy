import React, { useState } from "react";
import styles from "./sidebarmenu.module.css";
import { Link } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// import { MenuItem } from "react-pro-sidebar";
// import { CalendarTodayOutlinedIcon } from "@mui/icons-material/CalendarTodayOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
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
      <Link to={to}>{title}</Link>
    </div>
  );
};

const SidebarMenu = () => {
  const [selected, setSelected] = useState("Dashboard");
  const [hideTransaction, setHideTransaction] = useState(true);
  return (
    <div className={styles.container}>
      {/* <div className={styles.carrier}>
        <Link to="/" className={styles.link}>
          <IconButton sx={{ color: "white" }}>
            <HomeOutlinedIcon />
          </IconButton>
          <span className={styles.title}>Dashboard</span>
        </Link>
      </div>

      <div
        onClick={() => setHideTransaction((prev) => !prev)}
        className={styles.carrier}
      >
        <span className={styles.title}>Transactions</span>
        <div
          className={`${hideTransaction ? styles.hide : ""} ${styles.links}`}
        >
          <Link to="" className={styles.link}>
            user deposits
          </Link>
          <Link to="" className={styles.link}>
            user withdrawals
          </Link>
        </div>
      </div>

      <div
        onClick={() => setHideTransaction((prev) => !prev)}
        className={styles.carrier}
      >
        <span className={styles.title}>Deposits</span>
        <div
          className={`${hideTransaction ? styles.hide : ""} ${styles.links}`}
        >
          <Link to="" className={styles.link}>
            Total deposits
          </Link>
          <Link to="" className={styles.link}>
            Dep
          </Link>
        </div>
      </div> */}

      <Item
        title="Dashboard"
        to="/admin/dashboard"
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: " #AAD3DF", fontSize: "1.2rem" }} />
        }
      />

      <Item
        title="Users deposits"
        to="/admin/deposits"
        selected={selected}
        setSelected={setSelected}
        icon={
          <ReceiptOutlinedIcon sx={{ color: "#AAD3DF", fontSize: "1.2rem" }} />
        }
      />

      <Item
        title="Users withdrawals"
        to="/play"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: "#AAD3DF", fontSize: "1.2rem" }} />
        }
      />

      <Item
        title="Calendar"
        to="/admin/calendar"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: "#AAD3DF", fontSize: "1.2rem" }} />
        }
      />

      <Item
        title="Account settings"
        to="/play"
        small
        selected={selected}
        setSelected={setSelected}
        icon={
          <HomeOutlinedIcon sx={{ color: " #AAD3DF", fontSize: "1.2rem" }} />
        }
      />

          <Box display="flex" alignItems="center" gap="5px" ml="15px" mt="5px" >
            <IconButton sx={{ color: 'b23b3b' }}>
              <LogoutOutlinedIcon />
            </IconButton>
            <Typography sx={{ cursor: 'pointer' }}>Log out</Typography>
          </Box>
    </div>
  );
};

export default SidebarMenu;
