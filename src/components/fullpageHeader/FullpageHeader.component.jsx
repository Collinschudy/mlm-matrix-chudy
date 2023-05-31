import React, { useEffect, useState } from 'react'
import styles from './fullpageheader.module.css';
import data from './data';
import FullPageHeaderItems from '../fullpageItems/fullpageitems.component';

const FullPageHeader = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = data.length - 1
        if (index > lastIndex) {
            setIndex(0)
        }
        const timer = setInterval(() => {
            setIndex(index + 1)
        }, 4000)
        return () => clearInterval(timer)
    }, [index])


    return (
        <div className={styles.container}>
            {
                data.map((item, idx) => {
                    return (
                        <div key={item.id}
                        className={`${styles.item} ${index === idx ? styles.show : ""}`}>
                            <FullPageHeaderItems item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FullPageHeader;