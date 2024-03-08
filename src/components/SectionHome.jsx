import React from "react";

export default function SectionHome({image}) {
  return (
    <section className="flex flex-row w-full justify-around bg-slate-200">
      <div className="flex basis-2/4 ml-4 items-center justify-center">
        <h1 className="text-6xl italic">
          El Arte de Valorar tu Marca: Impacta con un Branding que Inspira
          Confianza y Credibilidad
        </h1>
      </div>
      <div className="flex basis-2/4 mr-6">
        <img className="object-cover" src={image} alt="DesktopDiseñoHome" />
      </div>
    </section>
  );
}
