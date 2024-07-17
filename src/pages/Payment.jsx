import React from 'react';
import "../pagesCss/Payment.css"
const upi = require("../payment.jpg")
const Payment = () => {

    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4  Name ">
                        <h3>NAME</h3>
                        <hr />
                        <h2>Deepak </h2>
                        <p> Trustworthy bank details for your peace of mind: Account Name: Deepak sagar , Bank: Bank Of Baroda, Account Number:85770100002768, IFSC: BARB0DBVRIN. Our banking transactions are fully encrypted and verified to ensure maximum security and confidentiality. Your trust is our priority, and we guarantee a safe and secure experience. </p>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-4 upi ">
                        <h3>UPI</h3>
                        <hr />
                        <img src={upi} alt='' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4  det" >
                        <h3>Bank details </h3>
                        <hr />
                       <h4>Bank Name: Bank Of Baroda</h4>
                       <h4>Account holder: Deepak Sagar</h4> 
                      <h4>Branch: Vrindavan</h4>
                      <h4>Account number:85770100002768</h4>
                        <h4>Ifsc code: BARB0DBVRIN</h4>
                       <h4> Pin Code: 281121</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

