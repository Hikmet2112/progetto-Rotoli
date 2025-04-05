"use client";

import Link from 'next/link';
import styles from './Navbar.module.css'; 
import { useState, useEffect ,useRef } from 'react'
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); //menu tendina
    const [scrolled, setScrolled] = useState(false);
    const prevScrollPos = useRef(window.scrollY); //inizializz sicura
    
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        console.log("Scroll attuale:", currentScrollPos, " | Precedente:", prevScrollPos.current);

      if (currentScrollPos < prevScrollPos.current){
        setScrolled(false);
      } else if (currentScrollPos > prevScrollPos.current && currentScrollPos > 50 ){
        setScrolled(true);
      }

      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
          className={`gap-2 w-full z-10 ${styles.navbar} ${scrolled ? styles.scrolled : ''  }`}
          >
      <div className='p-2'>
        <Link href="/">Logo</Link>
      </div>
      <div className=' hidden md:flex space-x-10'>
      <div>
       <Link href="/" className='pl-3'>Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/services">Services</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
      <button> qui </button>
      </div>
      
       {/*Menu mobile*/}
       
          <button 
            className={`md:hidden fixed top-0 right-2 z-10 text-3xl transition-opacity duration-300`}  
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✖' : '☰'}
          </button>
       <div className={`md:hidden grid grid-rows-10 fixed top-0 rigth-0 w-full h-full p-5 text-slate-800 bg-slate-50 transform transition-transform duration-500 ${menuOpen ? 'translate-x-1/4 opacity-100' : 'translate-x-full opacity-0'}`}>
          <Link href="/" className="p-2 row-start-3">Home</Link>
          <Link href="/about" className="p-2 row-start-4">About</Link>
          <Link href="/services" className="p-2 row-start-5">Services</Link>
          <Link href="/contact" className="p-2 row-start-6">Contact</Link>
        </div>
    </div>
  );
};

export default Navbar;
