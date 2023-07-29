import styles from './footer.module.css';
import Logo from '../../logo.png'
import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'


const Footer = () => {

    return (
        <article className={styles.wrapper}>
            <div className={styles.container}>
                <section className={styles.footerOne}>
                    <img src={Logo} alt="logo" className={styles.logo} />
                    <h3>Alliance <span>Arcade</span></h3>
                    <p>Your one ticket to financial freedom. Become a member today!</p>
                </section>

                <section className={styles.footerTwo}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='about'>About Us</Link></li>
                        <li><Link to='/faqs'>FAQs</Link></li>
                        <li><Link to='/how'>How It Works</Link></li>
                        <li><Link to='/plan'>Plan</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    
                    </ul>
                </section>

                <section className={styles.footerThree}>
                    <h2>Social Links</h2>
                    <p>You can visit our social media pages through the links below</p>
                    <div className={styles.iconswrapper}>
                    <BsFacebook className={styles.icon}/>
                    <GrInstagram className={styles.icon} />
                    <BsTwitter className={styles.icon} />
                    </div>
                    
                </section>
            </div>
           
            <p style={{'borderBottom': '1px solid grey'}}></p>
            <span className={styles.footernote}>&#169;2023 Alliance Arcade, All Rights Reserved.</span>


        </article>

    )
}

export default Footer;