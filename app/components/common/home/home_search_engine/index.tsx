'use client'
import { FiArrowRight, FiCalendar, FiCheck, FiClock, FiLayers, FiMap, FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function SearchEngine(){
    const [activeField, setActiveField] = useState(null);

    return(
        <section className="w-full max-w-7xl h-auto flex flex-col justify-center items-center font-thin text-neutral-800">
            <section className="w-full h-auto bg-[#00e55e]/80 flex flex-row items-center justify-between px-10 py-4">
                <div className="w-full max-w-7xl flex flex-row">    
                                <button
                                className={`text-xs cursor-pointer transition-all duration-500 p-2 
                                ${activeField === "location" ? "text-indigo-500 bg-neutral-100" : "hover:text-indigo-500 hover:bg-neutral-100"}`}
                                >
                                <FiMap />
                                </button>

                                <button
                                className={`text-xs cursor-pointer transition-all duration-500 p-2 
                                ${activeField === "date" ? "text-indigo-500 bg-neutral-100" : "hover:text-indigo-500 hover:bg-neutral-100"}`}
                                >
                                <FiCalendar />
                                </button>

                                <button
                                className={`text-xs cursor-pointer transition-all duration-500 p-2 
                                ${activeField === "hours" ? "text-indigo-500 bg-neutral-100" : "hover:text-indigo-500 hover:bg-neutral-100"}`}
                                >
                                <FiLayers />
                                </button>

                                <button
                                className={`text-xs cursor-pointer transition-all duration-500 p-2 
                                ${activeField === "time" ? "text-indigo-500 bg-neutral-100" : "hover:text-indigo-500 hover:bg-neutral-100"}`}
                                >
                                <FiClock />
                                </button>
                </div>
                
                <button className="w-auto text-xs hover:text-indigo-500 transition-all duration-500 flex flex-row gap-4 items-center">
                    <p>Buscar</p>
                    <FiSearch />
                </button>
            </section>
            
            <section className="w-full h-auto flex flex-row justify-center items-center bg-neutral-100 p-20">
                {/* Ubicación */}
                <div className="flex flex-col w-full text-xs ">
                                    <label> Ubicación</label>
                                    <input onFocus={() => setActiveField("location")}
                                    type="text" placeholder="Bogotá Aeropuerto / Colombia" className="w-full text-neutral-800/80 focus:outline-none  focus:ring-transparent"/>
                </div>

                {/* Fecha recogida */}
                <div className="flex flex-col w-full text-xs">
                                    <label> Fecha de Recogida </label>
                                    <input onFocus={() => setActiveField("date")}
                                    type="date" className="w-full text-neutral-800/80 focus:outline-none focus:ring-transparent"/>
                </div>

                {/* Horas */}
                <div className="flex flex-col w-full text-xs">
                                    <label >Horas de uso</label>
                                    <input onFocus={() => setActiveField("hours")}
                                    type="number" placeholder="4 Horas" className="w-full text-neutral-800/80 focus:outline-none focus:ring-transparent"/>
                </div>

                {/* Hora entrega */}
                <div className="flex flex-col w-full text-xs">
                                    <label > Hora de Entrega </label>
                                    <input onFocus={() => setActiveField("time")}
                                    type="time" className="w-full  text-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-transparent"/>
                </div>
            </section>
        </section>
    )
}