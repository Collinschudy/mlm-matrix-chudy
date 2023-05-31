import React from 'react'
import styles from './Homepage.module.css'
import FullPageHeader from '../../components/fullpageHeader/FullpageHeader.component';
import AboutSection from '../../components/AboutSection/aboutSection.component';


const Homepage = () => {
  return (
    <div className={styles.wrapper}>
        <FullPageHeader />
        <AboutSection />
    </div>
  )
}

export default Homepage;