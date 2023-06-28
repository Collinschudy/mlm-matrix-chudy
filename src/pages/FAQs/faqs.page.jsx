import { useEffect } from "react";
import styles from "./faqs.module.css";
import PageHeading from "../../components/pageHeading/pageHeading.component";
import Header from "../../components/Header/header.component";
import Footer from "../../components/Footer-section/footer.component";

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <PageHeading
        background="./images/faqs.jpg"
        title="Frequently Asked Questions"
      />
      <Footer />
    </div>
  );
};

export default Faqs;
