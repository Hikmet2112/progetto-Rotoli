'use client'

import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bgImg = [
  "/image/autumn.jpg",
  "/image/italy.jpg",
  "/image/sunset.jpg",
];


export default function Home() {
  const sectionRef = useRef([]);
 

  useEffect(() => {

   // 🔥 Seleziona tutti gli elementi <section> e applica le animazioni

   gsap.utils.toArray(".section").forEach((section, i) => {
    // Primo ScrollTrigger: Mantiene fissa l'immagine della sezione
    ScrollTrigger.create({
      trigger: section,
      start: "top top", // La sezione si blocca quando entra in viewport
      scrub: 1,
      pin: true, // 🔥 Fissa la sezione fino a quando la nuova la sovrappone
      pinSpacing: false // 🚀 Rimuove lo spazio extra che potrebbe causare problemi
    });

    }
    );
    },[]);

  return (
    <div className="w-screen overflow-hidden">
        {bgImg.map(( bg , index) => (
        <section
          key={index}
          ref={(el) => (sectionRef.current[index] = el)}
          className="section relative h-screen flex items-center justify-center text-white"
        >
           <Image 
           src={bg}
           alt={`Background ${index + 1}`}
           layout="fill"
            objectFit="cover"
            className="absolute inset-0" />
           <div className="relative z-10 bg-slate-900 p-6 rounded-md">
            Sezione {index + 1}
            </div>
        </section>
      ))}

    </div>
  );
}
