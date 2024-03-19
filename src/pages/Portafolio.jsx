import React from "react";
import carpetaDemonslayer from "@assets/portafolio/carpeta-demonslayer.jpg";
import carpetaFrase from "@assets/portafolio/carpeta-frase.jpg";
import carpetaLoboHeroe from "@assets/portafolio/carpeta-lobo-heroe.jpg";
import carpetaMeliodasDemonslayer from "@assets/portafolio/carpeta-meliodas-demonslayer.jpg";
import carpetaMessi from "@assets/portafolio/carpeta-messi.jpg";
import carpetaNeymar from "@assets/portafolio/carpeta-neymar.jpg";
import carpetaSimpsons from "@assets/portafolio/carpeta-simpsons.jpg";
import carpetaVarias from "@assets/portafolio/carpetas-varias.jpg";
import cuadroSasuke from "@assets/portafolio/cuadro-sasuke.jpg";
import homeroBender from "@assets/portafolio/homero-bender.jpg";
import ilustracionDigitalPareja from "@assets/portafolio/ilustracion-digital-pareja.jpg";
import ilustracionDigital from "@assets/portafolio/ilustracion-digital.jpg";
import ilustracionDigitales from "@assets/portafolio/ilustraciones-digitales.jpg";
import ilustracionDigitalPerros from "@assets/portafolio/ilutracion-digital-perros.jpg";
import jovenDesktop from "@assets/portafolio/joven-desktop.jpg";

export default function Portafolio() {

  const alturaImagen = 240
  const anchoImagen = 355
 
  const proyectos = [
    {
      id:30,
      nombre: "",
      imagen: carpetaDemonslayer,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:31,
      nombre: "",
      imagen: carpetaFrase,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:32,
      nombre: "",
      imagen: carpetaLoboHeroe,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:33,
      nombre: "",
      imagen: carpetaMeliodasDemonslayer,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:34,
      nombre: "",
      imagen: carpetaMessi,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:35,
      nombre: "",
      imagen: carpetaNeymar,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:36,
      nombre: "",
      imagen: carpetaSimpsons,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:37,
      nombre: "",
      imagen: carpetaVarias,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:38,
      nombre: "",
      imagen: cuadroSasuke,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:39,
      nombre: "",
      imagen: homeroBender,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:40,
      nombre: "",
      imagen: ilustracionDigital,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:41,
      nombre: "",
      imagen: ilustracionDigitalPareja,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:42,
      nombre: "",
      imagen: ilustracionDigitalPerros,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:43,
      nombre: "",
      imagen: ilustracionDigitales,
      height: alturaImagen,
      width: anchoImagen,
    },
    {
      id:44,
      nombre: "",
      imagen: jovenDesktop,
      height: alturaImagen,
      width: anchoImagen,
    }
  ]

  return (
    <div className="bg-gradient-to-b from-[#a5c8ca] to-gray-900">
      <h1 className="text-4xl text-center font-bold italic py-4 ">MIS PROYECTOS</h1>
      <p className="text-l text-center my-2 px-40">
        ¡Bienvenido a nuestro rincón de inspiración! Explora nuestros proyectos
        y sumérgete en un mundo de creatividad y pasión por el branding. Desde
        la conceptualización hasta la ejecución, cada proyecto en Milcoronas es
        una obra de arte única. Nuestra metodología de trabajo garantiza
        resultados excepcionales que superan tus expectativas. Déjate cautivar
        por nuestra galería de proyectos. Cada diseño cuenta una historia, cada
        marca refleja una identidad. Nos apasiona lo que hacemos y cada proyecto
        es un testimonio de nuestro compromiso con la excelencia. ¿Te gustaría
        formar parte de nuestra familia creativa? ¡No dudes en contactarnos!
        Estamos emocionados de convertir tus ideas en realidades asombrosas.
        ¡Descubre, inspira y crea con Milcoronas!
      </p> 
      <div className="grid grid-cols-5 gap-4 mx-10 py-2 text-center">
        {proyectos.map((item) => (
          <div key={item.id} className="flex w-full h-60 aspect-auto ">
            <img height={item.height} width={item.width} className="object-cover" src={item.imagen} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
