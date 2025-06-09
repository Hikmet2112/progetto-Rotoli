"use client"
import { FaFacebook, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';





gsap.registerPlugin(ScrollTrigger);


export default function Footer() {
  // CONF useState
  useEffect(() => {
    gsap.matchMedia().add("(min-width:768px)", () => {
      const icons = document.querySelectorAll(".icon");
      const divBio = document.querySelector(".div-bio");

      icons.forEach((icon, index) => {
        const profiliSocial = icon.querySelector("p");

        // Timeline per animazione di ENTRATA
        const tlEnter = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-container",
            start: "top 25%", // L'animazione inizia quando la parte superiore del contenitore entra nella viewport
            end: "center 40%",

            toggleActions: "play reset play reverse", // Solo "play" per lo scroll verso il basso
            scrube: false,
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

      });
    });
  }, []);

  return (
    

    <footer className='footer-container grid grid-cols-5 grid-rows-5 h-screen z-20 w-[100%] items-end  bg-gradient-to-b from-[#233a6a] to-[#050f21]'>

      <Link href="https://www.facebook.com/domenico.rotoli" className=" icon flex   lg:flex lg:flex-row h-max w-max min-h-8 mx-4 ">

        <FaFacebook className='h-max w-max min-h-8  shadow-inner' />
        <p className='hidden lg:block px-3'>Domenico Rotoli</p>

      </Link>
      <Link href="/about" className=" icon flex   lg:flex lg:flex-row h-max w-max min-h-8 mx-4 ">

        <FaEnvelope className='h-max w-max min-h-8  shadow-inner' />
        <p className='hidden lg:block px-3'>domenicorotoli@example.com</p>

      </Link>
      <Link href="https://www.instagram.com/domenicorotoli/" className=" icon flex   lg:flex lg:flex-row h-max w-max min-h-8 mx-4 ">

        <FaInstagram className='h-max w-max min-h-8  shadow-inner' />
        <p className='hidden lg:block px-3'>domenicorotoli</p>

      </Link>
      <div href="/about" className=" icon flex   lg:flex lg:flex-row h-max w-max min-h-8 mx-4 ">

        <FaWhatsapp className='h-max w-max min-h-8  shadow-inner' />
        <p className='hidden lg:block px-3'> +39 389 788 7196</p>

      </div>

      <Link href="/about" className=" icon flex   lg:flex lg:flex-row h-max w-max min-h-8 mx-4 ">

        < FaLinkedin className='h-max w-max min-h-8  shadow-inner' />
        <p className='hidden lg:block px-3'> Avv. Domenico Rotoli</p>

      </Link>

      <img width={'80%'} src="/img/icona.svg" alt="icona" className='md:hidden rounded-full absolute justify-self-center mb-2  opacity-20' />

      
    </footer>
  )
}
