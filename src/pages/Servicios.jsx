import React from "react";
import ItemServicio from '../components/iItemServicio.jsx'
import { serviciosDetail } from "./servicios.js";

export default function Servicios() {

  return (
    <div className="flex flex-col items-center h-full w-full bg-[#a5c8ca]  ">
      <ItemServicio serviciosDetail={serviciosDetail} />
      <ItemServicio/>
      <ItemServicio/>
    </div>
  );
}
