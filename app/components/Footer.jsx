"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    useEffect(()=>{
      
        const icons = document.querySelectorAll(".icon");
        icons.forEach((icon, index) => {
            const profiliSocial = icon.querySelector("p");
           // Creiamo una timeline per unire le due animazioni
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-container", // Trigger per l'animazione
          start: "top 10%", // Punto d'inizio dell'animazione
          end: "bottom 0%", // Punto di fine dell'animazione
        
        },
      });

      // Prima animazione: movimento dell'icona
      tl.fromTo(
        icon,
        { x: 0, y: 0, opacity: 1 }, // Stato iniziale
        {
          x: `${index * -19.8}vw`, // Movimento orizzontale
          y: `${index * 15}vh`, // Movimento verticale
          opacity: 1,
          ease: "power1.out", // Transizione morbida
          duration: 2, // Durata della prima animazione
        }
      );

      // Seconda animazione: comparsa di <p> al termine del movimento
      tl.fromTo(
        profiliSocial,
        { opacity: 0, y: 10 }, // Stato iniziale di <p>
        {
          opacity: 1,
          y: 0,
          ease: "power1.out", // Transizione morbida
          duration: 0.5, // Durata della comparsa
        },
        "+=0" // Inizia subito dopo la precedente animazione
      );



       // Timeline per l'animazione di uscita (ritorno alla posizione originale)
       const tlExit = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-container",
          start: "bottom 0%",
          end: "bottom -30%",
          toggleActions: "play reverse play reverse", // Controllo delle azioni
        },
      });

      // tlExit.fromTo(
      //   profiliSocial,
      //   { opacity: 1 },
      //   {
      //     opacity: 0,
      //     ease: "power1.in",
      //     duration: 0.5,
      //   }
      // );

      // tlExit.fromTo(
      //   icon,
      //   {
      //     x: `${index * 19.8}vw`,
      //     y: `${index * -15}vh`,
      //     opacity: 1,
      //   },
      //   {
      //     x: 0,
      //     y: 0,
      //     opacity: 1,
      //     ease: "power1.in",
      //     duration: 2,
      //   }
      // );

    });
  }, []);
    return (
      <>
        <div className='footer-container  grid grid-cols-5 grid-rows-5 h-screen z-20 bottom-0  w-[100%] bg-[#011F5B] py-9'>    

                <div className="icon items-center justify-center flex flex-row w-[100%]">
                    <FaFacebook className='h-max w-max min-h-8 mx-2' /> 
                    <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon items-center justify-center flex flex-row w-[100%]">
                    <FaTwitter className='h-max w-max min-h-8 mx-2'/>
                    <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon items-center justify-center flex flex-row w-[100%]">
                    <FaInstagram className='h-max w-max min-h-8 mx-2' />
                   <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon items-center justify-center flex flex-row w-[100%]">
                    <FaLinkedin className='h-max w-max min-h-8 mx-2' />
                    <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon items-center justify-center flex flex-row w-[100%]">
                   <FaWhatsapp className='h-max w-max min-h-8 mx-2'/> 
                   <p className='px-3'>NomeProfilo</p>  
                </div>
        </div>
        </>
    )
}
