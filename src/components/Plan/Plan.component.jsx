import React from "react";
import styles from "./plan.module.css";
import Title from "../titleComponent/title.component";
// import Footer from "../Footer-section/footer.component";

const Plan = () => {
  return (

      <section className={styles.wrapper}>
        <Title heading='Our Plan' />
        <div className={styles.plancontainer}>
          <p className={styles.introparagraph}>
            We offer only a single plan at the moment, that is the #1,000 plan
            and we have described below how to you will earn from it at every
            level.
          </p>
          <p className={styles.secondparagraph}>There are four columns representing: the level of earning, 
            the number of people that make up the level, their percentage earning, (of 1000) and 
            the amount that percentage represents, in otherwords, the amount the subscriber earns from that level</p>
          <article>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th>Level</th>
                  <th>People</th>
                  <th>%</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                <tr>
                  <td className={styles.td}>1</td>
                  <td className={styles.td}>3</td>
                  <td className={styles.td}>20</td>
                  <td className={styles.td}>600</td>
                </tr>
                <tr>
                  <td className={styles.td}>2</td>
                  <td className={styles.td}>9</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>900</td>
                </tr>
                <tr>
                  <td className={styles.td}>3</td>
                  <td className={styles.td}>27</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>2,700</td>
                </tr>
                <tr>
                  <td className={styles.td}>4</td>
                  <td className={styles.td}>81</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>8,100</td>
                </tr>
                <tr>
                  <td className={styles.td}>5</td>
                  <td className={styles.td}>243</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>24,300</td>
                </tr>
                <tr>
                  <td className={styles.td}>6</td>
                  <td className={styles.td}>729</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>72,900</td>
                </tr>
                <tr>
                  <td className={styles.td}>7</td>
                  <td className={styles.td}>2,187</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>218,700</td>
                </tr>
                <tr>
                  <td className={styles.td}>8</td>
                  <td className={styles.td}>6,561</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>656,100</td>
                </tr>
                <tr>
                  <td className={styles.td}>9</td>
                  <td className={styles.td}>19,683</td>
                  <td className={styles.td}>10</td>
                  <td className={styles.td}>1,968,300</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </section>
    
  );
};

export default Plan;
