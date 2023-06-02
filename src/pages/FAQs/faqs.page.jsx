import { useEffect } from 'react';
import styles from './faqs.module.css';
import PageHeading from '../../components/pageHeading/pageHeading.component';


const Faqs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    return(
        <div className={styles.wrapper}>
            <PageHeading 
            background="./images/faqs.jpg"
            title="Frequently Asked Questions"
            />

        </div>
    )
}

export default Faqs;