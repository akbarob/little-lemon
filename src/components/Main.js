import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";

const Main = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>

        <Route path="/Reservations" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
