 'use client'

import {useEffect, useState} from "react";

export default function Header() {
  const [animate, setAnimate] = useState(false);
  const [opacity, setOpacity] = useState(false);

useEffect(()=>{
  setAnimate(true);
  const timer =setTimeout(()=>setOpacity(true),500);
  return () => clearTimeout(timer);
},[]);
  return (
    <>
      <div className=" relative w-full h-screen  bg-[url('/img/giustizia.jpg')] bg-contain bg-top  md:bg-[url('/img/Header_img.avif')] bg-no-repeat  lg:bg-cover lg:bg-center">
       
        <div className=" relative inset-0 bg-[#01102d] opacity-30  h-screen"></div>
        
          <div className={` bg-[#011F5B] min-w-[180px]  w-3/5 h-2/5  lg:h-screen lg:w-2/5 lg:top-0 opacity-60 grid grid-flow-row grid-cols-3 grid-rows-3  absolute top-10 transition-transform duration-700 ${animate ? '-translate-x-0' : '-translate-x-full'}`} >

          <div className="relative top-10 lg:absolute  lg:top-32 ml-1">
            <h1 className={`row-start-1 p-1 text-2xl  md:row-start-2 text-center col-start-1 lg:text-6xl transition-opacity  duration-700 ${opacity ? 'opacity-100': 'opacity-0' } `} >AVVOCATO</h1>
            <h2 className={`row-start-2 p-1 text-5xl md:row-start-4 text-center col-start-1 lg:text-6xl transition-opacity  duration-700 ${opacity ? 'opacity-100': 'opacity-0' }`}>ROTOLI</h2>

          </div>

        </div>

      </div>

      
    </>
  );
}
