
import React, {useEffect} from 'react'

import HowItWorks from '../../components/How-it-works/howitworks.component'
import PageHeading from '../../components/pageHeading/pageHeading.component'
import styles from './howitworkspage.module.css';
import Header from '../../components/Header/header.component';
import Footer from '../../components/Footer-section/footer.component';


const HowItWorksPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
  return (
    <div className={styles.wrapper}>
      <Header />
        <PageHeading background='./images/hiw.jpg' title='How It Works' />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default HowItWorksPage;