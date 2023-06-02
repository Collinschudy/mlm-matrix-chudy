import styles from './fullpageitems.module.css'

import React from 'react'

const FullPageHeaderItems = ({ item }) => {
    const { imageUrl, desc } = item;
    return (
        <article
            className={styles.wrapper}
            style={{
                backgroundImage: `linear-gradient(rgba(31,54,147,0.6), rgba(31,54,148, 0.6)), url(${imageUrl})`,
            }}
        >
            <h1>{desc}</h1>
            <div className={styles.container}>
                <button className={styles.signup}>Sign up</button>
                <button className={styles.signup}>Sign In</button>
            </div>


        </article>
    )
}

export default FullPageHeaderItems;