import React from 'react';
import styles from './calltoaction.module.css'

const Calltoaction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <h3 className={styles.heading}>Join us today!</h3>
            <button>
                Click to Get Started
            </button>
        </div>
    </div>
  )
}

export default Calltoaction