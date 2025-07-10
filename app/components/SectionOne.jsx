import React from 'react';

const SectionOne = () => {
  return (

    <div className="flex flex-col md:flex-row h-screen w-full bg-[url(/img/sfondo-mala.jpg)]   bg-cover bg-center">
     
      {/* Sezione Malasanità */}
      <div className=" flex-1 flex justify-center items-center px-6 md:p-10 text-center text-white min-h-[50vh] md:min-h-0
">
        <div className="max-w-md md:max-w-xl bg-gradient-to-b from-[#233a6a] to-[#212121] backdrop-blur-sm p-2 pb-4  rounded-md">
          <h2 className=" text-3xl md:text-5xl mb-4 md:mb-5 font-bold">Malasanità: Tutela i Tuoi Diritti</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-8 ">
            Assistenza legale qualificata per casi di malasanità,
            garantiamo supporto domiciliare a chi ha subito danni a causa di errori medici,
            diagnosi tardive o negligenze sanitarie. 
          </p>
         
        </div>
      </div>

      

      {/* Sezione Previdenza */}
      <div className="pb-12   flex-1 flex justify-center items-center px-6 md:p-10 text-center text-white  bg-cover bg-center min-h-[50vh] md:min-h-0">
        <div className="max-w-md md:max-w-xl bg-gradient-to-b from-[#233a6a] to-[#212121]  rounded-sm p-2 pb-4 backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl mb-2 md:mb-5 font-bold">Previdenza: Pianifica il Tuo Futuro con Sicurezza</h2>
          <p className="text-base md:text-lg leading-relaxed mb-2 md:mb-8">
             aiutamo i clienti a
            navigare le complessità delle pensioni, delle invalidità e delle
            questioni legate alla sicurezza sociale.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SectionOne;