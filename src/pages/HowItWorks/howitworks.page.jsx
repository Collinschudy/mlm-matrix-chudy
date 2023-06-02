
import React, {useEffect} from 'react'

import HowItWorks from '../../components/How-it-works/howitworks.component'
import PageHeading from '../../components/pageHeading/pageHeading.component'
import styles from './howitworkspage.module.css'


const HowItWorksPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
  return (
    <div className={styles.wrapper}>
        <PageHeading background='./images/hiw.jpg' title='How It Works' />
        <HowItWorks />
    </div>
  )
}

export default HowItWorksPage;