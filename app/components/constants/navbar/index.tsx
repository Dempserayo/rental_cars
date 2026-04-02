import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiSettings, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col justify-center items-center gap-4">      
      {/* section para anuncios o mostrar alguna oferta en modo de carrousel */}
      {/* <section className="w-full h-10 bg-neutral-100">
      </section> */}

      {/* Navgacion principal | navbar  */}
      <section className="w-full max-w-7xl h-32 flex flex-row items-center justify-between  text-neutral-800 font-thin">
          <section className="w-auto text-xs flex flex-row justify-center items-center gap-1">
             <Image src="/images/logo/logo.svg" alt="Home background" width={100} height={100}/>
          </section>

          <section className="w-auto text-sm flex flex-row ">
              <button className="cursor-pointer hover:text-indigo-500 transition-all duration-500 hover:bg-neutral-100 p-2">
                <FiSearch />
              </button>
        
              <Link href='/users' className="cursor-pointer hover:text-indigo-500 transition-all duration-500 hover:bg-neutral-100 p-2">
                <FiUser />
              </Link>
              <button className="cursor-pointer hover:text-indigo-500 transition-all duration-500 hover:bg-neutral-100 p-2">
                <FiSettings />
              </button>
          </section>
      </section>
    </nav>
  );
}