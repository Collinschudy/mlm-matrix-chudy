import { useEffect } from 'react';
import PageHeading from '../../components/pageHeading/pageHeading.component';
import styles from './contactpage.module.css';
import Header from '../../components/Header/header.component';
import Footer from '../../components/Footer-section/footer.component';



const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
  return (
    <div>
      <Header />
        <PageHeading background='./images/contact2.jpg' title='Contact Us' />
        <Footer />
    </div>
  )
}

export default ContactPage;