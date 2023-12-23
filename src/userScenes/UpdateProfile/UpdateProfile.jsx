import { useState } from "react";
import styles from "./updateprofile.module.css";
import AdminHeader from "../userGlobal/AdminHeader";
import CustomInput from "../../utils/CustomInput/CustomInput";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUserTokenAndEmail,
  selectUserUpdated,
} from "../../redux/userInfo/userSelect";
import {
  setUserTokenAndEmail,
  setUserUpdated,
} from "../../redux/userInfo/userInfoAction";

const UpdateProfile = ({ userVerify, setUserProfile, userProfile }) => {
  const [country, setCountry] = useState(""),
    [state, setStateName] = useState(""),
    [lga, setLga] = useState(""),
    [city, setCity] = useState(""),
    [address, setAddress] = useState("");

    const navigate = useNavigate();

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleStateChange = (e) => {
    setStateName(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleLgaChange = (e) => {
    setLga(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userVerify);
    const { token } = userVerify;

    const body = { country, state, lga, city, address };
    const url = "https://mlm.a1exchange.net/api/v1/profile/update";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.post(url, body, config);
      setUserProfile(res.data.data.user_profile);
      console.log(res)
      console.log(userProfile)
      // toast.success(res.data.message, {
      //   position: "top-right",
      //   autoClose: 2000, 
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // })
      alert(res.data.message)
      navigate("/user/dashboard")

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className={styles.updateprofile}>
      <AdminHeader
        title="Update Profile"
        subtitle="Provide more of your user information"
      />
      <section className={styles.wrapper}>
        <div className={styles.formwrap}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrap}>
              <h3>Please fill in your details below</h3>
              <CustomInput
                label="Country"
                value={country}
                onChange={handleCountryChange}
              />
              <br />
              <CustomInput
                label="State"
                value={state}
                onChange={handleStateChange}
              />
              <br />
              <CustomInput
                label="Address"
                value={address}
                onChange={handleAddressChange}
              />
              <br />
              <CustomInput
                label="City"
                value={city}
                onChange={handleCityChange}
              />
              <br />
              <CustomInput label="LGA" value={lga} onChange={handleLgaChange} />
            </div>

            <button className={styles.button} type="submit">
              Update Your Profile
            </button>
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
  setUserVerify: (user) => dispatch(setUserTokenAndEmail(user)),
  setUserProfile: (profile) => dispatch(setUserUpdated(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
