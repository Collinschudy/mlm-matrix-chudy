import { useEffect } from "react";
import styles from "./faqs.module.css";
import PageHeading from "../../components/pageHeading/pageHeading.component";
import Header from "../../components/Header/header.component";
import Footer from "../../components/Footer-section/footer.component";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h2>Frequently Asked Questions</h2>
          <Accordion
            sx={{
              borderColor: "black",
              backgroundColor: "rgba(0, 0, 50, 1)",
              fontFamily: "Raleway",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              <p className={styles.question}>How do I confirm my payments?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderColor: "black",
              backgroundColor: "rgba(0, 0, 50, 1)",
              fontFamily: "Raleway",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              <p className={styles.question}>What plans do you offer?</p>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                veniam accusamus eos autem doloribus assumenda optio placeat
                natus est. Accusamus.
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              borderColor: "black",
              backgroundColor: "rgba(0, 0, 50, 1)",
              fontFamily: "Raleway",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              <p className={styles.question}>How do I get started?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                facere.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
