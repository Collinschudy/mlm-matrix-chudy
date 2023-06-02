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
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates corporis expedita
        facere minus dolore aspernatur assumenda, consectetur doloremque vero quod.
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