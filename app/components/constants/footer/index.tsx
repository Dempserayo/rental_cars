import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto flex flex-col py-40 gap-20 items-center  text-neutral-800 text-xs font-thin">
      
      <section className="w-full max-w-7xl flex flex-col ">
        <>
          <Image src="/images/logo/logo.svg" alt="Home background" width={100} height={100}/>
          
          <div className="flex flex-col py-10 gap-4">
            <>
              <div className="flex flex-row justify-between items-end ">
              
                    <div className="flex flex-col ">
                  <p>Empresa</p>
                  
                  <span className="flex flex-row gap-4">
                    <p>Políticas de Cancelación</p>
                    <p>Políticas de Privacidad</p>
                    <p>Términos y Condiciones</p>
          
                  </span>
                </div>

                <span>
                  <p>Mapa del Sitio</p>
                </span>
              
              </div>
            </>
            <>
              <div className="flex flex-row justify-between items-end">
              
                <div className="flex flex-col ">
                  <p>Contactanos</p>
                  
                  <span className="flex flex-row gap-4">
                    <p>Outlet Rental Cars</p>
                    <p>+57 (601) 607-8917</p>
                    <p>78 SW 7th St Suite 500, Miami, FL 33130</p>
                  </span>
                </div>

                <span>
                  <p>© Copyright 2026. Todos los derechos reservados.</p>
                </span>
              
              </div>
            </>
      
          </div>
        </>
      </section>

      <section className="w-full h-40 bg-[#00e55e]">
        
      </section>
    </footer>
  );
}
