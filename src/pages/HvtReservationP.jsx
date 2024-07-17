import React from "react";

const HvtReservationP = () => {
  return (
    <section className="bg-light mt-5 mb-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold fs-1">
              Reservation &<span className="text main-hover"> Policy </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <p className="text-justify">
              Confirmation: After successfully processing the booking, a
              confirmation email with booking details will be sent to you.
              Re-Confirmation: All bookings has to be re-confirmed with us
              minimum 10 days prior to the date of arrival along with confirm
              arrival details. In the event there is no communication between
              the two parties, and no response from the client, it will be
              deemed cancelled and advance deposit will be retained as
              processing fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HvtReservationP;
