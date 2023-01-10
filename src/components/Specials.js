import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";

const Specials = () => {
  return (
    <section className="px-[200px] flex flex-col ">
      <div className="flex justify-between items-center">
        <h1 className="text-[40pt] font-extrabold text-black grid place-content-center">
          This weeks Specials!
        </h1>
        <Link to="/Reservations">
          <button className="grid place-content-center h-[60px] w-[200px] text-[18px] text-white bg-[#f4ce14] rounded-[10px] mt-10">
            Reseve a Table
          </button>
        </Link>
      </div>
      <div className="grid place-content-center mt-10">
        <FoodCard />
      </div>
    </section>
  );
};

export default Specials;
