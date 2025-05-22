"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {useState,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);


export default function Footer() {
  // CONF useState
  useEffect(() => {
    gsap.matchMedia().add("(min-width:768px)",()=>{
      const icons = document.querySelectorAll(".icon");
      const divBio = document.querySelector(".div-bio");
  
      icons.forEach((icon, index) => {
        const profiliSocial = icon.querySelector("p");
  
        // Timeline per animazione di ENTRATA
        const tlEnter = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-container",
            start: "top 25%", // L'animazione inizia quando la parte superiore del contenitore entra nella viewport
            end:"center 40%",
            
           toggleActions: "play reset play reverse", // Solo "play" per lo scroll verso il basso
           scrube:false,
           markers:true,
            
          },
        });
        tlEnter.fromTo(
          icon,
          { x: 0, y: 0, opacity: 1 },
          {
            x: `${index * -19.8}vw`,
            y: `${index * 15}vh`,
            opacity: 1,
            ease: "power1.out",
            duration: 1,
          }
        );
  
        tlEnter.fromTo(
          profiliSocial,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            duration: 0.4,
          }
        );
          // Animazione aggiuntiva: Comparsa del div con l'immagine
      tlEnter.fromTo(
        divBio,
        { opacity: 0, visibility: "hidden", y: 50 },
        { opacity: 1, visibility: "visible", y: 0, duration: 0.5, ease: "power1.out" }
      );
    });
  });
}, []);
 
    return (
      <>
        <div className='footer-container  grid grid-cols-5 grid-rows-5 h-screen z-20 bottom-0  w-[100%] items-center  '>    

                <div className=" icon flex items-center justify-center lg:flex lg:flex-row  ">
                    <FaFacebook className='h-max w-max min-h-8 mx-2 ' /> 
                    <p className='hidden lg:block px-3'>NomeProfilo</p>
                </div>
                <div className="icon flex items-center justify-center  lg:flex lg:flex-row  ">
                    <FaTwitter className='h-max w-max min-h-8 mx-2'/>
                    <p className='hidden lg:block px-3'>NomeProfilo</p>
                </div>
                <div className="icon flex items-center justify-center  lg:flex lg:flex-row ">
                    <FaInstagram className='h-max w-max min-h-8 mx-2' />
                   <p className='hidden lg:block px-3'>NomeProfilo</p>
                </div>
                <div className="icon flex items-center justify-center  lg:flex lg:flex-row ">
                    <FaLinkedin className='h-max w-max min-h-8 mx-2' />
                    <p className='hidden lg:block px-3'>NomeProfilo</p>
                </div>
                <div className="icon flex items-center justify-center  lg:flex lg:flex-row ">
                   <FaWhatsapp className='h-max w-max min-h-8 mx-2'/> 
                   <p className='hidden lg:block px-3'>NomeProfilo</p>  
                </div>      
               
        </div>
        </>
    )
}
