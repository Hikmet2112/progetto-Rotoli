"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra il plugin e fornisci i default per i marker
gsap.registerPlugin(ScrollTrigger);


export default function SectionOne() {
  const [openDetails, setOpenDetails] = useState({});
  const detailRefs = useRef({});
  const isAnimatingRef = useRef(false);

  // Blocca lo scroll del body quando un pannello è aperto
  useEffect(() => {
    const anyOpen = Object.values(openDetails).some((val) => val === true);
    document.body.style.overflow = anyOpen ? "hidden" : "";
  }, [openDetails]);

  // Imposta overflow-x hidden globalmente per html e body (per essere certi)
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
    };
  }, []);

  // Animazione schede a comparsa
  useEffect(() => {
    const schede = document.querySelectorAll(".scheda");
    const mm = gsap.matchMedia();
    // Desktop: (min-width: 769px)
    mm.add("(min-width: 769px)", () => {
      schede.forEach((element, index) => {
        const startAnimation = index % 2 === 0 ? "top 40%" : "top 60%";
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: startAnimation,
       
          },
          x: "100%",
          duration: 0.9 + index * 0.4,
        });
      });
    });
    // Mobile: (max-width: 768px)
    mm.add("(max-width: 768px)", () => {
      schede.forEach((element, index) => {
        const xValueMobile = index % 2 === 0 ? "100vw" : "-100vw";
        const startAnimationMobile = index === 0 || index === 1 ? "top 60%" : "top 80%";
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: startAnimationMobile,           
          },
          x: xValueMobile,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
          duration: 1.5 + index * 0.5,
        });
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // Funzione per il toggle del pannello dettaglio
  const toggleDetail = useCallback(
    (id) => {
      if (isAnimatingRef.current) return;
      const isOpen = openDetails[id];
      const detailEl = detailRefs.current[id];
      if (!detailEl) return;

      if (isOpen) {
        isAnimatingRef.current = true;
        // Chiusura: sposta fuori con un offset extra (calc(100% + 2px))
        gsap.to(detailEl, {
          duration: 0.5,
          opacity: 0,
          transform: "translateX(calc(100% + 2px))",
          ease: "power2.inOut",
          onComplete: () => {
            setOpenDetails((prev) => ({ ...prev, [id]: false }));
            isAnimatingRef.current = false;
          },
        });
      } else {
        isAnimatingRef.current = true;
        gsap.set(detailEl, { opacity: 0 });
        gsap.to(detailEl, {
          duration: 0.5,
          opacity: 1,
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
  // Overlay per chiudere eventuali pannelli aperti
  const handleOverlayClick = useCallback(() => {
    if (isAnimatingRef.current) return;
    Object.keys(openDetails).forEach((id) => {
      if (openDetails[id]) toggleDetail(id);
    });
  }, [openDetails, toggleDetail]);

  return (
    <>
      {/* Overlay: appare se almeno un pannello è aperto */}
      {Object.values(openDetails).some((v) => v) && (
        <div
          className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={handleOverlayClick}
        ></div>
      )}

      <div className="w-full  h-screen overflow-x-hidden">
        <div className="h-full sm:w-2/5  bg-slate-600">
          <div className="p-5">
            <h1 className="text-start">Ambiti</h1>
          </div>
          <div className="scheda sm:mt-5 relative place-items-center -left-full rounded-md  sm:h-1/5 sm:-left-full">
            <div
              className="sm:p-3 cursor-pointer h-full text-center"
              onClick={() => toggleDetail("1")}
            >
              <h2 className="mt-5 text-2xl">Ambito1</h2>
              <img width={'100%'} src="/img/frame1.svg" alt="freccia" />
            </div>
          </div>
          <div className="scheda sm:mt-5 bg-red-950 relative -left-full rounded-md sm:h-1/5 sm:-left-full">
            <div
              className="sm:p-3 cursor-pointer h-full text-center"
              onClick={() => toggleDetail("2")}
            >
              <h2 className="mt-5">Ambito2</h2>
            </div>
          </div>
        </div>

        {/* Pannello dettaglio per Ambito1 */}
        <div
          ref={(el) => (detailRefs.current["1"] = el)}
          className="detail-panel m-0 fixed top-0 right-0 bg-white shadow-lg z-20 cursor-pointer p-4"
          onClick={() => toggleDetail("1")}
          style={{
            width: "60%",
            height: "100%",
            overflow:"hidden",
            transform: "translateX(calc(100% + 2px))",
            transformOrigin: "right center",
            willChange: "transform",
          }}
        >
          <h2>Dettaglio Ambito1</h2>
          <p>
            Approfondimenti sul contenuto di Ambito1. Puoi inserire qui ulteriori
            dettagli, immagini e informazioni.
          </p>
        </div>

        {/* Pannello dettaglio per Ambito2 */}
        <div
          ref={(el) => (detailRefs.current["2"] = el)}
          className="detail-panel m-0 fixed top-0 right-0 bg-white shadow-lg z-20 cursor-pointer p-4"
          onClick={() => toggleDetail("2")}
          style={{
            width: "60%",
            height: "100%",
            overflow:"hidden",
            transform: "translateX(calc(100% + 2px))",
            transformOrigin: "right center",
            willChange: "transform",
          }}
        >
          <h2>Dettaglio Ambito2</h2>
          <p>
            Approfondimenti sul contenuto di Ambito2. Qui puoi mostrare contenuti
            esclusivi, video o ulteriori informazioni.
          </p>
        </div>
      </div>
    </>
  );
}
