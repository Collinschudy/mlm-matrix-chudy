import { useEffect, useState } from "react";
import styles from "./aboutus.module.css";

import AboutSection from "../../components/AboutSection/aboutSection.component";
import PageHeading from "../../components/pageHeading/pageHeading.component";
import Header from "../../components/Header/header.component";
import Footer from "../../components/Footer-section/footer.component";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <PageHeading background="./images/aboutus.jpg" title="About Us" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
