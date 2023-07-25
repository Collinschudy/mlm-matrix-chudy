import "./App.css";
import React, { useState } from "react";
import { Suspense, Lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";

import Header from "./components/Header/header.component";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Footer from "./components/Footer-section/footer.component";
import Faqs from "./pages/FAQs/faqs.page";
import HowItWorksPage from "./pages/HowItWorks/howitworks.page";
import ContactPage from "./pages/contact-us/contactpage";
import AboutUsPage from "./pages/about-us/AboutUsPage";
import Admin from "./pages/Admin/admin";
import Dashboard from "./pages/User-Dashboard/Dashboard";
import SignUpPage from "./pages/signup-page/SignUp";
import SignInPage from "./pages/signin-page/Signin";
import Plan from "./components/Plan/Plan.component";
import PlanPage from "./pages/planPage/planPage";
import SignupVerify from "./pages/SignUpVerification/SignupVerify";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/userInfo/userInfoAction";
import { selectCurrentUser } from "./redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";

const Homepage = React.lazy(() => import("./pages/Homepage/Homepage"));

const Protected = ({ userData, children }) => {
  if (!userData) {
    return <Navigate to="/" />;
  }
  return children;
};

function App({ userData, setUserData }) {
  const [arrowScrollUp, setArrowScrollUp] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [theme, colorMode] = useMode();

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    if (window.scrollY >= 50) {
      setArrowScrollUp(true);
    } else {
      setArrowScrollUp(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div
            className={`arrowUpBox ${arrowScrollUp && "arrowScroll"}`}
            onClick={handleScrollTop}
          >
            <FaAngleUp className="arrowUp" />
          </div>
          {/* <Header /> */}
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense
                  fallback={
                    <div className="holder">
                      <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  }
                >
                  <Homepage />
                </React.Suspense>
              }
            />
            <Route path="faqs" element={<Faqs />} />
            <Route path="how" element={<HowItWorksPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="admin/*" element={<Admin />} />
            <Route
              path="user/*"
              element={
                <Protected userData={userData}>
                  <Dashboard />{" "}
                </Protected>
              }
            />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="plan" element={<PlanPage />} />
            <Route path="verify" element={<SignupVerify />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="resetpassword" element={<PasswordReset />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
