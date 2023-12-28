import React, { useEffect, useState } from "react";
import styles from "./mymatrix.module.css";
import axios from "axios";
import AdminHeader from "../userGlobal/AdminHeader";
import OrgChartComponent from "../../utils/OrgChart/OrgChart";
import { connect } from "react-redux";
import { selectCurrentUser, selectUserMatrix, selectUserTokenAndEmail } from "../../redux/userInfo/userSelect";
import { setUserMatrix, setUserTokenAndEmail } from "../../redux/userInfo/userInfoAction";
import { createStructuredSelector } from "reselect";



const MyMatrix = ({ userVerify, userData, userChart, setUserChart }) => {
  const token = userVerify?.token;
  const id = userData?.id
  

  useEffect(() => {
    const userMatrix = async () => {
      const url = `https://mlm.a1exchange.net/api/v1/profile/mlm-tree/${id}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.get(url, config);
        setUserChart(res.data)
      } catch (error) {
        console.log(error);
        // Toast.error(error.message)
      }
    };

    return () => {
      userMatrix();
    };
  }, [token]);

  return (
    <>
      <AdminHeader
        title="My Matrix"
        subtitle="Welcome to your matrix section"
      />
      <div className={styles.matrixSection}>
        <h1>My Matrix</h1>
        <OrgChartComponent data={userChart} />
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userVerify: selectUserTokenAndEmail,
  userData: selectCurrentUser,
  userChart: selectUserMatrix,
});
const mapDispatchToProps = (dispatch) => ({
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserChart: (user) => dispatch(setUserMatrix(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMatrix);
