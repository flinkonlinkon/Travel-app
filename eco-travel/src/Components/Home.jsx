import React, { useContext } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { Apicon } from './ContextPro'
import Card from './Card'

export default function Home() {
    let {api} = useContext(Apicon)
    let newData = useLoaderData()
   
    
  return (
    <>
    <div className='w-11/12 mx-auto rounded-lg bg-yellow-300 p-3 mt-10 mb-10'>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/bXTSs7h/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai.jpg"
      className="w-full object-cover md:h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/bPxY6zx/jakob-owens-Mct-Eg-Ck1-Dm0-unsplash.jpg"
      className="w-full object-cover md:h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/ByYYK7h/dino-reichmuth-A5r-CN8626-Ck-unsplash.jpg"
      className="w-full object-cover md:h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/JF6R3kg/dariusz-sankowski-3-Oi-YMg-DKJ6k-unsplash.jpg"
      className="w-full object-cover md:h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className='font-custom'>
    <h1 className='text-3xl md:text-4xl font-bold text-center'>Eco-Adventure Experiences</h1>
    <p className='font-bold w-2/3 text-center mx-auto mt-3 mb-3'>Embark on a journey through a verdant rainforest filled with towering trees, vibrant wildlife, and cascading waterfalls. Discover hidden trails, listen to the symphony of nature, and witness the beauty of unspoiled ecosystems.</p>
</div>
    </div>

    <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5'>

   
    {/* {
        newData.map(daattaa => <Card daattaa={daattaa}></Card>)
    } */}
    {
        api.map(datay =>  <Card datay={datay}></Card>)
    }

        <Outlet></Outlet>
    </div>
    </>
  )
}
