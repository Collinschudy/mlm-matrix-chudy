import React from 'react';
import styles from './verifypayment.module.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectUserTokenAndEmail } from '../../redux/userInfo/userSelect';
import { setPaymentResponse } from '../../redux/userInfo/userInfoAction';

const VerifyPayment = ({ userVerify, setPaymentResponse }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const reference = queryParams.get('reference')

    const verify = async () => {
        const { token } = userVerify;
        const headers = {
            'Authorization': `Bearer ${token}`,
          };
        try {
            const url = `https://mlm.zurupevarietiesstore.com/api/transactions/verify/${reference}`
            const res = await axios.get(url, { headers });
            console.log(res.data)
            console.log(res.data.data.gateway_response)
            const paymentData = res.data.data.gateway_response
            await setPaymentResponse(paymentData)
            navigate('/paymentsuccess')

        } catch (error) {
            console.log(error.message)
        }
    }
  return (
     
    <div>
        To verify your payment, click the button below
        <button className={styles.verifybutton} onClick={() => verify()}>Verify</button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    userVerify: selectUserTokenAndEmail,
  });
const mapDispatchToProps = dispatch => ({
    setPaymentResponse: response => dispatch(setPaymentResponse(response))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(VerifyPayment)