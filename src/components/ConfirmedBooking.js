import React from "react";

const ConfirmedBooking = ({ data }) => {
  const { resOccasion, resDate, resTime, resGuest } = data;
  // console.log("data:", data);
  return (
    <div>
      <h1>Your Reservations have been made and Confirmed</h1>
      <h6>Date {resDate}</h6>
      <h6>Time: {resTime}</h6>
      <h6>Guest: {resGuest}</h6>
      <h6>Occasion: {resOccasion}</h6>
      <div>
        <h2>Thank You For Trusting Us!</h2>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
