import React from "react";
import carpetaDemonslayer from '@assets/portafolio/carpeta-demonslayer.jpg'
import carpetaFrase from '@assets/portafolio/carpeta-frase.jpg'
import carpetaLoboHeroe from '@assets/portafolio/carpeta-lobo-heroe.jpg'
import carpetaMeliodasDemonslayer from '@assets/portafolio/carpeta-meliodas-demonslayer.jpg'
import carpetaMessi from '@assets/portafolio/carpeta-messi.jpg'
import carpetaNeymar from '@assets/portafolio/carpeta-neymar.jpg'
import carpetaSimpsons from '@assets/portafolio/carpeta-simpsons.jpg'
import carpetaVarias from '@assets/portafolio/carpetas-varias.jpg'
import cuadroSasuke from '@assets/portafolio/cuadro-sasuke.jpg'
import homeroBender from '@assets/portafolio/homero-bender.jpg'
import ilustracionDigitalPareja from '@assets/portafolio/ilustracion-digital-pareja.jpg'
import ilustracionDigital from '@assets/portafolio/ilustracion-digital.jpg'
import ilustracionDigitales from '@assets/portafolio/ilustraciones-digitales.jpg'
import ilustracionDigitalPerros from '@assets/portafolio/ilutracion-digital-perros.jpg'
import jovenDesktop from '@assets/portafolio/joven-desktop.jpg'


export default function Portafolio() {
  return (
    <div className="bg-gradient-to-b from-[#a5c8ca] to-gray-900">
      <h1 className="text-4xl text-center py-4 ">Portafolio</h1>
      <p className="text-center my-2 px-40">
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
      <div className="grid grid-cols-5 gap-3 mx-10 py-2 text-center">
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaDemonslayer} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaFrase} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaLoboHeroe} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaMeliodasDemonslayer} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaMessi} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaNeymar} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaSimpsons} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={carpetaVarias} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={cuadroSasuke} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={homeroBender} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={ilustracionDigitalPareja} alt="" /></div>
        <div className="flex w-full h-60 justify-center"><img className="object-center" src={ilustracionDigital} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={ilustracionDigitales} alt="" /></div>
        <div className="flex w-full h-60 justify-center"><img className="object-cover" src={ilustracionDigitalPerros} alt="" /></div>
        <div className="flex w-full h-60"><img className="object-cover" src={jovenDesktop} alt="" /></div>
      </div>
    </div>
  );
}
