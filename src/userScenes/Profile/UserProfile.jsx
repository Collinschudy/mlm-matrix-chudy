import React from "react";
import AdminHeader from "../userGlobal/AdminHeader";
import styles from './profile.module.css'
import CustomInput from "../../utils/CustomInput/CustomInput";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectPaymentResponse } from "../../redux/userInfo/userSelect";
import { setCurrentUser } from "../../redux/userInfo/userInfoAction";

import { MdAddAPhoto } from "react-icons/md";

const UserProfile = ({ userData }) => {
  const firstNameCap = userData?.first_name.charAt(0).toUpperCase() + userData?.first_name.slice(1),
    lastNameCap = userData?.last_name?.charAt(0).toUpperCase() + userData?.last_name?.slice(1),
    initials = firstNameCap.charAt(0) + lastNameCap.charAt(0), usernameCap = userData?.username.charAt(0).toUpperCase() + userData?.username.slice(1);
  return (
    <div>
      <AdminHeader
        title="Personal Information"
        subtitle='View your registration details here (go to "Update Profile" to add more)'
      />
      
      <section className={styles.wrapper}>
        <div className={styles.heading}>
          <article>
            <p>Username: {usernameCap}</p>
            <br />
            <p>Type: Membership</p>
          </article>
        </div>

        <div className={styles.profileimagewrap}>
          <div className={styles.usericon}>
            <object type="image/jpeg" data="">
              {initials ? '' : 'initials'}
            </object>
            <p>{initials}</p>
          </div>
          <p className={styles.add}>
            <MdAddAPhoto /> Add photo
          </p>
        </div>
        <div className={styles.formwrap}>
          <form>
            <CustomInput
              type="text"
              label="First Name"
              value={userData?.first_name}
            
            />
            <CustomInput
              type="text"
              label="Last Name"
              value={userData?.last_name}
            
            />
            <CustomInput type="email" label="Email" value={userData.email} />
            <CustomInput type="number" label="Phone" value={userData.phone_number}/>
          </form>
        </div>
      </section>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


