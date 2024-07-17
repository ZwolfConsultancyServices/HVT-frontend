import React from 'react';
import '../pagesCss/HvtPayment.css';
import { FaHandPointDown } from "react-icons/fa";

const HvtPayment = () => {
  return (
    <section className="bg-light  mt-4  p-5"> 
      <div className="container hvtpayment my-4">    
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold fs-1">
               payement 
              <span className="main-hover"> 
              <FaHandPointDown  className='main-hover' color={"hsl(29, 100%, 50%)" }/>
              </span>
            </h2>
          </div>
        </div>
       
  
      <div className="row">
        <div className="col-md-4">
          <h4 className='text-center'>Policy Details</h4>
          <p className='text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae leo aliquam gravida.</p>
          <p>Return Policy: You can return within 30 days from the date of purchase.</p>
        </div>
        <div className="col-md-4 text-center barcode">
          <h4 className='text-center' > Barcode</h4>
          <img src="images/PAYMENT.jpeg" alt="Barcode"  className="img-fluid h-2" />
        </div>
        <div className="col-md-4">
          <h4 className='text-center'>Bank Details</h4>
          <p className='text-center'>Bank Name: Bank Of Baroda </p>
          <p className='text-center'>Account Name:Deepak Sagar </p>
          <p className='text-center'>Account Number: 85770100002768</p>
          <p className='text-center'>IFSC: BARB0DBVRIN</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HvtPayment;
