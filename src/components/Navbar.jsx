import React from "react";
import Logo from "../assets/Milcoronas.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#a5c8ca]">
      <div className="flex items-end justify-evenly h-full px-60">
        <img className="border rounded-xl w-28 h-28" src={Logo} alt="logo" />
        <div className="text-3xl font-medium font-serif text-">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="text-3xl font-medium font-serif">
        <Link to={'/servicios'}>Servicios</Link>
        </div>
        <div className="text-3xl font-medium font-serif">
        <Link to={'/about-me'}>About Me</Link>
          </div>
        <div className="text-3xl font-medium font-serif">
        <Link to={'/portafolio'}>Portafolio</Link>
        </div>
      </div>
    </nav>
  );
}
