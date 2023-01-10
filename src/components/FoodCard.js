import React from "react";
import cart from "../assets/basket .svg";
import lemon from "../assets/lemon dessert.jpg";
import greekSalad from "../assets/greek salad.jpg";
import bra from "../assets/restauranfood.jpg";

const FoodType = [
  {
    image: greekSalad,
    name: "Greek salad",
    price: "$12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and ourChicago style feta cheese, garnished withcrunchy garlic and rosemary croutons.",
  },
  {
    image: bra,
    name: "Bruchetta",
    price: "$ 5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
    image: lemon,
    name: "Lemon Dessert",
    price: "$ 5.00",
    desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];
const FoodCard = () => {
  return (
    <div className="grid grid-cols-3 gap-x-10">
      {FoodType.map((food, i) => (
        <div
          key={i}
          className="flex flex-col w-[264px] h-[439px] bg-[#edefee] rounded-t-[10px] text-left"
        >
          <img
            src={food.image}
            alt=""
            className="rounded-t-[10px] h-[185px] object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-[18pt] font-bold">{food.name}</h2>
              <h2 className="text-[18pt] font-bold text-[#ee9972]">
                {food.price}
              </h2>
            </div>
            <p className=""> {food.desc} </p>
            <h4 className="flex justify-start items-center text-[16px] font-[700]">
              {" "}
              Order a delivery
              <span>
                {" "}
                <img src={cart} alt="" />
              </span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
