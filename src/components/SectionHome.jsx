import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
//import image1 from "../assets/2220.jpg";
//import image2 from "../assets/563.jpg";
//import image3 from "../assets/2834.jpg";

export default function SectionHome({ image }) {
  const images = [
    {
      original: "https://picsum.photos/id/445/1565/582.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/2/1565/582.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/3/1565/582.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <section className="flex w-full justify-center bg-[#a5c8ca] pt-5">
      <ImageGallery
        items={images}
        slideInterval={7000}
        showPlayButton={false}
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
      />
    </section>
  );
}

/*
<div className="flex basis-2/4 ml-4 items-center justify-center">
        <h1 className="text-6xl italic">
          El Arte de Valorar tu Marca: Impacta con un Branding que Inspira
          Confianza y Credibilidad
        </h1>
      </div>
      <div className="flex basis-2/4 mr-6">
        <img className="object-cover rounded-md" src={image} alt="DesktopDiseñoHome" />
      </div>
*/
