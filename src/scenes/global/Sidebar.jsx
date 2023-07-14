import { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { CalendarTodayOutlinedIcon } from "@mui/icons-material/CalendarTodayOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { HelpOutlinedIcon } from "@mui/icons-material/HelpOutlined";
import { PersonOutlinedIcon } from "@mui/icons-material/PersonOutlined";
import { PieChartOutlineOutlinedIcon } from "@mui/icons-material/PieChartOutlineOutlined";
import { TimelineOutlinedIcon } from "@mui/icons-material/TimelineOutlined";
import { MapOutlinedIcon } from "@mui/icons-material/MapOutlined";
import { BarChartOutlinedIcon } from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const Item = ({ title, to, icon, selected, setSelected, small }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem className="menuitem"
      active={selected === title}
      style={{ color: colors.grey[100], fontSize: `${small ? '14px' : ''}`, backgroundColor: `${small ? colors.grey[500] : ''}` }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ml: 2}}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [hidden, setHidden] = useState(true);
  const [hiddenPay, setHiddenPay] = useState(true);
  const [hideDeposit, setHideDeposit] = useState(true);
  const [hideWithdraw, setHideWithdraw] = useState(true);

  return (
    <Box
      className='container'
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Alliance Arcade
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`./images/about.jpg`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Speck C.
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to=""
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Plan"
              to=""
              icon={<SendOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Users
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Item
                title="Manage Users"
                to=""
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <IconButton
                sx={{ ml: "-40px" }}
                onClick={() => setHidden(!hidden)}
              >
                {hidden ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )}
              </IconButton>
            </Box>
            <Box display={hidden ? "none" : "block"} marginLeft="15px">
              <Item small
                title="All Users"
                to="users"
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              
              />
              <Item
                title="Active Users"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Banned Users"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* PAYMENT GATEWAYS */}
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Item
                title="Payment Gateways"
                to=""
                icon={<PaymentOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <IconButton
                sx={{ ml: "-40px" }}
                onClick={() => setHiddenPay(!hiddenPay)}
              >
                {hiddenPay ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )}
              </IconButton>
            </Box>
            <Box display={hiddenPay ? "none" : "block"} marginLeft="15px" >
              <Item
                title="Automatic Gateways"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Manual Gateways"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* DEPOSITS */}
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Item
                title="Deposits"
                to=""
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <IconButton
                sx={{ ml: "-40px" }}
                onClick={() => setHideDeposit(!hideDeposit)}
              >
                {hideDeposit ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )}
              </IconButton>
            </Box>
            <Box display={hideDeposit ? "none" : "block"} marginLeft="15px">
              <Item
                title="Pending Deposits"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Approved Deposits"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Successful Deposits"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="All Deposits"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* WITHDRAWALS */}
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Item
                title="Withdrawals"
                to=""
                icon={<LocalAtmOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <IconButton
                sx={{ ml: "-40px" }}
                onClick={() => setHideWithdraw(!hideWithdraw)}
              >
                {hideWithdraw ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )}
              </IconButton>
            </Box>
            <Box display={hideWithdraw ? "none" : "block"} marginLeft="15px">
              <Item
                title="All Withdrawals"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Withdrawal Methods"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pending Withdrawals"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
               <Item
                title="Approved Withfrawals"
                to=""
                icon={<RadioButtonCheckedOutlinedIcon sx={{fontSize: '14px'}}/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            <Item
              title="Report"
              to=""
              icon={<SummarizeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Settings
            </Typography>
            <Item
              title="General Settings"
              to=""
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="KYC Settings"
              to=""
              icon={<VerifiedUserOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Matching Bonus"
              to=""
              icon={<MonetizationOnOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="System Configurations"
              to=""
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Language"
              to=""
              icon={<LanguageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Calendar"
              to="calendar"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lines"
              to="lines"
              icon={<LanguageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
