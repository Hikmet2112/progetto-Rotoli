'use client';

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Registra ScrollTrigger
ScrollTrigger.defaults({ markers: false });

export default function Header() {
  const [animate, setAnimate] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [opacity2, setOpacity2] = useState(false);

  useEffect(() => {
    // Utilizza GSAP Context per evitare conflitti
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animatedDiv",
        { x: "-100%" }, // Partenza da sinistra
        { 
          x: "0%", 
          duration: 1, 
          scrollTrigger: {
            trigger: ".animatedDiv",
            start: "top center",
            end: "center center",
            scrub: true,
            markers: false 
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup del context
  }, []);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setOpacity(true), 600);
    const timer2 = setTimeout(() => setOpacity2(true), 900);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="bg-[url('/img/giustizia.jpg')] md:bg-[url('/img/Header_img.avif')] relative w-full h-screen bg-cover bg-bottom bg-no-repeat md:bg-cover md:bg-center">
       
        <div className="relative inset-0 bg-[#01102d] opacity-30 z-10 h-screen"></div>

       
        <div className={`animatedDiv z-20 bg-[#011F5B] shadow-lg rounded-sm flex items-center justify-center min-w-[180px] w-4/5 h-3/5 opacity-80 absolute top-16 left-0  transition-transform duration-1000 p-6 sm:h-4/5 lg:h-screen lg:w-2/5  lg:top-0 ${animate ? "-translate-x-0" : "-translate-x-full"}`}>
          <div className="text-center grid grid-flow-row">
            <h1 className={`first-letter:text-4xl first-letter:lg:text-6xl text-3xl lg:text-5xl transition-opacity duration-700 font-bold  ${opacity ? "opacity-100" : "opacity-0"}`}>A  V  V  O  C  A  T  O</h1>
            <h2 className={`tracking-tighter first-letter:lg:text-6xl first-letter:text-4xl text-3xl lg:text-5xl transition-opacity duration-700  ${opacity ? "opacity-100" : "opacity-0"}`}>D O M E N I C O</h2>
            <h3 className={` first-letter:text-6xl text-5xl lg:text-5xl transition-opacity duration-700 font-bold ${opacity ? "opacity-100" : "opacity-0"}`}>R O T O L I</h3>
            <p className={`tracking-tighter text-3xl leading-normal text-left mt-4 text-white duration-700 text-pretty ${opacity2 ? "opacity-100" : "opacity-0"}`}>
             Quando la cura diventa errore, lottiamo al tuo fianco per la giustizia che meriti . 
            </p>
          
          </div>
        </div>

      </div>




    </>
  );
}
