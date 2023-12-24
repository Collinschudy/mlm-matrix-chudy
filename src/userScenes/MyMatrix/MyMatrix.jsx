import React from 'react';
import styles from './mymatrix.module.css'
import AdminHeader from '../userGlobal/AdminHeader'
import { Tree, TreeNode } from 'react-organizational-chart';



const MyMatrix = () => {
  return (
    <>
    <AdminHeader title='My Matrix' subtitle='Welcome to your matrix section' />
    <div className={styles.matrixSection}>
    <Tree label={<div>Root</div>}>
    <TreeNode label={<div>Child 1</div>}>
      <TreeNode label={<div>Grand Child</div>} />
    </TreeNode>
  </Tree>
    </div>
    </>
  )
}

export default MyMatrix