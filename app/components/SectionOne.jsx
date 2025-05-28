"use client"
import {useEffect, useState , useRef , useCallback} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function SectionOne () {
  const [openDetails, setOpenDetails] = useState({});
  const detailRefs = useRef({});
 
  const isAnimatingRef = useRef(false);

  // Gestione Overlay e blocco dello scroll
  useEffect(() => {
    const anyOpen = Object.values(openDetails).some((val) => val === true);
    if (anyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openDetails]);
   // Regola globale per l'overflow-x
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
    };
  }, []);

 // Animazione schede a comparsa 
  
 useEffect(()=> {
  const schede = document.querySelectorAll(".scheda");
  // Utilizziamo gsap.matchMedia per definire animazioni diverse a seconda della larghezza
  const mm = gsap.matchMedia();
  // Animazione per schermi Desktop (min-width: 769px)
  mm.add("(min-width: 769px)", () => {
      schede.forEach((element,index)=>{
          const startAnimation = index % 2 === 0 ? "top 40%" : "top 60%";
          gsap.to(element, { 
            scrollTrigger:{
              trigger: element,
              start: startAnimation,
          },
          x:"100%",
          duration: 0.9 + index * 0.4,
      });
      
    });
  });
//PER MOBILE 

mm.add("(max-width: 768px)", () => {
  schede.forEach((e, index) => {
    const xValueMobile = index % 2 === 0 ? "100vw" : "-100vw"; // Differenzia valori di x per mobile
    const startAnimationMobile = index === 0 || index === 1 ? "top 60%" : "top 80%";
    gsap.to( e , {
      scrollTrigger: {
          trigger: e,
          start: startAnimationMobile,           
        },                                                                                 
      x: xValueMobile,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
      duration: 1.5 + index * 0.5, // Durata regolata per mobile
    });
  });
});

// Cleanup delle animazioni al dismount del componente
return () => {
  mm.revert(); // Rimuove le animazioni legate alla media query
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Pulisce i trigger globali
};
}, []);

  //Espansione della card
  const toggleDetail = useCallback(
    (id) => {
      if (isAnimatingRef.current) return;
      const isOpen = openDetails[id];
      const detailEl = detailRefs.current[id];
      if (!detailEl) return;

      if (isOpen) {
        // Chiudiamo il pannello
        isAnimatingRef.current = true;
        gsap.to(detailEl, {
          duration: 0.5,
          transform: "translateX(100%)",
          ease: "power2.inOut",
          onComplete: () => {
            setOpenDetails((prev) => ({ ...prev, [id]: false }));
            isAnimatingRef.current = false;
          },
        });
      } else {
        // Apriamo il pannello (slide in a destra, fino a 0)
        isAnimatingRef.current = true;
        gsap.to(detailEl, {
          duration: 0.5,
          transform: "translateX(0%)",
          ease: "power2.inOut",
          onComplete: () => {
            setOpenDetails((prev) => ({ ...prev, [id]: true }));
            isAnimatingRef.current = false;
          },
        });
      }
    },
    [openDetails]
  );
  // Gestione click sull'overlay: se esiste una scheda espansa, la "chiude"
  const handleOverlayClick = useCallback(() => {
    if (isAnimatingRef.current) return;
    Object.keys(openDetails).forEach((id) => {
      if (openDetails[id]) {
        toggleDetail(id);
      }
    });
  }, [openDetails, toggleDetail]);

return (
    <>
      {/* Overlay: appare se almeno un pannello dettaglio è aperto */}
      {Object.values(openDetails).some((v) => v) && (
        <div
          className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={handleOverlayClick}
        ></div>
      )}

        <div className="w-full h-screen overflow-x-hidden">

          <div className="h-full sm:w-2/5 bg-[#571212]">

             <div className="p-5">
                <h1 className="text-start">Ambiti</h1>
            </div>


            <div className="scheda bg-black relative -left-full rounded-md sm:h-1/4 sm:-left-full ">
                      <div className="sm:p-3 cursor-pointer"
                      onClick={() => toggleDetail("1")}>
                        <h2 className="mt-5">Ambito1</h2>
                        <h3 className="mt-5">Lorem, ipsum dolor sit aerum reiciendis ea ut ipsa iusto, quasi vel reprehenderit quod impedit? Aliquam, aut.</h3>
                      </div>  
            </div>
           
            <div className="scheda bg-red-950 relative -left-full rounded-md sm:h-1/4 sm:-left-full">
                <div className="sm:p-3 cursor-pointer"
                    onClick={() => toggleDetail("2")}>
                  <h2 className="mt-5">Ambito2</h2>
                  <h3 className="mt-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minima quas voluptatem rerum reiciendis ea ut ipsa iusto, quasi vel reprehenderit quod impedit? Aliquam, aut.</h3>
                </div>
            </div> 
            
          </div>
                 
        {/* Pannello dettaglio per Ambito1 */}
          <div
            ref={(el) => (detailRefs.current["1"] = el)}
            className="detail-panel m-0 fixed top-0 right-0 bg-white shadow-lg z-20 cursor-pointer"
            onClick={() => toggleDetail("1")}
            style={{ width: "60%", height: "100%", transform: "translateX(105%)" }}
          >
            <h2>Dettaglio Ambito1</h2>
            <p>Approfondimenti sul contenuto di Ambito1. Puoi inserire qui ulteriori dettagli, immagini e informazioni.</p>
          </div>

          {/* Pannello dettaglio per Ambito2 */}
          <div
            ref={(el) => (detailRefs.current["2"] = el)}
            className="detail-panel m-0 fixed top-0 right-0 bg-white shadow-lg z-20 cursor-pointer"
            onClick={() => toggleDetail("2")}
            style={{ width: "60%", height: "100%", transform: "translateX(105%)" }}
          >
            <h2>Dettaglio Ambito2</h2>
            <p>Approfondimenti sul contenuto di Ambito2. Qui puoi mostrare contenuti esclusivi, video o ulteriori info.</p>
          </div>
        </div>

    </>
);
}