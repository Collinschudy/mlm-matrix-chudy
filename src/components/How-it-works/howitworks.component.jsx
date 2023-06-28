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
      <p className={styles.paragraph}>Alliance arcade subscribers use the power of leveraging and people-helping-people system. 
      Imagine if everyone in this country deposit N1 to your bank account every day? That will make you millions of naira.
       Here on alliance-arcade earners we use multiplication system and networking platform to make you huge cash everyday. 
       Just think of at least 3 of your friends and invite them to register using your link or using your own username as 
       their sponsor id. Once they do, they will fill your level 1 for you, tell them to bring their 3 also and they will 
       fill your level 2 as you are earning, they will also be earnings. You will get paid to level 9 that is why our default 
       matrix programme is 3*9 matrix. And the good thing is you don't have to wait until you complete the level before you make 
       withdrawal.you can request for payment anytime you have N1000 and above and you can get paid as many times as you request 
       within 24hours.
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