import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto flex flex-col py-40 gap-20 items-center  text-neutral-800 text-[10px] md:text-xs font-thin">
      <>
        <section className="w-full max-w-7xl flex flex-col px-10 py-20 md:px-20 md:py-20">
            <Image src="/images/logo/logo.svg" alt="Home background" width={100} height={100}/>
            
            <div className="flex flex-col md:justify-between py-10 gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end ">
                  <div className="flex flex-col ">
                    <span className="flex flex-col sm:flex-row sm:gap-4">
                      <p>Políticas de Cancelación</p>
                      <p>Políticas de Privacidad</p>
                      <p>Términos y Condiciones</p>
            
                    </span>
                  </div>
                  <p className="hidden lg:flex">Mapa del Sitio</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                  <div className="flex flex-col ">
                    
                    <span className="flex flex-col sm:flex-row sm:gap-4">
                      <p>Outlet Rental Cars</p>
                      <p>+57 (601) 607-8917</p>
                      <p>78 SW 7th St Suite 500, Miami, FL 33130</p>
                    </span>
                  </div>
                  <p className="hidden lg:flex">© Copyright 2026. Todos los derechos reservados.</p>
                </div>
            </div>
        
        </section>
      </>
      <>
        <section className="w-full h-40 bg-[#00e55e]">
        </section>
      </>
    </footer>
  );
}
