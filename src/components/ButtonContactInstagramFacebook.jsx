import React from "react";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";

export default function ButtonContactInstagramFacebook() {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-serif ">
        <button className="bg-slate-400 rounded-lg text-2xl w-96 h-10  hover:bg-slate-600 hover:text-cyan-200 ">
          ¡Comunicate con nosotros!
        </button>
        <div className="flex mt-2 ">
          <img className="h-10 w-auto mx-1" src={instagram} alt="instagram" />
          <img className="h-10 w-auto mx-1" src={facebook} alt="facebook" />
        </div>
      </div>
    </>
  );
}