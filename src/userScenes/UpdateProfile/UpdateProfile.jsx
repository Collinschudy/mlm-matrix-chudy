import { useState } from "react";
import styles from "./updateprofile.module.css";
import AdminHeader from "../userGlobal/AdminHeader";
import CustomInput from "../../utils/CustomInput/CustomInput";

const UpdateProfile = () => {
  const [country, setCountry] = useState(""),
    [state, setStateName] = useState(""),
    [lga, setLga] = useState(""),
    [city, setCity] = useState(""),
    [address, setAddress] = useState("");

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
  return (
    <div className={styles.updateprofile}>
      <AdminHeader
        title="Update Profile"
        subtitle="Provide more of your user information"
      />
      <section className={styles.wrapper}>
        <div className={styles.formwrap}>
          <form>
            <div className={styles.inputWrap}>
                <h3>Please fill in your details below</h3>
            <CustomInput
              label="Country"
              value={country}
              onChange={handleCountryChange}
            />
            <CustomInput
              label="State"
              value={state}
              onChange={handleStateChange}
            />
            <CustomInput
              label="Address"
              value={address}
              onChange={handleAddressChange}
            />
            <CustomInput
              label="City"
              value={city}
              onChange={handleCityChange}
            />
            <CustomInput label="LGA" value={lga} onChange={handleLgaChange} />
            </div>
            

            <button className={styles.button}>Update Your Profile</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
