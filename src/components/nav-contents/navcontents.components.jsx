import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './navcontents.module.css';

const Navcontent = () => {
    const [navScroll, setNavScroll] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <div className={styles.links}>
            <Link to='/'
                className={styles.link}
            >
                Home<span></span>
            </Link>
            <Link to='about'
                className={styles.link}
            >
                About<span></span>
            </Link>
            <Link to='how'
                className={styles.link}
            >
                How It Works<span></span>
            </Link>
            <Link to='plan'
                className={styles.link}
            >
                Plan<span></span>
            </Link>
            <Link to='faqs'
                className={styles.link}
            >
                FAQs<span></span>
            </Link>
            <Link to='contact'
                className={styles.link}
            >
                contact<span></span>
            </Link>
            <Link to='signin'
                className={`${styles.link} ${styles.signin}`}
            >
                Sign In<span></span>
            </Link>
        </div>
    )
}

export default Navcontent