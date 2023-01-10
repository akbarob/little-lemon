import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Logo.svg";
const Links = [
  "Home",
  "about",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];
const Navbar = () => {
  return (
    <nav className="">
      {/* LargeMenu */}
      <div className="flex justify-between px-[200px] items-center">
        <div>
          <Logo />
        </div>
        <ul className="flex gap-x-6">
          {Links.map((item, i) => (
            <li key={i}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
