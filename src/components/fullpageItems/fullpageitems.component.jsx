import styles from './fullpageitems.module.css'

import React from 'react'

const FullPageHeaderItems = ({ item }) => {
    const { imageUrl, desc } = item;
    return (
        <article
            className={styles.wrapper}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0, 0.5)), url(${imageUrl})`,
            }}
        >
            <h1>{desc}</h1>

        </article>
    )
}

export default FullPageHeaderItems;