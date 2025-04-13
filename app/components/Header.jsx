'use client'

import { useEffect, useState } from "react";
import gsap from "gsap";



export default function Header() {
  const [animate, setAnimate] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [opacity2, setOpacity2] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".animatedDiv",
      { x: "-100%" }, // Partenza da destra
      { x: "0%", duration: 1, scrollTrigger: {
          trigger: ".animatedDiv",
          start: "top center",
          end: "center center",
          scrub: true,
        }
      }
    );
  }, []);
  
  

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setOpacity(true), 600);
    const timer2 = setTimeout(() => setOpacity2(true), 900);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="  bg-[url('/img/giustizia.jpg')]  md:bg-[url('/img/Header_img.avif')] relative w-full h-screen  bg-cover bg-bottom bg-no-repeat md:bg-cover md:bg-center ">

        <div className=" relative inset-0 bg-[#01102d] opacity-30 z-10 h-screen"></div>

        <div className={`animatedDiv z-20 bg-[#011F5B] rounded-sm flex items-center justify-center min-w-[180px] w-3/5 h-3/5 opacity-80 absolute top-10 transition-transform duration-1000 p-6  lg:h-screen lg:w-2/5 lg:top-0 ${animate ? '-translate-x-0' : '-translate-x-full'}`}>

          <div className="text-center grid grid-flow-row  ">
            <h1 className={`  first-letter:text-3xl first-letter:lg:text-6xl text-2xl lg:text-5xl transition-opacity duration-700 ${opacity ? 'opacity-100' : 'opacity-0'}`}>AVVOCATO</h1>
            <h2 className={` first-letter:text-6xl text-5xl lg:text-5xl transition-opacity duration-700 ${opacity ? 'opacity-100' : 'opacity-0'}`}>ROTOLI</h2>
            <p className={`leading-normal text-left mt-4 text-white duration-700  text-pretty text-lg ${opacity2 ? 'opacity-100' : 'opacity-0'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga numquam unde et repellat, laboriosam quasi illo modi, rem praesentium, molestias nostrum aut. Autem adipisci odio omnis blanditiis dolorem nisi?
            </p>
          </div>
        </div>

      </div>




    </>
  );
}
