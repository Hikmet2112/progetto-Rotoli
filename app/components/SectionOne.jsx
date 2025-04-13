"use client"
import {useEffect, useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SectionOne () {
useEffect(()=> {
    const schede = document.querySelectorAll(".scheda");
        schede.forEach((element,index)=>{
            //EFFETTO SCHEDE A COMPARSA
            const startAnimation = index % 2 === 0 ? "top 40%" : "top 60%";
            gsap.to( element , {
                scrollTrigger:{
                   trigger: element,
                  start: startAnimation,
                },
                x:"100%",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
                duration: 0.9 + index * 0.4,
            });
        });
//PER MOBILE 
const mm = gsap.matchMedia();
  mm.add("(max-width: 768px)", () => {
    schede.forEach((element, index) => {
      const xValueMobile = index % 2 === 0 ? "100vw" : "-100vw"; // Differenzia valori di x per mobile
      let startAnimationMobile = index === 0 || index === 1 ? "top 80%" : "bottom bottom";
      gsap.to( element , {
        scrollTrigger: {
            trigger: element,
            start: startAnimationMobile,           
          },                                                                                 
        x: xValueMobile,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
        duration: 1.5 + index * 0.5, // Durata regolata per mobile
      });
    });
});
 // Cleanup delle animazioni al dismount del componente
 return () => {
    mm.revert(); // Rimuove le animazioni legate alla media query
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Pulisce i trigger globali
  };
}, []);

return (
    <>
        <div className="grid grid-cols-1 h-screen sm:grid-cols-2 sm:grid-rows-4 overflow-hidden">
            <div className="col-span-1 sm:col-span-1 row-span-1 p-5 bg-[#011F5B]">
                <h1 className=" text-start">Ambiti</h1>
            </div>
            <div className=" row-start-2  "> 
               <div className="scheda sm:row-start-3 sm:col-start-1  relative -left-full sm:h-1/2 sm:-left-full rounded-md bg-cyan-950">  
                <h2 className="text-center">Ambito1</h2>
                <h3 className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima quas voluptatem rerum reiciendis ea ut ipsa iusto, quasi vel reprehenderit quod impedit? Aliquam, aut.</h3>
               </div>
            </div>
            <div className=" row-start-3"> 
               <div className="scheda relative -right-full sm:h-1/2 sm:-left-full rounded-md bg-cyan-950">
                <h2 className="text-center">Ambito2</h2>
                <h3 className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima quas voluptatem rerum reiciendis ea ut ipsa iusto, quasi vel reprehenderit quod impedit? Aliquam, aut.</h3>
               </div>
            </div>
          
              <div className="col-start-2 pt-20 relative left-1/3">
              <Image src="/img/persona.png" width={300} height={500} alt='fotoProfilo'/>
              </div>           
                <p className="text-left sm:px-10 p-5 row-start-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quod reprehenderit sit natus maxime odio magnam inventore quae! Dicta, aliquid!</p>
            
                    
        </div>

    </>
);
}