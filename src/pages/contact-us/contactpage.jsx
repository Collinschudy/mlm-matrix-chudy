import { useEffect } from 'react';
import PageHeading from '../../components/pageHeading/pageHeading.component';
import styles from './contactpage.module.css';



const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
  return (
    <div>
        <PageHeading background='./images/contact2.jpg' title='Contact Us' />
    </div>
  )
}

export default ContactPage;