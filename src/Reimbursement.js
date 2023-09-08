// import React, { useState , useEffect} from "react"
import axios from "axios"
import Card from "./cards"
import "./rembursement.css"
import React from "react"
export default function Reimbursement(){


    const checkouthandler=async(amount)=>{
      const {data} = await  axios.post("http://localhost:5000/checkout",{
    amount
    });

    const options = {
        key: "rzp_test_jO9ilRoleMsoml",
        amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        // image: "https://example.com/your_logo",
        order_id: "order_IluGWxBm9U8zJ8", //Thisa sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/api/paymentVerification",
        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        prefill: {
            name: "tushar gupta",
            email: "tushargupta8859@gmail.com",
            contact: "8859932237"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}

    return(
        <>
       hy Payment

     {/* ?hellow mr ansh*/}
       <Card amount={5000} checkouthandler={checkouthandler}/>
       <Card amount={3000} checkouthandler={checkouthandler}/>
        </>
    )
}