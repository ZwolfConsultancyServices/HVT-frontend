import React from "react";
import { Link } from "react-router-dom";
import "../pagesCss/HvtFooter.css";

const HvtFooter = () => {
  return (
    <footer className="bg-dark text-white mt-4">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
         <a className="text-decoration-none" href="/"><img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain mr-2"
              style={{
                height: "55px",
                width: "55px",
                objectFit: "contain",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <span className="text-xl font-bold text-white logo-head">
             <strong>Holy Vrindavan Tour</strong> 
            </span></a> 
            <p className="text-white text-justify pt-2 new-p">
              Welcome to the official website of Holy Vrindavan Tour. We are the
              number one travel agent in Braj, providing our clients with the
              best from hotel bookings to transportation. Our Braj tour packages
              are designed to make sure you won’t miss out on any of these
              amazing destinations! We cover Vrindavan, Mathura, Nandgaon,
              Barsana, Govardhan, Gokul, and Dauji.
            </p>
          </div>
          <div className="col-md-6 mb-4 pt-2  d-flex flex-column align-items-center new-p">
            <div className="text-center">
              <h1 className="h5 pb-2">Contact Us</h1>
              <p>📞 +91 6399778850</p>
              <p>
                📧{" "}
                <a
                  href="mailto:holyvrindavantour@gmail.com"
                  className="text-white"
                >
                  holyvrindavantour@gmail.com
                </a>
              </p>
              <p>
                📍 Near Anand Krishna Van hotel, <br/>Madhuvan Colony, Vrindavan
                (Mathura) <br/> Pin code: 281121
              </p>
            </div>
          </div>
          <div className="col-md-2 mb-4 pt-2  d-flex flex-column align-items-md-end align-items-center new-p">
            <h1 className="h5 pb-2">Quick Links</h1>
            <Link
              to="/terms-conditions"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Privacy Policy
            </Link>
            <Link
              to="/refund-policy"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Refund Policy
            </Link>
            <Link
              to="/reservation-policy"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Reservation Policy
            </Link>
            <Link
              to="/payment"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Payment details
            </Link>
            <Link
              to="/login"
              className="d-none d-sm-none d-md-block d-lg-block text-white d-block mb-2 text-decoration-none "
            >
              Admin 
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black text-secondary text-center py-3">
        <p className="mb-0">
          &copy; 2024 Holy Vrindavan Tour. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default HvtFooter;
