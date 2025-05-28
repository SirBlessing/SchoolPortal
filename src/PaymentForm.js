import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import logooo from "./image/logooo.png";

function PaymentForm() {
	const [paymentresponse, setPaymentresponse] = useState("");
  const [formData, setFormData] = useState({
    
    
    phone: "",
    amount: "",
	paymentfor:"",
  });
  
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const handleChange = (e) => {
  const { name, value } = e.target;

  
  if (name === "paymentfor") {
    let autoAmount = "";

    if (value === "schoolfee") {
      autoAmount = "100000"; 
    } else if (value === "otherfess") {
      autoAmount = "5000"; 
    }

    setFormData({
      ...formData,
      paymentfor: value,
      amount: autoAmount,
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};
 
 
 
 
 
 const PaystackButton = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handlePaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_4b8ecbcdc75bace871b619c9b25fcdbe4c356ff0',
      email: storedUser?.email || 'no-email@example.com',
      amount: formData.amount * 100,
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1),

      callback: function (response) {
        
        axios.post('http://localhost:3000/save-payment', {
          reference: response.reference,
          email: storedUser?.email,
          phone: formData.phone,
          paymentfor: formData.paymentfor,
          expectedamount: formData.amount,
          amountpaid: formData.amount,
          status: "success",
        })
        .then(res => {
          console.log("Payment saved:", res.data);
		  setFormData({ phone: "", amount: "", paymentfor: "" });
			
			localStorage.setItem("totalPayable", "0");

          window.location.href = "/payment-success";
        })
        .catch(err => {
          console.error("Failed to save successful payment:", err);

         
          axios.post('http://localhost:3000/save-payment', {
            reference: response.reference,
            email: storedUser?.email,
            phone: formData.phone,
            paymentfor: formData.paymentfor,
            expectedamount: formData.amount,
            amountpaid: 0,
            status: "failed",
          });
        });
      },

      onClose: function () {
        
        axios.post('http://localhost:3000/save-payment', {
          reference: "cancelled-" + Math.floor(Math.random() * 1000000000),
          email: storedUser?.email,
          phone: formData.phone,
          paymentfor: formData.paymentfor,
          expectedamount: formData.amount,
          amountpaid: 0,
          status: "cancelled",
        })
        .then(res => {
          console.log("Cancelled payment saved:", res.data);
		  setFormData({ phone: "", amount: "", paymentfor: "" }); 

          setPaymentresponse("❌ Payment was cancelled.");
        })
        .catch(err => {
          console.error("Failed to save cancelled payment:", err);
		  setFormData({ phone: "", amount: "", paymentfor: "" }); 

          setPaymentresponse("❌ Payment was cancelled. Failed to save.");
        });
      }
    });

    handler.openIframe();
  };

  return <button onClick={handlePaystackPayment}>Pay with Paystack</button>;
};



 





  
  
  





  return (
    <div className="wholepaymentdiv">
      <center><img src={logooo} alt="school logo" /></center>
      <div className="payhead">
       <center> <h1>Fees Payment Form</h1></center>
	   
      </div>
      <div className="paymentformdiv">
        <label>Payment For :</label>
        <br />
		<select name="paymentfor" value={formData.paymentfor} onChange={handleChange}>
		<option value="Select">Select Payment Type</option>
		<option value="schoolfee">School Fee</option>
		<option value="otherfess">Other Fees</option>
		</select>
        <br />
        <label>Phone Number :</label>
        <br />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        <br />
        
        <label>Payment Amount :</label>
        <br />
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} disabled />
        <br />
      </div>
      
      <center><PaystackButton /></center>
	  <p className="payrespponse">{paymentresponse}</p>
    </div>
  );
}

export default PaymentForm;
