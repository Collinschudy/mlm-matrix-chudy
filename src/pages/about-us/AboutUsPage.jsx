import { useEffect, useState } from 'react';
import styles from './aboutus.module.css';

import AboutSection from '../../components/AboutSection/aboutSection.component';
import PageHeading from '../../components/pageHeading/pageHeading.component';




const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
  return (
    <div>
        <PageHeading background='./images/aboutus.jpg' title='About Us' />
        <AboutSection />
    </div>
  )
}

export default AboutUsPage