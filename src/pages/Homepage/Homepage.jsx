import React, {useEffect} from 'react'
import styles from './Homepage.module.css'
import FullPageHeader from '../../components/fullpageHeader/FullpageHeader.component';
import AboutSection from '../../components/AboutSection/aboutSection.component';
import HowItWorks from '../../components/How-it-works/howitworks.component';


const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div className={styles.wrapper}>
        <FullPageHeader />
        <AboutSection />
        <HowItWorks />
    </div>
  )
}

export default Homepage;