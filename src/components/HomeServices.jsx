import React from "react";
import pinturaLienzo from "../assets/563.jpg";
import servicio2 from "../assets/2220.jpg";
import servicio3 from "../assets/2834.jpg";

export default function HomeServices() {
  const servicios = [
    {
      id: 1,
      titulo: "Diseño Gráfico Exclusivo",
      contentButton: "Quiero saber mas",
      image: servicio2,
    },
    {
      id: 2,
      titulo: "Ilustraciones Digitales Personalizadas",
      contentButton: "Quiero saber mas",
      image: servicio2,
    },
    {
      id: 3,
      titulo: "Pinturas Personalizadas en Lienzo",
      contentButton: "Quiero saber mas",
      image: pinturaLienzo,
    },
    {
      id: 4,
      titulo: "Productos Decorativos Únicos",
      contentButton: "Quiero saber mas",
      image: servicio3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#a5c8ca] to-gray-900 ">
      <h1 className="text-5xl font-semibold italic text-center pt-4">
          ¡Explora la Diversidad de Nuestros Servicios Especializados!
        </h1>
      <div className="flex items-center justify-around h-[36rem] w-full  text-white ">
        {servicios.map((servicio) => (
          <div
            className="w-72 h-[30rem] border border-white rounded-lg my-1 mx-1 bg-slate-700"
            key={servicio.id}
          >
            <div>
              <img
                className="object-cover h-56 w-96 border-b"
                src={servicio.image}
                alt={servicio.titulo}
              />
            </div>
            <div className="flex justify-center items-center h-36 ">
              <h1 className="text-4xl text-center text-wrap bg-clip-text text-transparent bg-gradient-to-r from-teal-600  to-[#a5c8ca] font-extrabold">
                {servicio.titulo}
              </h1>
            </div>
            <div className="flex items-center justify-center my-8">
              <button className="w-64 bg-cyan-200 mb-4 rounded-lg text-2xl text-black p-2 hover:bg-cyan-500 hover:text-white">
                {servicio.contentButton}...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
("Diseño Gráfico Exclusivo");
("Ilustraciones Digitales Personalizadas");
("Pinturas Personalizadas en Lienzo");
("Productos Decorativos Únicos");
