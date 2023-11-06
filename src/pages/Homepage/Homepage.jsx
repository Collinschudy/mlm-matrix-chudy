import React, {useEffect} from 'react'
import styles from './Homepage.module.css'
import FullPageHeader from '../../components/fullpageHeader/FullpageHeader.component';
import AboutSection from '../../components/AboutSection/aboutSection.component';
import HowItWorks from '../../components/How-it-works/howitworks.component';
import Header from '../../components/Header/header.component';
import Footer from '../../components/Footer-section/footer.component';
import Plan from '../../components/Plan/Plan.component';
import Vision from '../../components/vision/vision.component';
import Calltoaction from '../../components/CallToAction/Calltoaction';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <Header />
        <FullPageHeader />
        <Vision />
        <AboutSection />
        <HowItWorks />
        <Plan />
        <Calltoaction />
        <Footer />
    </div>
  )
}

export default Homepage;