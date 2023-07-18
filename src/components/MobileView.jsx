import React, { useState } from "react";
import Sidebar from "../userScenes/userGlobal/Sidebar";
import { Box, useMediaQuery, Typography, IconButton } from "@mui/material";
import { selectMobileView } from "../redux/mobileToggle/mobileToggleSelect";
import { setMobileView } from "../redux/mobileToggle/mobileToggleAction";
import { connect } from "react-redux";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { createStructuredSelector } from "reselect";

const MobileView = ({ show, setShow }) => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  //   const [show, setShow] = useState(false)
  return (
    <Box
      position="absolute"
      borderRadius="0 0.8rem 0 0"
      right="40%"
      left="0"
      zIndex="1000"
      backgroundColor="rgb(0,0,50)"
      height="100vh"
      //   transform={`${!show ? 'translateX(-12%)': 'translateX(22%)'}`}
      // transform='translatex(120%)'
      sx={{
        transform: !show ? "translateX(-120%)" : "translateX(0)",
        transition: "0.5s all ease-in",
        overflowY: "scroll",
      }}
    >
      <IconButton
        sx={{
          position: "sticky",
          zIndex: "100",
          top: 0,
          right: "10px",
          color: "lightgray",
        }}
        onClick={() => setShow(!show)}
      >
        <CancelOutlinedIcon />
      </IconButton>

      <Box
        position="sticky"
        width="100%"
        borderRadius="0 0.8rem 0 0"
        top="0"
        left="0"
        right="0"
        zIndex="10"
        height="8em"
        display={`${isNotMobile ? undefined : "flex"}`}
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
            backgroundImage: "linear-Gradient(to right, skyblue, yellowgreen)",
            backgroundClip: "text",
          }}
        >
          Alliance Arcade
        </Typography>
      </Box>
      <Sidebar />
    </Box>
  );
};
const mapStateToProps = createStructuredSelector({
  show: selectMobileView,
});

const mapDispatchToProps = (dispatch) => ({
  setShow: () => dispatch(setMobileView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileView);
