import React, { useState } from "react";
import {
  IconButton,
  InputBase,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { connect } from "react-redux";
import { selectToggleView } from "../../redux/navToggle/navToggleSelect";
import { selectMobileView } from "../../redux/mobileToggle/mobileToggleSelect";
import { setMobileView } from "../../redux/mobileToggle/mobileToggleAction";
import { setToggleView } from "../../redux/navToggle/navToggleAction";
import { createStructuredSelector } from "reselect";
import { tokens } from "../../theme";

const Searchbar = ({ collapsed, setIsCollapsed, show, setShow }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const isNotMobile = useMediaQuery("(min-width:600px)");
  
  return (
    <>
      <div
        style={{
          height: "3rem",
          display: "flex",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        {collapsed && show ? (
          <IconButton
            type="button"
            sx={{ color: "lightgrey" }}
            onClick={() => {
              isNotMobile && setIsCollapsed((prev) => !prev);
              !isNotMobile && setShow((prev) => !prev);
            }}
          >
            <CancelOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton
            type="button"
            sx={{ color: "lightgrey" }}
            onClick={() => {
              isNotMobile && setIsCollapsed((prev) => !prev);
              !isNotMobile && setShow((prev) => !prev);
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* <Box
          display="flex"
          borderRadius="1.5em"
          justifyContent="space-between"
          backgroundColor="white"
          width="100%"
          maxWidth={isNotMobile ? "30%" : "70%"}
        >
          <InputBase sx={{ ml: 2 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon sx={{ color: colors.grey[500] }} />
          </IconButton>
        </Box> */}

      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collapsed: selectToggleView,
  show: selectMobileView,
});

const mapDispatchToProps = (dispatch) => ({
  setIsCollapsed: () => dispatch(setToggleView()),
  setShow: () => dispatch(setMobileView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
