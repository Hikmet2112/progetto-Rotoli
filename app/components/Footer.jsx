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
        <div className='footer-container  grid grid-cols-5 grid-rows-5 h-screen z-20 bottom-0  w-[100%] bg-[#011F5B]'>    

                <div className=" icon  items-center justify-center flex flex-row w-[100%]">
                    <FaFacebook className='h-max w-max min-h-8 mx-2' /> 
                    <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon items-center justify-center flex flex-row w-[100%]">
                    <FaTwitter className='h-max w-max min-h-8 mx-2'/>
                    <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon icon1 items-center justify-center flex flex-row w-[100%]">
                    <FaInstagram className='h-max w-max min-h-8 mx-2' />
                   <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon items-center justify-center flex flex-row w-[100%]">
                    <FaLinkedin className='h-max w-max min-h-8 mx-2' />
                    <p className='px-3'>NomeProfilo</p>
                </div>
                <div className="icon  items-center justify-center flex flex-row w-[100%]">
                   <FaWhatsapp className='h-max w-max min-h-8 mx-2'/> 
                   <p className='px-3'>NomeProfilo</p>  
                </div>

                <div className=' div-bio relative col-start-3 col-span-3 row-span-3 row-start-2 overflow-x-hidden'>
                    {/* <div className='div-bio  absolute inset-0 bg-[url("/img/library.jpg")] bg-cover blur-sm col-start-3 col-span-3 row-span-3 row-start-2'></div>
                    <div className='div-bio z-20 relative flex flex-col items-center justify-center h-full w-ful'>
                    <div className="div-bio rounded-full h-[350px] w-[350px] overflow-hidden">
                        <Image className=' bg-cover' src="/img/persona.png" width={400} height={400} alt='fotoProfilo'/>
                    </div>
                    <div className='bg-white'>
                        <p className="text-left sm:px-10 p-5 row-start-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quod reprehenderit sit natus maxime odio magnam inventore quae! Dicta, aliquid!</p>
                    </div>           

                    </div> */}
                </div>
                    
               
        </div>
        </>
    )
}
