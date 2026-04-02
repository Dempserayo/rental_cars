"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiSettings, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex flex-col justify-center items-center gap-4">
      <section className="w-full max-w-7xl h-20 md:h-32 flex flex-row items-center justify-between text-neutral-800 font-thin p-10 xl:p-0">
        <Link href="/home" className="w-auto flex items-center gap-1 cursor-pointer">
          <Image src="/images/logo/logo.svg" alt="Logo" width={100} height={100} />
        </Link>

        {/* Iconos — visible en md+ */}
        <section className="hidden md:flex flex-row text-sm">
          
          <button className="cursor-pointer hover:text-indigo-500 transition-all duration-500 hover:bg-neutral-100 p-2">
            <FiSearch />
          </button>
          
          <Link href="/user" className="cursor-pointer hover:text-indigo-500 transition-all duration-500 hover:bg-neutral-100 p-2">
            <FiUser />
          </Link>
          
          <button className="cursor-pointer hover:text-indigo-500 transition-all duration-500 hover:bg-neutral-100 p-2">
            <FiSettings />
          </button>
        </section>

        {/* Botón hamburguesa — visible en móvil */}
        <button
          className="md:hidden p-2 hover:text-indigo-500 transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </section>

      {open && (
        <section className="md:hidden w-full border-t border-neutral-100 flex flex-col text-sm text-neutral-800">
          <button className="flex items-center gap-3 px-6 py-4 hover:bg-neutral-100 hover:text-indigo-500 transition-all duration-300">
            <FiSearch /> Buscar
          </button>
          
          <Link href="/user" className="flex items-center gap-3 px-6 py-4 hover:bg-neutral-100 hover:text-indigo-500 transition-all duration-300" onClick={() => setOpen(false)}>
            <FiUser /> Usuario
          </Link>
          
          <button className="flex items-center gap-3 px-6 py-4 hover:bg-neutral-100 hover:text-indigo-500 transition-all duration-300">
            <FiSettings /> Configuración
          </button>
        </section>
      )}
    </nav>
  );
}
