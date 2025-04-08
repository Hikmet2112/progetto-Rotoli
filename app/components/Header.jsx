'use client'

import { useEffect, useState } from "react";

export default function Header() {
  const [animate, setAnimate] = useState(false);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setOpacity(true), 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="absolute w-full h-screen  bg-[url('/img/giustizia.jpg')] bg-cover bg-center  md:bg-[url('/img/Header_img.avif')] bg-no-repeat  md:bg-cover lg:bg-center">
        <div className="absolute inset-0 bg-[#01102d] opacity-20  h-screen"></div>
        <div className={` backdrop-blur-2xl bg-[#011F5B] min-w-[180px] shadow-xl w-3/5 h-3/5  lg:h-screen lg:w-2/5 lg:top-0 opacity-75 grid grid-flow-row grid-cols-3 grid-rows-3  absolute top-10 transition-transform duration-700 ${animate ? '-translate-x-0' : '-translate-x-full'}`}
        >
          <div className="relative top-10 lg:absolute  lg:top-32 ml-1 backdrop-blur-3xl ">
            <h1 className={` ml-4 row-start-1 p-1 text-1xl first-letter:text-xl first-letter:lg:text-7xl md:row-start-2 text-center col-start-1 lg:text-6xl transition-opacity  duration-700 ${opacity ? 'opacity-100' : 'opacity-0'} `} >AVVOCATO</h1>
            <h2 className={` ml-4 row-start-2 p-1 text-5xl first-letter:text-6xl first-letter:lg:text-7xl md:row-start-4 text-center col-start-1 lg:text-6xl transition-opacity  duration-700 ${opacity ? 'opacity-100' : 'opacity-0'}`}>ROTOLI</h2>

          </div>

        </div>

      </div>

      <div className="z-10 absolute top-0 grid  lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-4  ">



      </div>
    </>
  );
}
