'use client';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function GoUpButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300); // Mostra il pulsante solo dopo 300px di scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleClick() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button 
            type="button"
            onClick={handleClick}
            className={`fixed bottom-4 right-4 w-9 h-9 text-lg   flex items-center justify-center  transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <FaArrowUp className="animate-bounce shadow-md text-white" />
        </button>
    );
}
