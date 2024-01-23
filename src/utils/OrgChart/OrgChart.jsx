import React from "react";
import styles from "./orgchart.module.css";
import { Tree, TreeNode } from "react-organizational-chart";
// import { createStructuredSelector } from "reselect";
// import { setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
// import { connect } from "react-redux";
// import { selectCurrentUser } from "../../redux/userInfo/userSelect";

const OrgChartComponent = ({ data }) => {
  const renderNode = (node) => {
    // let arr = node?.name.split(" ");
    // const first = arr[0], second = arr[1], firstNameCap = first?.charAt(0).toUpperCase(),
    //   lastNameCap = second?.charAt(0).toUpperCase(),
    //   initials = firstNameCap + lastNameCap;
    //   console.log(initials)

    return (
      <div className={styles.org_node}>
        <div>
          {node?.avatar ? (
            <img src={node?.avatar} alt={node?.id} className={styles.avatar} />
          ) : (
            <span className={styles.initials}>{'A'}</span>
          )}
        </div>

        <p>{node?.name}</p>
      </div>
    );
  };

  return (
    <Tree
      lineWidth={"2px"}
      lineColor={"#ccc"}
      lineBorderRadius={"10px"}
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

// const mapStateToProps = createStructuredSelector({
//   userData: selectCurrentUser,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
// });

export default OrgChartComponent;
