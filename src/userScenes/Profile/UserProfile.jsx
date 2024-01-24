import React, { useState, useRef, useEffect } from "react";
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
  selectUserProfile,
  selectUserTokenAndEmail,
  selectUserUpdated,
  selectUserWallet,
} from "../../redux/userInfo/userSelect";
import {
  setCurrentUser,
  setUserProfile,
  setUserUpdated,
} from "../../redux/userInfo/userInfoAction";

import { MdAddAPhoto } from "react-icons/md";

const CopyToClipboard = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef(null);

  const copyToClipboard = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={value}
        readOnly
        style={{ position: "absolute", left: "-9999px" }}
      />
      <button onClick={copyToClipboard}>
        {isCopied ? " Copied! " : " Copy "}
      </button>
    </>
  );
};

const UserProfile = ({
  userData,
  userVerify,
  userProfile,
  userWallet,
  userUpdated,
  setUserProfile,
}) => {
  const [avatar, setAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const token = userVerify?.token;

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
      toast.success("Image upload successful");
    } catch (error) {
      toast.error("Profile image upload failed");
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const url = "https://mlm.a1exchange.net/api/v1/profile/info";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.get(url, config);
        console.log(res.data);
        setUserProfile(res?.data.data.user_profile);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchUserDetails();
  }, [token]);

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
              Status:{" "}
              {userData.member_status === "inactive"
                ? 'inactive (Proceed to the "Deposit" to make your one-time payment)'
                : "active"}
            </p>
          </article>
        </div>

        <div className={styles.profileimagewrap}>
          <div className={styles.usericon}>
            <div>
              {!imgUrl && userData.image_path === null ? (
                <span className={styles.initials}>{initials}</span>
              ) : (
                <img
                  className={styles.pp}
                  src={imgUrl ? imgUrl : userData?.image_path}
                  alt=""
                />
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
          <form className={styles.form}>
            <CustomInput
              type="text"
              label="First Name"
              readOnly
              defaultValue={userData?.first_name}
            />
            <CustomInput
              type="text"
              label="Last Name"
              readOnly
              defaultValue={userData?.last_name}
            />
            <CustomInput
              type="email"
              label="Email"
              defaultValue={userData.email}
            />
            <CustomInput
              type="number"
              label="Phone"
              readOnly
              defaultValue={userData.phone_number}
            />
            <div>
              <CustomInput
                referralInput
                type="text"
                label="Your Referral Link"
                readOnly
                defaultValue={
                  userWallet?.member_status === "active"
                    ? userWallet?.refer_link
                    : "Your account is inactive"
                }
              />
              <CopyToClipboard
                value={
                  userWallet?.member_status === "active"
                    ? userWallet?.refer_link
                    : ""
                }
              />
            </div>

            <CustomInput
              type="text"
              label="Your Referral Code"
              readOnly
              defaultValue={userData.referral_code}
            />
            {userProfile && (
              <CustomInput
                type="text"
                label="Account Name"
                readOnly
                defaultValue={userProfile?.account_name}
              />
            )}
            {userProfile && (
              <CustomInput
                type="text"
                label="Account Number"
                readOnly
                defaultValue={userProfile?.account_number}
              />
            )}
                 {userProfile && (
              <CustomInput
                type="text"
                label="Country"
                readOnly
                value={userUpdated ? userUpdated.country : userProfile.country}
              />
            )}
               {userProfile && (
              <CustomInput
                type="text"
                label="State"
                readOnly
                value={userUpdated ? userUpdated.state : userProfile.state}
              />
            )}
             {userProfile && (
              <CustomInput
                type="text"
                label="LGA"
                readOnly
                value={userUpdated ? userUpdated.lga : userProfile.lga}
              />
            )}
               {userProfile && (
              <CustomInput
                type="text"
                label="City"
                readOnly
                value={userUpdated ? userUpdated.city : userProfile.city}
              />
            )}
               {userProfile && (
              <CustomInput
                type="text"
                label="Address"
                readOnly
                value={userUpdated ? userUpdated.address : userProfile.address}
              />
            )}
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
  userProfile: selectUserProfile,
  userWallet: selectUserWallet,
  // userUpdated: selectUserUpdated,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setCurrentUser(userData)),
  setUserProfile: (userProfile) => dispatch(setUserProfile(userProfile)),
  setUserUpdated: (updateDetails) => dispatch(setUserUpdated(updateDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
