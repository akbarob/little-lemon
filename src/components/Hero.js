import React from "react";
import { Link } from "react-router-dom";
import Restauranfood from "../assets/restauranfood.jpg";
const Hero = () => {
  return (
    <div className="w-full h-full flex justify-between items-center bg-[#495e57] px-[200px]">
      <div className="flex flex-col items-start max-w-[322px]">
        <h1 className="text-[56px] font-[500]">Little Lemon</h1>
        <h6 className="text-[32px] font-[400] text-white">Chicago</h6>
        <p className=" max-h-[79px] text-left text-white">
          We are a family owned Mediterrian restauran, focused on traditional
          recipes served with a modern twist
        </p>
        <Link to="/Reservations">
          <button className="grid place-content-center h-[60px] w-[200px] text-[18px] text-white bg-[#f4ce14] rounded-[10px] mt-10">
            Reseve a Table
          </button>
        </Link>
      </div>
      <div>
        <img
          src={Restauranfood}
          alt=""
          className="w-[400px] h-[400px] object-cover rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default Hero;
