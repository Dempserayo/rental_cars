"use client";

import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMap, FiMaximize, FiSettings, FiShare } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleReserve } from "@/lib/reservationUtils";
import { selectVehicle } from "@/store/vehicleSlice";
import { Vehicle } from "@/lib/vehicles";

type SearchCardProps = {
  slug: string;
  name: string;
  category: string;
  price: number;
  totalPrice: number;
  image: string;
  url?: string;
};

export default function Search_Card({
  slug,
  name,
  category,
  price,
  totalPrice,
  image,
  url = `/search/${slug}`,
}: SearchCardProps) {

  const dispatch = useDispatch();
  const storageKey = `reserved-${slug}`;

  const [isReserved, setIsReserved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setIsReserved(parsed.reserved === true);
      } catch {
        setIsReserved(false);
      }
    }
  }, [storageKey]);

  const onReserve = () => {
    const newState = !isReserved;
    setIsReserved(newState);
    const vehicle: Vehicle = { slug, name, category, price, totalPrice, image };
    handleReserve(vehicle, isReserved);
  };

  const onVerMas = () => {
    dispatch(selectVehicle({ slug, name, category, price, totalPrice, image }));
  };

  return (
    <section className="w-full max-w-7xl flex flex-col lg:flex-row h-auto lg:h-96 bg-neutral-100 text-neutral-800 font-thin">
      <>
        <div className="p-10 h-full flex justify-center items-center">
          <Image src={image} alt={name} width={500} height={500} />
        </div>
      </>
      <>
        <div className="w-full h-full flex flex-col justify-between text-[10px] md:text-xs gap-4 p-10">
          <div className="flex flex-row justify-between items-start md:p-4">
            <span className="flex flex-col">
              <p>{name}</p>
              <p>{category}</p>
            </span>

            <span className="hidden md:flex flex-row gap-4 items-end text-neutral-500/50">
              <FiMaximize className="hover:text-indigo-500 cursor-pointer" />
              <FiMap className="hover:text-indigo-500 cursor-pointer" />
              <FiShare className="hover:text-indigo-500 cursor-pointer" />
            </span>
          </div>

          <p className="w-full h-2 border-b border-t border-neutral-500/50"></p>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            
            <span className="md:p-4">
              <p>COP $ {price.toLocaleString()}</p>
              <p>Tarifa por 4 días: {totalPrice.toLocaleString()}</p>
            </span>

            <span className="flex flex-row gap-2">
              
              <button
                onClick={onReserve}
                className={`w-full flex gap-4 items-center p-2 md:p-4 border transition-all duration-500 ${
                  isReserved
                    ? "bg-red-500 text-white"
                    : "hover:bg-indigo-500 hover:text-white"
                }`}
              >
                {isReserved ? "Cancelar" : "Reservar"}
                <FiHeart className="hidden md:flex" />
              </button>

              <Link
                href={url}
                onClick={onVerMas}
                className="w-full flex gap-4 items-center hover:bg-indigo-500 hover:text-white p-2 md:p-4 border"
              >
                Ver más
                <FiSettings className="hidden md:flex" />
              </Link>

            </span>
          </div>

        </div>
      </>
    </section>
  );
}
