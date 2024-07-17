import React, { useState } from "react";
import "../pagesCss/HvtContactForm.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter as FaXTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const HvtContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!name || !email || !phone) {
      toast.error("Please fill out all required fields.");
      return;
    }

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
    <section>
      <div className="new-container" data-aos="fade-right" data-aos-duration="2000">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="new-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src="/assets/location.jpeg" className="icon" alt="" />
                <p>
                  📍 Near Anand Krishna Van hotel, Madhuvan Colony, Vrindavan
                  (Mathura) Pin code: 281121
                </p>
              </div>
              <div className="information">
                <img src="/assets/email.jpeg" className="icon" alt="" />
                <p>📧 holyvrindavantour@gmail.com</p>
              </div>
              <div className="information">
                <img src="/assets/phone.jpeg" className="icon" alt="" />
                <p>📞 +91 6399778850</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a
                  href="https://x.com/HolyTour42005?t=na70tSgwk3iQGGnXi4uNfA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/holyvrindavantour?igsh=MWg5dDNyaThncDFtNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/holy-vrindavan-tour-435642310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="images/Zwolf.jpeg"
                    width="28px"
                    className="zwolf"
                    alt="Zwolf"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit} autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className={`input-container ${focus.name ? "focus" : ""}`}>
                <input
                  type="text"
                  name="name"
                  className="input"
                  value={name}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label>Name</label>
                <span>Name</span>
              </div>
              <div className={`input-container ${focus.email ? "focus" : ""}`}>
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={email}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className={`input-container ${focus.phone ? "focus" : ""}`}>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  value={phone}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handlePhoneChange}
                  required
                  inputMode="numeric"
                />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div
                className={`input-container textarea ${
                  focus.message ? "focus" : ""
                }`}
              >
                <textarea
                  name="message"
                  className="input"
                  value={message}
                  placeholder="Message (Optional)"
                  onBlur={handleBlur}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span>Message</span>
              </div>
              <button type="submit" className="btn btn-send">
                Send
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HvtContactForm;
