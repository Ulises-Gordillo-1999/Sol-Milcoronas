import React from 'react'

export default function Item({content}) {

  return (
    <div>
      {content.map((item) =>(
        <div className='flex flex-col my-2' key={item.id} >
            <h1 className='text-4xl italic font-bold'>{item.title} </h1>
            <p className='text-xl italic'>{item.titulo} </p>
        </div>
      ))}
    </div>
  )
}
