import Title from '../titleComponent/title.component';
import styles from './howitworks.module.css';
import { BsPersonFillAdd } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri'
import { BiMoney } from 'react-icons/bi'


import React from 'react'

const HowItWorks = () => {
  return (
    <section className={styles.howitworks}>
      <Title heading={'How It Works'} title={''} howItWorks />
      <p className={styles.paragraph}>Our vision is to create a powerful platform for Nigeria to make money everyday and to provide 
      them best environment to act and achieve big as well as to create your present and future to bring happiness in your life. 
      People have been Making Money with alliancearcade and you can start today and make millions of Naira with only N1,000 purchase of
       the alliancearcade success system for activation. We have digital product "alliancearcade success system" which you need to buy
        with N1,000 only and that makes you a partner of alliancearcade earners. You have nothing to loose here and the system is very 
        simple. REGISTER WITH N1,000O ONLY - REFER/SPONSOR 3 PEOPLE and make as much as N2,952,600 total when you get to level 9.
      </p>
      <div className={styles.boxContainer}>
        <article className={styles.box}>
          <BsPersonFillAdd className={styles.icon}/>
          <h3>Sign up</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className={styles.box}>
          <RiTeamFill className={styles.icon}/>
          <h3>Invite friends</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className={styles.box}>
          <BiMoney className={styles.icon}/>
          <h3>Get paid</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </section>
  )
}

export default HowItWorks;