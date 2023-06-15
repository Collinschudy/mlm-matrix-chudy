import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FaAngleUp } from "react-icons/fa";

import Header from './components/Header/header.component';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer-section/footer.component';
import Faqs from './pages/FAQs/faqs.page';
import HowItWorksPage from './pages/HowItWorks/howitworks.page';
import ContactPage from './pages/contact-us/contactpage';
import AboutUsPage from './pages/about-us/AboutUsPage';
import Admin from './pages/Admin/admin';
import Dashboard from './pages/User-Dashboard/Dashboard';

function App() {
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
  }
  window.addEventListener('scroll', handleScroll);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='faqs' element={<Faqs />} />
        <Route path='how' element={<HowItWorksPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='admin/*' element={<Admin />} />
        <Route path='user' element={<Dashboard />} />

      </Routes>
      {/* <Footer /> */}
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
