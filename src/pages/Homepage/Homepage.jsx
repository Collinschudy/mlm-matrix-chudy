import React, {useEffect} from 'react'
import styles from './Homepage.module.css'
import FullPageHeader from '../../components/fullpageHeader/FullpageHeader.component';
import AboutSection from '../../components/AboutSection/aboutSection.component';
import HowItWorks from '../../components/How-it-works/howitworks.component';
import Header from '../../components/Header/header.component';
import Footer from '../../components/Footer-section/footer.component';
import Plan from '../../components/Plan/Plan.component';


const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <Header />
        <FullPageHeader />
        <AboutSection />
        <HowItWorks />
        <Plan />
        <Footer />
    </div>
  )
}

export default Homepage;