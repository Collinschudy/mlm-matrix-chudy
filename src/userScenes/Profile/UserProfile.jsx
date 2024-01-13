import React, { useState } from "react";
import AdminHeader from "../userGlobal/AdminHeader";
import styles from "./profile.module.css";
import CustomInput from "../../utils/CustomInput/CustomInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectPaymentResponse,
  selectUserTokenAndEmail,
  selectUserUpdated,
} from "../../redux/userInfo/userSelect";
import { setCurrentUser } from "../../redux/userInfo/userInfoAction";

import { MdAddAPhoto } from "react-icons/md";

const UserProfile = ({ userData, userVerify, userProfile }) => {
  const [avatar, setAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const firstNameCap =
      userData?.first_name.charAt(0).toUpperCase() +
      userData?.first_name.slice(1),
    lastNameCap =
      userData?.last_name?.charAt(0).toUpperCase() +
      userData?.last_name?.slice(1),
    initials = firstNameCap.charAt(0) + lastNameCap.charAt(0),
    usernameCap =
      userData?.username.charAt(0).toUpperCase() + userData?.username.slice(1);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const uploadAvatar = async () => {
    if (!avatar) {
      toast.error("Please select a file");
      return;
    }
    const { token } = userVerify;
    const url = "https://mlm.a1exchange.net/api/v1/profile/image-upload";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const formData = new FormData();
    formData.append("image", avatar);

    try {
      const res = await axios.post(url, formData, config);
     
      const image = res?.data.data.image_path;
      setImgUrl(image);
      toast.success("Image upload successful")
      // console.log("URL:", imgUrl);
    } catch (error) {
      toast.error("Profile image upload failed");
    }
  };

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
            <p>Type: {userData.type}</p>
            <br />
            <p>
              Status: {" "}
            {userData.member_status === "inactive" ? 'inactive (Proceed to the "Deposit" to make your one-time payment)' : "active"}
            </p>
          </article>
        </div>

        <div className={styles.profileimagewrap}>
          <div className={styles.usericon}>
            <div>
              {!imgUrl && userData.image_path === null ? (
                <span className={styles.initials}>{initials}</span>
              ) : (
                <img className={styles.pp} src={imgUrl ? imgUrl : userData?.image_path} alt="" />
              )}
            </div>
          </div>
          <p className={styles.add}>
            <input
              type="file"
              className={`${styles.input} hidden`}
              onChange={handleAvatar}
              id="photo"
            />
            <label htmlFor="photo" className={styles.label}>
            
              <span>
                <MdAddAPhoto /> Add photo
              </span>
              <button onClick={uploadAvatar}>Upload</button>
            </label>
          
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
            <CustomInput
              type="number"
              label="Phone"
              value={userData.phone_number}
            />
               <CustomInput
               referralInput
              type="text"
              label="Your Referral Link"
              value={userData.refer_link}
            />
                <CustomInput
              type="text"
              label="Your Referral Code"
              value={userData.referral_code}
            />
          </form>
        </div>
      </section>
      <ToastContainer limit={1} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userData: selectCurrentUser,
  userVerify: selectUserTokenAndEmail,
  userProfile: selectUserUpdated,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
