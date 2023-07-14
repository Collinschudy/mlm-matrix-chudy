import React from 'react';
import styles from './palnpage.module.css'
import Plan from '../../components/Plan/Plan.component'
import Footer from '../../components/Footer-section/footer.component';
import Header from '../../components/Header/header.component';
import GoBack from '../../components/goBack/goBack.component';
import PageHeading from '../../components/pageHeading/pageHeading.component';

const PlanPage = () => {
  return (
    <div className={styles.container}>
        <Header />
        <PageHeading background='./images/hiw.jpg' title='Our Plan' />
        {/* <GoBack /> */}
        <Plan />
        <Footer />
    </div>
  )
}

export default PlanPage;