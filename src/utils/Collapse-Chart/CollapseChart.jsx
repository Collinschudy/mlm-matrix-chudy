import React, { useState } from 'react';
import styles from './collapsechart.module.css';
import { FcCollapse } from "react-icons/fc";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";



const ExpandableTree = ({ user, level }) => {
  const [showDownlines, setShowDownlines] = useState(false);

  const toggleDownlines = () => {
    setShowDownlines((prev) => !prev);
  };

  return (
    <div className={`${styles.user} ${styles.level}-${level}`}>
      <button onClick={toggleDownlines}>
        {!showDownlines ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </button>
      {user?.avatar && (
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
      )}
      <span>{user?.name}</span>
      {showDownlines && (
        <div className={styles.downlines}>
          {user?.downlines?.map((downline) => (
            <ExpandableTree key={downline.ref_id} user={downline} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


export default ExpandableTree;

