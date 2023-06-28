import React from 'react'
import Plan from '../../components/Plan/Plan.component'
import Footer from '../../components/Footer-section/footer.component';
import Header from '../../components/Header/header.component';
import GoBack from '../../components/goBack/goBack.component';

const PlanPage = () => {
  return (
    <div>
        {/* <Header /> */}
        <GoBack />
        <Plan />
        <Footer />
    </div>
  )
}

export default PlanPage;