"use client";

import Search_Card from "@/components/common/page_search/search_card";
import { useEffect, useState } from "react";

type ReservedCar = {
  name: string;
  category: string;
  price: number;
  totalPrice: number;
  image: string;
  url: string;
};

export default function UserView() {
  const [reservedCars, setReservedCars] = useState<ReservedCar[]>([]);

  const loadReservations = () => {
    const cars: ReservedCar[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("reserved-")) {
        const item = localStorage.getItem(key);
        if (item) cars.push(JSON.parse(item));
      }
    }

    setReservedCars(cars);
  };

  useEffect(() => {
    loadReservations();
    window.addEventListener("reservations-updated", loadReservations);
    return () => window.removeEventListener("reservations-updated", loadReservations);
  }, []);

  return (
    <section className="w-full flex flex-col items-center gap-4 p-10 xl:p-0">

      {/* Lista de reservas — solo visible si hay al menos una */}
      {reservedCars.length > 0 ? (
        <>
          <h2 className="w-full  max-w-7xl text-xs text-neutral-800">
            Reservas activas: {reservedCars.length}
          </h2>
          {reservedCars.map((car) => (
            <Search_Card key={car.name} {...car} />
          ))}
        </>
      ) : (
        <section className="w-full h-80 bg-neutral-200 flex justify-center items-center">
          <p className="text-xs text-neutral-800">No tienes reservas activas.</p>
        </section>

      )}

    </section>
  );
}