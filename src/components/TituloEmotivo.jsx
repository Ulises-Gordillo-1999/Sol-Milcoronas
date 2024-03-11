import React from "react";
import ButtonContactFacebookInstagram from "../components/ButtonContactInstagramFacebook";

export default function TituloEmotivo({ titulo }) {

  return (
    <div className="flex flex-col w-full h-72  bg-[#a5c8ca]">
      <p className="text-5xl italic  text-center my-14">
        {titulo}
      </p>
      <ButtonContactFacebookInstagram />
    </div>
  );
}
