import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// style="display: grid; max-width: 200px; gap: 20px"

// import { fetchAPI, submitAPI } from "../utils/calls";

const BookingPage = ({
  setavailableTimes,
  availableTimes,
  setData,
  date,
  setdate,
  time,
  submitForm,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      resDate: "",
      resTime: "",
      resGuest: "",
      resOccasion: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setavailableTimes({ type: "data", payload: data });
    setData(data);
    submitForm(data);
    reset();
  };
  const handleCancel = () => {
    reset();
    setavailableTimes({ type: "empty" });
    console.log("canceling");
  };

  const style = {
    input: "p-3 rounded-[10px] outline-none my-6 ml-4 font-karla",
    labelText: "font-Markazi font-bold capitalze",
    label: "flex w-full justify-start items-center text-xl",
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <h1 className="text-2xl font-bold font-karla p-4">Reservation Form</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center bg-slate-200 w-[500px] shadow-2xl rounded-lg p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="resOccasion" className={style.label}>
          <h3 className={style.labelText}>Choose date</h3>
          <input
            // value={date}
            type="date"
            id="res-date"
            {...register("resDate", {
              required: true,
              onChange: (e) => setdate(e.target.value),
            })}
            className={style.input}
          />
          {errors.resDate?.type === "required" && (
            <span className="text-red-400 text-xl ml-4">
              reservation date is required
            </span>
          )}
        </label>

        <label htmlFor="resTime" className={style.label}>
          <h3 className={style.labelText}>Choose Time</h3>{" "}
          <select
            id="res-time "
            {...register("resTime", { required: true })}
            className={style.input}
          >
            <option>Time</option>

            {time?.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.resTime && (
            <span className="text-red-400 text-xl ml-4">
              reservation Time is required
            </span>
          )}
        </label>

        <label htmlFor="resGuest" className={style.label}>
          <h3 className={style.labelText}>No of Guests</h3>{" "}
          <input
            type="number"
            placeholder="0"
            id="resGuests"
            {...register("resGuest", { required: true, min: 1, max: 15 })}
            className={style.input}
          />
          {errors.resGuest?.type === "max" && (
            <span className="text-red-400 text-xl ml-4">
              max Number of Guests are 15
            </span>
          )}
          {errors.resGuest?.type === "min" && (
            <span className="text-red-400 text-xl ml-4">
              min Number of Guest is 1
            </span>
          )}
          {errors.resGuest?.type === "required" && (
            <span className="text-red-400 text-xl ml-4">
              Number of Guest is required
            </span>
          )}
        </label>

        <label htmlFor="resOccasion" className={style.label}>
          <h3 className={style.labelText}> Choose Occasion</h3>{" "}
          <select
            id="occasion"
            {...register("resOccasion", { required: true })}
            className={style.input}
          >
            <option defaultValue>select occasion</option>

            <option value="Birthday">Birthday</option>
            <option value="Annivesary">Anniversary</option>
          </select>
          {errors.resOccasion?.type === "required" && (
            <span className="text-red-400 text-xl ml-4">
              Occasion Type is required
            </span>
          )}
        </label>
        <div className="flex gap-10 my-4 ">
          <button
            type="submit"
            aria-label="On Click"
            className="py-2 px-4 bg-green-400 rounded-lg text-xl text-white font-bold"
          >
            Make Your reservation
          </button>
          <button
            type="reset"
            onClick={() => handleCancel()}
            aria-label="On Click"
            className="py-2 px-4 bg-rose-400 rounded-lg text-white text-xl font-bold"
          >
            Cancel Reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
