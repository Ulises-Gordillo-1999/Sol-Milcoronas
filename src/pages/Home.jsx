import React from "react";
import SectionHome from '../components/SectionHome'
import DesktopDiseñoHome from "../assets/desktop-diseño-home.jpg";
import TituloEmotivo from '../components/TituloEmotivo'
import HomeServices from '../components/HomeServices'

export default function Home() {
  const titulo = " ♚ Transformando ideas en experiencias visuales. ♚"

  return (
    <>
      <SectionHome image={DesktopDiseñoHome} />
      <TituloEmotivo titulo={titulo} />
      <HomeServices/>
    </>
  );
}
