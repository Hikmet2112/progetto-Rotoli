'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // menu tendina
  const [scrolled, setScrolled] = useState(false);
  const prevScrollPos = useRef(0); // Inizializza con 0 per evitare accesso a window

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Blocca lo scroll
    } else {
      document.body.style.overflow = ''; // Ripristina lo scroll
    }

    return () => {
      document.body.style.overflow = ''; // Ripristina lo scroll quando il componente viene smontato
    };
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      prevScrollPos.current = window.scrollY; // Imposta il valore iniziale

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
    // Controlla se il click è avvenuto fuori dalla navbar
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
    <div className={`grid grid-flow-col  w-full z-20 ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
   

      <div className="hidden md:grid w-full grid-cols-8  p-2 gap-2 ">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="text-white text-center ">
            <FaHome size={30} />
            
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href="/about" className="text-white text-center ">
            <FaInfoCircle size={30} />
            
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href="/services" className="text-white text-center ">
            <FaServicestack size={30} />
            
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href="/contact" className="text-white text-center ">
            <FaEnvelope size={30} />
            
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
         
        </div>
      
      </div>


      {/* Menu mobile */}
      <button
        className={` md:hidden fixed top-0 right-2 z-10 text-3xl transition-opacity duration-300`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>
      <div className={`md:hidden grid grid-rows-10 fixed top-0 right-0 w-[80%] h-full p-5 text-slate-800 bg-slate-50 transform transition-all duration-700 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <Link href="/" className="p-2 row-start-3"> <FaHome size={30} color="red" />Home</Link>
        <Link href="/about" className="p-2 row-start-4"> <FaInfoCircle size={30} color="red" />About</Link>
        <Link href="/services" className="p-2 row-start-5"> <FaServicestack size={30} color="red" />Services</Link>
        <Link href="/contact" className="p-2 row-start-6"> <FaEnvelope size={30} color="red" />Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
