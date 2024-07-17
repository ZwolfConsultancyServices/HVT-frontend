import React, { useState } from "react";

import { FaCommentAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import "../ComponentCss/HvtFloatingbtn.css";

const HvtFloatingbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div id="floating-button" onClick={togglePopup}>
        <FaCommentAlt id="toggle-icon" className={isOpen ? "rotated" : ""} />
      </div>
      <div id="pop-up" className={isOpen ? "visible" : "hidden"}>
        <a
          href="tel:+916399778850"
          target="_blank"
          className="contact-icon"
          id="phone-icon"
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          className="contact-icon"
          id="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:holyvrindavantour@gmail.com"
          className="contact-icon"
          id="email-icon"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default HvtFloatingbtn;
