'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import {FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // menu tendina
  const [scrolled, setScrolled] = useState(false);
  const prevScrollPos = useRef(0);
   const savedScrollY = useRef(0);

 useEffect(() => {
  if (menuOpen) {
    // Salva e blocca lo scroll
    savedScrollY.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY.current}px`;
  } else {
    // Ritarda il reset degli stili per attendere il completamento dell'animazione
    const timer = setTimeout(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY.current);
    }, 700); // Assicurati che questo valore corrisponda alla durata dell'animazione
    return () => clearTimeout(timer);
  }
}, [menuOpen]);



  useEffect(() => {
    if (typeof window !== "undefined") {
      prevScrollPos.current = window.scrollY;
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos < prevScrollPos.current) {
          setScrolled(false);
        } else if (currentScrollPos > prevScrollPos.current && currentScrollPos > 50) {
          setScrolled(true);
        }
        prevScrollPos.current = currentScrollPos;
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleOutsideClick = (event) => {
    if (menuOpen && !event.target.closest(`.${styles.navbar}`)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className={`w-screen z-20  ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Navbar per desktop */}
      <div className="hidden md:shadow-lg  md:grid md:w-full md:grid-cols-10 p-2 gap-2 bg-gradient-to-b from-[#233a6a] to-[#1c3059]">
        <img width={'20%'} src="/img/icona.svg" alt="icona" className='rounded-full ' />
        
      </div>

      {/* Bottone per il menu mobile - aumenta il valore z-index (qui z-50) */}
      <button
        className="sm:hidden fixed top-0 right-2 m-2 z-50 text-3xl transition-opacity duration-300 "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Overlay che sfoca il resto della pagina */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-30 transition duration-700"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menù mobile */}
      <div className={`md:hidden grid grid-rows-10 grid-cols-3 fixed top-0 right-0 w-[90%] h-full p-5 
        bg-gradient-to-b from-[#233a6a] to-[#09193a]  duration-700 z-40
        ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
      
        <Link href="/about" className="px-2 row-start-4 flex items-center gap-2">
          <FaInfoCircle size={30} color="#D2B896" className="min-w-[30px] min-h-[30px] shadow-inner " /> 
          <span className="text-white">About</span>
        </Link>
        <Link href="/services" className="px-2 row-start-6 flex items-center gap-2">
          <FaServicestack size={30} color="#D2B896" className="min-w-[30px] min-h-[30px] shadow-inner " /> 
          <span className="text-white">Services</span>
        </Link>
        <Link href="/contact" className="p-2 row-start-8 flex items-center gap-2">
          <FaEnvelope size={30} color="#D2B896" className="min-w-[30px] min-h-[30px] shadow-inner " /> 
          <span className="text-white">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
