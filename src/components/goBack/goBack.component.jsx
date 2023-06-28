import React from 'react';
import styles from './goback.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className={styles.goback} onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft />
        Back
        </div>
       
        
    </div>
  )
}

export default GoBack;