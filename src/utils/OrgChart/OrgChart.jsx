// import { Tree, TreeNode } from 'react-organizational-chart';


// const OrgChartComponent = ({ data }) => {
//   const renderNode = (node) => (
//     <div className={styles.org_node}>
//       <p>{node.name}</p>
//     </div>
//   );

//   return (
//     <Tree
//       lineWidth={'1px'}
//       lineColor={'#000'}
//       lineBorderRadius={'10px'}
//       label={<TreeNode label={renderNode(data)} key={data.id} />}
//       key={data.id}
//     >
//       {data.downlines.map((downline) => (
//         <TreeNode key={downline.id} label={renderNode(downline)}>
//           {downline.downlines && downline.downlines.length > 0 && (
//             <OrgChartComponent data={downline} />
//           )}
//         </TreeNode>
//       ))}
//     </Tree>
//   );
// };

// export default OrgChartComponent;



import React from 'react';
import styles from './orgchart.module.css';
import { Tree, TreeNode } from 'react-organizational-chart';

const OrgChartComponent = ({ data }) => {
  const renderNode = (node) => (
    <div className={styles.org_node}>
      {node?.avatar && <img src={node?.avatar} alt={node?.id} className={styles.avatar} />}
      <p>{node?.name}</p>
    </div>
  );

  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'#ccc'}
      lineBorderRadius={'10px'}
      label={<TreeNode label={renderNode(data)} key={data?.ref_id} />}
      key={data?.ref_id}
    >
      {data?.downlines.map((downline) => (
        <TreeNode key={downline?.ref_id} label={renderNode(downline)}>
          {downline?.downlines && downline?.downlines.length > 0 && (
            <OrgChartComponent data={downline} />
          )}
        </TreeNode>
      ))}
    </Tree>
  );
};

export default OrgChartComponent;
