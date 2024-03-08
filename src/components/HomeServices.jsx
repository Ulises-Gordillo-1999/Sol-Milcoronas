import React from "react";
import imageservicios from "../assets/Milcoronas.png";

export default function HomeServices() {
  const servicios = [
    {
      id: 1,
      titulo: "Servicio1",
      contentButton: "Quiero saber mas",
    },
    {
      id: 2,
      titulo: "servicio2",
      contentButton: "Quiero saber mas",
    },
    {
      id: 3,
      titulo: "servicio3",
      contentButton: "Quiero saber mas",
    },
    {
      id: 4,
      titulo: "servicio4",
      contentButton: "Quiero saber mas",
    },
  ];

  return (
    <div className="flex items-center justify-around h-[40rem] w-full bg-neutral-800 text-white">
      {servicios.map((servicio) => (
        <div
          className="w-64 h-[30rem] border border-white rounded-lg"
          key={servicio.id}
        >
          <div>
            <img
              className="object-cover h-48 w-96 border-b"
              src={imageservicios}
              alt="imagen"
            />
          </div>
          <div>
            <h1 className="text-2xl">{servicio.titulo}</h1>
            <button>{servicio.contentButton}</button>

            <div className="text-5xl font-extrabold ...">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600  to-[#a5c8ca]">
                Hello world
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}