import styles from "./referral.module.css";
import AdminHeader from "../userGlobal/AdminHeader";
import { connect } from "react-redux";
import {
  selectCurrentUser,
  selectUserMatrix,
} from "../../redux/userInfo/userSelect";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "../../redux/userInfo/userInfoAction";

const Referral = ({ userMatrix }) => {
  const downlines = userMatrix?.downlines;

  return (
    <>
      <AdminHeader title="Referrals" subtitle="Welcome to your referrals" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>Direct Downlines</h3>
          {/* <ol>
        {downlines.map((downline) => {
          const { name, ref_id, avatar, level } = downline;
          return (
            <li key={downlines.id}>{name}<img className={styles.avatar} src={avatar === null ? '' : avatar} /></li>
          )
        })}
      </ol> */}
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Id</th>
                <th className={styles.th}>Name</th>
                <th className={`${styles.hide} ${styles.th}`}>Referral Id</th>
                <th className={`${styles.hide} ${styles.th}`}>Avatar</th>
                <th className={`${styles.hide} ${styles.th}`}>Level</th>
              </tr>
            </thead>
            {downlines?.map((downline, idx) => {
              const { name, ref_id, avatar, level } = downline;
              return (
                <tbody key={idx} className={styles.tbody}>
                  <tr>
                    <td className={styles.td}>{idx + 1}</td>
                    <td className={styles.td}>{name}</td>
                    <td className={`${styles.hide} ${styles.td}`}>{ref_id}</td>
                    <td className={`${styles.hide} ${styles.td}`}>
                      {avatar && (
                        <img
                          className={styles.avatar}
                          src={avatar === null ? "" : avatar}
                          alt=""
                        />
                      )}
                    </td>
                    <td className={`${styles.hide} ${styles.td}`}>{level}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userMatrix: selectUserMatrix,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Referral);
