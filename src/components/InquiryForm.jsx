import React, { useState } from "react";
import "../ComponentCss/InquiryForm.css";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser"; // Ensure this is installed correctly
import { toast } from "react-toastify";

const InquiryForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, phone, message });

    const serviceId = "service_icvavif";
    const templateId = "template_3d3z5nl";
    const publicKey = "yCcqNkGhZaNPV5oNl";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Holy Vrindavan Tour",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Enquiry sent successfully!", response);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success("Enquiry sent successfully! We will contact you soon.");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        toast.error("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="inquiry-form-overlay">
      <div className="inquiry-form">
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose />
        </button>
        <h2><strong>Enquiry <span className="texts">Form</span></strong></h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contact:
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
