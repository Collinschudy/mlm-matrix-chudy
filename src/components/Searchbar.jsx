import React, {useState} from "react";
import { IconButton, InputBase, Box, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { connect } from "react-redux";
import { selectToggleView } from "../redux/navToggle/navToggleSelect";
import { selectMobileView } from "../redux/mobileToggle/mobileToggleSelect";
import { setMobileView } from "../redux/mobileToggle/mobileToggleAction";
import { setToggleView } from "../redux/navToggle/navToggleAction";
import { createStructuredSelector } from "reselect";
import { tokens } from "../theme";

const Searchbar = ({ collapsed, setIsCollapsed, show, setShow }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNotMobile = useMediaQuery('(min-width:600px)')
  // const [show, setShow] = useState(false)
  return (
    <>
      <div
        style={{
          height: "4rem",
          display: "flex",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        <IconButton type="button" sx={{ color: "lightgrey" }}>
          {collapsed && show ? (
            <CancelOutlinedIcon onClick={() => {isNotMobile && setIsCollapsed((prev)=>!prev);!isNotMobile && setShow((prev)=>!prev)}} />
          ) :  (
            <MenuIcon onClick={() => {isNotMobile && setIsCollapsed((prev)=>!prev);!isNotMobile && setShow((prev)=>!prev);}}/>
          )}
        </IconButton>
        <Box
          display="flex"
          borderRadius="1.5em"
          justifyContent="space-between"
          backgroundColor="white"
          width="100%"
          maxWidth={isNotMobile ? '30%' : '70%'}
        >
          <InputBase sx={{ ml: 2 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon sx={{color: colors.grey[500]}}/>
          </IconButton>
        </Box>

        {/* <input type='text' placeholder='Search'/> */}
      </div>
      {/* <span style={{borderBottom: '1px solid yellowgreen', display:'block', width: '100%' }}></span> */}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
  show: selectMobileView
});

const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
  setShow: () => dispatch(setMobileView())
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
