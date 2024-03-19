import React, { useState, useEffect } from "react";

export default function iItemServicio({serviciosDetail}) {
  const [posicion, setPosicion] = useState([false]);
  const [itemServicio, setItemServicio] = useState(serviciosDetail)

  useEffect(() => {
    if (itemServicio && itemServicio.length != undefined) {
      console.log(itemServicio);
    }
  }, [itemServicio]);


  return (
    <div id="udg" className="flex flex-row justify-center h-[400px] w-[1600px] py-4 pl-4 pr-2 border-b-2 border-gray-900">
      <img className="" src="https://picsum.photos/400/300" alt="" />
      <div>
        <h1 className="text-2xl text-center font-semibold">Hola mundo</h1>
        <p className="h-auto w-[1000px] m-2 text-start px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          itaque facere distinctio, beatae molestias magnam dignissimos odio
          vel, at consequuntur repellendus inventore. Earum at modi repudiandae
          quas praesentium? Officia, delectus! Eaque iste harum quas temporibus
          corrupti possimus voluptates velit necessitatibus maiores labore totam
          sit itaque inventore et culpa aperiam quaerat voluptatibus blanditiis,
          rerum quibusdam? Quaerat qui ullam ex dolorem blanditiis. Voluptates
          obcaecati iste fuga minus quae ad sit maiores reprehenderit assumenda
          illum asperiores, excepturi vel repudiandae libero eos aspernatur nemo
          necessitatibus unde earum incidunt debitis ullam! Consequuntur facere
          nemo accusamus? Blanditiis, a incidunt. Impedit quas expedita
          exercitationem voluptatibus delectus nesciunt modi dicta ex
          praesentium eveniet vitae sit, sunt eius officiis eligendi
          reprehenderit sequi quia a, non facilis. Obcaecati, saepe dolorum?
          Temporibus ipsum asperiores dolorum fuga minima autem accusantium
          sequi consectetur, maxime veritatis quae sapiente cumque! Ea officiis,
          deleniti iure delectus soluta inventore accusantium consectetur
          quaerat quia minus veniam vel ex! Veritatis quisquam at aspernatur
          corrupti debitis vel ducimus nulla dolore, officiis sint cumque magnam
          cupiditate et harum. Molestias adipisci, voluptas molestiae aut, quo
          iste blanditiis deleniti itaque pariatur sunt laborum! Quae quam
          excepturi sed tempore doloremque. Magnam, repellat. Illum, ipsum quia,
          maiores error temporibus eius suscipit eveniet labore, quaerat unde
          vitae molestiae. Amet, nihil quod! Fugit quas provident animi?
          Accusantium?
        </p>
      </div>
    </div>
  );
}
