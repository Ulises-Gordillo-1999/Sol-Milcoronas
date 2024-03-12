import React from "react";
import Item from "./Item";
import Image2 from "@assets/Milcoronas-2.png";

export default function Footer() {
  const servicios = [
    {
      id: 9,
      title: "Servicios",
    },
    {
      id: 1,
      titulo: "Diseño Gráfico Exclusivo",
    },
    {
      id: 2,
      titulo: "Ilustraciones Digitales Personalizadas",
    },
    {
      id: 3,
      titulo: "Pinturas Personalizadas en Lienzo",
    },
    {
      id: 4,
      titulo: "Productos Decorativos Únicos",
    },
  ];

  const explora = [
    {
      id: 9,
      title: "Explora",
    },
    {
      id: 5,
      titulo: "Sobre mi",
    },
    {
      id: 6,
      titulo: "Mi Portafolio",
    },
    {
      id: 7,
      titulo: "Contacto",
    },
  ];

  const contacto = [
    {
      id: 10,
      title: "Contacto",
    },
    {
      id: 11,
      titulo: "example@gmail.com",
    },
    {
      id: 12,
      titulo: "Url-instgram",
    },
    {
      id: 13,
      titulo: "Url-facebook",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid grid-cols-4 h-64 mx-2 pt-10 text-center">
        <div className="flex items-center justify-center ">
          <img className="h-[180px] w-[250px] object-cover" src={Image2} alt="Footer Logo Mil coronas" />
        </div>
        <Item content={servicios} />
        <Item content={explora} />
        <Item content={contacto} />
      </div>
    </footer>
  );
}
