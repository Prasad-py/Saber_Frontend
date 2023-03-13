import React, { useEffect } from "react";
import "../styles/ServicePage.css"
import "../styles/ProfilePage.css"
import { paymentSuccessRedirect } from "../backend-calls/services";
import { useNavigate } from "react-router-dom";


const PaymentSuccessRedirect = ()=> {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search)
    const sessionId = queryParams.get("session_id")
    useEffect(()=>{

        async function paymentSuccess(){
            const res = await paymentSuccessRedirect(sessionId)
            if(!res.error) {
                alert("Payment Successfull!!")
                navigate("/")
            }else{
                navigate("/")
            }
        }
        paymentSuccess();
    },[]);
    
    return (
        <div>
            <div className="page-heading">Payment Successfull. Redirecting.....</div>
        </div>
    )
    
}

export default PaymentSuccessRedirect