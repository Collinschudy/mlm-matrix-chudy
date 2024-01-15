import React, { useState } from "react";
import AdminHeader from "../userGlobal/AdminHeader";
import styles from './accountsettings.module.css'
import axios from "axios";
import { toast } from "react-toastify";

const AccountSettings = () => {
  const [message, setMessage] = useState("")
  const url = "https://mlm.a1exchange.net/api/v1/sms/send-sms"
  const sendSms = async () => {
  try {
    const res = await axios.post(url)
    console.log(res.data)
  } catch (error) {
    toast.error(error.message)
  }
   
  }
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendSms()
  }
  return (
    <>
     <AdminHeader
        title="Account Settings"
        subtitle="Welcome to your account settings"
      />
    
    <div className={styles.container}>
     <form action="" onSubmit={handleSubmit}>
      <h4>{message}</h4>
        <textarea cols="30" rows="20" onChange={handleChange} value={message}/>
      <button>send</button>
     </form>
      
    </div>
    </>
  );
};

export default AccountSettings;
