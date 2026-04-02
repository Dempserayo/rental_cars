"use client"

import "@/src/i18n"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { RootState } from "@/src/store"
import { calcFinalPrice } from "@/src/lib/reservationUtils"

interface SlugViewProps {
  slug: string
}

export default function SlugView({ slug: _slug }: SlugViewProps) {
  const { t } = useTranslation()
  const vehicle = useSelector((state: RootState) => state.vehicles.selectedVehicle)

  if (!vehicle) {
    return (
      <section className="h-full flex flex-col items-center justify-center bg-neutral-200 text-neutral-800 font-thin gap-6 p-10">
        <p className="text-sm">{t("slug.vehicleNotFound")}</p>
        <Link
          href="/search"
          className="text-xs border p-2 px-4 hover:bg-indigo-500 hover:text-white transition-all duration-500"
        >
          {t("slug.backToSearch")}
        </Link>
      </section>
    )
  }

  const finalPrice = calcFinalPrice(vehicle.price, 4)

  return (
    <section className="h-full flex flex-col items-center bg-neutral-200 justify-start">
      <main className="w-full max-w-7xl flex flex-col p-4 md:p-10 gap-6">
        <div className="w-full flex flex-col lg:flex-row bg-neutral-100 text-neutral-800 font-thin">
          <div className="p-10 flex justify-center items-center">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              width={500}
              height={500}
            />
          </div>

          <div className="w-full flex flex-col justify-between gap-4 p-10 text-[10px] md:text-xs">
            <div className="flex flex-col gap-2 md:p-4">
              <p className="text-base">{vehicle.name}</p>
              <p className="text-neutral-500">{vehicle.category}</p>
            </div>

            <p className="w-full h-2 border-b border-t border-neutral-500/50"></p>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <span className="md:p-4 flex flex-col gap-1">
                <p>COP $ {vehicle.price.toLocaleString()} {t("slug.perDay")}</p>
                <p>{t("slug.finalPrice")} {finalPrice.toLocaleString()}</p>
              </span>

              <Link
                href="/search"
                className="flex items-center justify-center border p-2 md:p-4 hover:bg-indigo-500 hover:text-white transition-all duration-500"
              >
                {t("slug.backToSearch")}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
