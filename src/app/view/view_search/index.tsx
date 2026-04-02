"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Vehicle } from "@/src/lib/vehicles"
import { setVehicles } from "@/src/store/vehicleSlice"
import { RootState } from "@/src/store"
import Search_Card from "@/src/components/common/page_search/search_card"

interface SearchViewProps {
  initialVehicles: Vehicle[]
}

export default function SearchView({ initialVehicles }: SearchViewProps) {
  const dispatch = useDispatch()
  const results = useSelector((state: RootState) => state.vehicles.results)

  useEffect(() => {
    dispatch(setVehicles(initialVehicles))
  }, [initialVehicles])

  return (
    <section className="h-full flex flex-col items-center bg-neutral-200 justify-between">
      <>
        <main className="w-full h-full flex flex-col items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/home-qs.webp')" }}>
            <div className="absolute inset-0 bg-linear-to-b backdrop-blur-xs from-[#141c4e]/80 via-indigo-800/80 to-indigo-500/80" />
            <section className="relative z-10 w-full max-w-7xl h-full flex flex-col md:px-10 py-20 items-center gap-4">
                 {results.map((vehicle) => (
              <Search_Card
                key={vehicle.slug}
                slug={vehicle.slug}
                name={vehicle.name}
                category={vehicle.category}
                price={vehicle.price}
                totalPrice={vehicle.totalPrice}
                image={vehicle.image}
                url={`/search/${vehicle.slug}`}
              />
            ))}              
            </section>
        </main>
      </>
    </section>
  )
}
