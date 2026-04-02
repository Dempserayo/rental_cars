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
        <main className="w-full max-w-7xl h-full flex flex-col p-4 md:p-10">
          <section className="w-full max-w-7xl h-full flex flex-col md:px-10 items-center gap-4">
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
