'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";


gsap.registerPlugin(ScrollTrigger);
const sectionsData = [
  { id: 1, component: <Header /> },
  { id: 2,  component: <SectionOne /> },
  { id: 3,  component: <Footer /> },
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
    <div className="m'0">
      <Navbar/>
        {sectionsData.map(({ id, component }, index)=> (
        <section
          key={id}
          ref={(el) => (sectionRef.current[index] = el)}
          className="section"
        >
         
         <div className=" relative z-10 bg-[#011F5B]">
        
          {component}
          </div>
        </section>
      ))}

    </div>
  );
}
