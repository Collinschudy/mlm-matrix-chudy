import React from 'react';
import styles from './paymentsuccessful.module.css';
import { useNavigate } from 'react-router-dom';
import { selectPaymentResponse } from '../../redux/userInfo/userSelect';
import { setPaymentResponse } from '../../redux/userInfo/userInfoAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const PaymentSuccessful = ({ paymentResponse, setPaymentResponse }) => {
    const navigate = useNavigate();
    
const backToHome = () => {
    // setPaymentResponse()
    navigate('/user/dashboard')
}
  return (
    <div>
        <p>Your payment has been verified</p>
        <p>Transaction Id: {paymentResponse.reference}</p>
        <p onClick={() => backToHome()}>To navigate to your dashboard, click continue</p>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    paymentResponse: selectPaymentResponse
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setPaymentResponse: response => dispatch(setPaymentResponse(response))
  });


export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccessful)