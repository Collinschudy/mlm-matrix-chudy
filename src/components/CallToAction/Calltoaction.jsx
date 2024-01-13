import React from 'react';
import styles from './calltoaction.module.css'
import { useNavigate } from 'react-router-dom';

const Calltoaction = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <h3 className={styles.heading}>Join us today!</h3>
            <button onClick={() => navigate("/signup")}>
                Click to Get Started
            </button>
        </div>
    </div>
  )
}

export default Calltoaction