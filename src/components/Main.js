import React, { useEffect, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../calls";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import HomePage from "./HomePage";

const Main = () => {
  const [data, setData] = useState();
  const [time, setTime] = useState([]);
  const [date, setdate] = useState();
  const navigate = useNavigate();

  const initializeTimes = {
    availableTimes: { resDate: "", resTime: "", resGuest: "", resOccasion: "" },
  };

  const [availableTimes, setavailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  console.log("ava:", availableTimes);

  function updateTimes(state, action) {
    const refresh = {
      resDate: "",
      resTime: "",
      resGuest: "",
      resOccasion: "",
    };
    console.log("action", action);
    if (action.type === "data") {
      state.availableTimes = action.payload;
      console.log(action);
    }
    if (action.type === "empty") {
      state.availableTimes = refresh;
    }
    console.log(state);
    return state;
  }

  useEffect(() => {
    if (date) {
      var datey = new Date(date);
      // fetchAPI(date);
      console.log("newdate:", datey);
      console.log(fetchAPI(datey));
      setTime(fetchAPI(datey));
      console.log(date);
    } else {
      var datey = new Date();
      console.log("newdate:", datey);
      console.log(fetchAPI(datey));
      setTime(fetchAPI(datey));
      console.log("i ran :", date);
    }

    console.log("datey", datey);
  }, [date]);

  function submitForm(data) {
    console.log(data);
    submitAPI(data);
    navigate("/Confirmed-booking");
  }

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>

        <Route
          path="/Reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              setavailableTimes={setavailableTimes}
              setData={setData}
              date={date}
              setdate={setdate}
              time={time}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/Confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
