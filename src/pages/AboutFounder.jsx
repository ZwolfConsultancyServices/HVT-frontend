import React from "react";
import "../pagesCss/AboutFounder.css";

const AboutFounder = () => {
  return (
    <div className="about-section mt-5 bg-light">
      <div className="content-container pt-4">
        <div className="logo-container text-center ">
          <h2 className="fw-bold fs-1 text-dark">
            Meet Our
            <span className="text main-hover"> Founder</span>
          </h2>
          <div className="row about-s pt-5">
            <div className="col-lg-4 col-md-12  logo-column" data-aos="fade-right" data-aos-duration="2000">
              <img
                src="/images/holyfounder.jpeg"
                alt=""
                className="logo-img"
              />
              <div>
                <h2 className="text-dark">
                  <strong>Deepak Sagar</strong>
                </h2>
                <span className="text-dark">(CEO & Founder)</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 text-column">
              <p className="text-dark text-justify text-p">
                At the heart of Holy Vrindavan Tour lies the vision and passion
                of our founder, Deepak Sagar. With a profound love for travel
                and a keen entrepreneurial spirit, Deepak Sagar embarked on a
                journey to redefine the way people experience the world.
                <br />
                <br />
                Deepak Sagar journey began with a deep-seated fascination for
                exploring new cultures, discovering hidden gems, and forging
                meaningful connections with people around the globe. This
                personal passion soon evolved into a mission to curate
                exceptional travel experiences that not only showcase the beauty
                of destinations but also immerse travelers in authentic local
                experiences.
                <br />
                <br />
                With over 5+ years of experience in the travel industry, Deepak
                Sagar brings a wealth of knowledge and expertise to Holi
                Vrindavan Tour. Starting their career as tourist guide, Deepak
                Sagar gained invaluable insights into the nuances of travel
                planning, customer preferences, and operational logistics.
                <br />
                <br />
                Driven by a commitment to excellence, Deepak Sagar identified a
                niche within the travel market that aligns perfectly with their
                vision. Whether it's crafting bespoke luxury journeys,
                organizing adrenaline-pumping adventure tours, or promoting
                sustainable eco-tourism, Deepak Sagar ensures that every trip
                exceeds expectations.
                <br />
                <br />
                Networking has been instrumental in Deepak Sagar's journey,
                forging partnerships with top hotels, airlines, local guides,
                and other service providers worldwide. These collaborations
                enable Holy Vrindavan Tour to offer unparalleled access and
                exclusive perks to our discerning clientele.
                <br />
                <br />
                Ultimately, Deepak Sagar is not just a leader but also a
                visionary who inspires our team to uphold the highest standards
                of service and integrity. Their dedication to creating
                transformative travel experiences has earned Holi Vrindavan Tour
                a reputation for excellence and a loyal global clientele.
                <br />
                <br />
                Join us on a journey curated by Deepak Sagar, where every
                destination becomes a story waiting to be discovered and
                cherished.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
