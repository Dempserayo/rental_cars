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
      <section className="min-h-screen flex flex-col items-center justify-center bg-white text-neutral-400 gap-4">
        <p className="text-xs tracking-widest uppercase">{t("slug.vehicleNotFound")}</p>
        <Link href="/search" className="text-[10px] tracking-widest uppercase border-b border-neutral-300 pb-0.5 hover:text-neutral-800 hover:border-neutral-800 transition-all duration-300">
          {t("slug.backToSearch")}
        </Link>
      </section>
    )
  }

  const finalPrice = calcFinalPrice(vehicle.price, 4)

  const insuranceItems = [
    t("slug.insuranceItems.ldw"),
    t("slug.insuranceItems.tp"),
    t("slug.insuranceItems.noDeductibles"),
  ]

  const benefitItems = [
    t("slug.benefitItems.taxes"),
    t("slug.benefitItems.unlimited"),
    t("slug.benefitItems.noAdmin"),
    t("slug.benefitItems.roadside"),
    t("slug.benefitItems.additionalDriver"),
    t("slug.benefitItems.fullToFull"),
  ]

  const travelItems = [
    { label: t("slug.travelItems.medical"),    amount: t("slug.travelAmounts.medical") },
    { label: t("slug.travelItems.luggage"),    amount: t("slug.travelAmounts.luggage") },
    { label: t("slug.travelItems.medication"), amount: t("slug.travelAmounts.medication") },
    { label: t("slug.travelItems.legal"),      amount: t("slug.travelAmounts.legal") },
    { label: t("slug.travelItems.cancellation"), amount: t("slug.travelAmounts.cancellation") },
    { label: t("slug.travelItems.delayed"),    amount: t("slug.travelAmounts.delayed") },
  ]

  const additionalServices = [
    { name: t("slug.services.thirdParty"), price: "COP $123.284" },
    { name: t("slug.services.firstTank"),  price: "COP $241.799" },
    { name: t("slug.services.tablet"),     price: "COP $407.720" },
  ]

  return (
    <section className="min-h-screen bg-[#f8f8f6] font-light">

      {/* Top progress bar */}
      <div className="w-full bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-neutral-400">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px]">1</span>
            <span className="hidden sm:inline">{t("slug.steps.selection")}</span>
            <span className="mx-2 text-neutral-200">—</span>
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px]">2</span>
            <span className="text-neutral-800 hidden sm:inline">{t("slug.steps.reservation")}</span>
            <span className="mx-2 text-neutral-200">—</span>
            <span className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-[9px] text-neutral-400">3</span>
            <span className="hidden sm:inline">{t("slug.steps.payment")}</span>
          </div>
          <p className="text-[10px] tracking-widest uppercase text-indigo-600">{t("slug.steps.stepOf")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">

          {/* Vehicle card */}
          <div className="bg-white border border-neutral-100 p-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-full sm:w-48 h-32 relative shrink-0 bg-neutral-50 flex items-center justify-center">
              <Image
                src={vehicle.image || "/images/car-placeholder.png"}
                alt={vehicle.name || "Vehicle"}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-1">{vehicle.category || "Minivan"}</p>
                  <h1 className="text-xl font-normal text-neutral-900 tracking-tight">
                    {vehicle.name || "CHRYSLER Pacifica"}
                    <span className="text-xs text-neutral-400 font-light ml-2">{t("slug.orSimilar")}</span>
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border border-neutral-200 px-3 py-1 text-[10px] tracking-widest uppercase text-neutral-500">
                    {vehicle.supplier || "AVIS"}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-800 text-sm">4.9</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? 'bg-amber-400' : 'bg-neutral-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="flex gap-4 text-[10px] tracking-widest uppercase text-neutral-400">
                <span>{t("slug.specs.passengers")}</span>
                <span>·</span>
                <span>{t("slug.specs.luggage")}</span>
                <span>·</span>
                <span>{t("slug.specs.ac")}</span>
                <span>·</span>
                <span>{t("slug.specs.transmission")}</span>
              </div>

              {/* Discount badge */}
              <div className="flex items-center gap-3">
                <div className="bg-neutral-900 text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
                  {t("slug.discount")}
                </div>
                <div className="flex gap-2 text-[10px] text-neutral-400">
                  <span className="border border-neutral-200 px-2 py-1">12h</span>
                  <span className="border border-neutral-200 px-2 py-1">18m</span>
                  <span className="border border-neutral-200 px-2 py-1">4s</span>
                </div>
                <p className="text-[9px] text-neutral-400 tracking-wide">{t("slug.validUntilMidnight")}</p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: t("slug.pickupLocation"), date: "Jue, 02 abr 2026 · 8:30" },
              { label: t("slug.returnLocation"), date: "Lun, 06 abr 2026 · 8:30" },
            ].map((loc) => (
              <div key={loc.label} className="bg-white border border-neutral-100 p-5 flex flex-col gap-2">
                <p className="text-[9px] tracking-widest uppercase text-neutral-400">{loc.label}</p>
                <p className="text-xs text-neutral-700">Aeropuerto Internacional de Dallas-Fort Worth (DFW)</p>
                <p className="text-[10px] text-neutral-400">2424 East 38th Street</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <p className="text-[10px] text-neutral-500">{loc.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Included */}
          <div className="bg-white border border-neutral-100 p-6">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-5">{t("slug.includedInPrice")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-neutral-600 mb-3">{t("slug.insurances")}</p>
                <ul className="flex flex-col gap-2">
                  {insuranceItems.map(item => (
                    <li key={item} className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-neutral-600 mb-3">{t("slug.benefits")}</p>
                <ul className="flex flex-col gap-2">
                  {benefitItems.map(item => (
                    <li key={item} className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Travel insurance */}
          <div className="bg-white border border-neutral-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <p className="text-[9px] tracking-widest uppercase text-neutral-400">{t("slug.travelInsurance")}</p>
              <span className="text-[9px] tracking-widest uppercase text-emerald-500 border border-emerald-200 px-2 py-0.5">{t("slug.travelInsuranceFree")}</span>
              <span className="text-[9px] text-neutral-400">{t("slug.travelInsuranceCovers")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {travelItems.map(({ label, amount }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-neutral-50">
                  <span className="text-[10px] text-neutral-500">{label}</span>
                  <span className="text-[10px] font-medium text-neutral-700">{amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Sticky summary */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-6 self-start">

          {/* Price summary */}
          <div className="bg-white border border-neutral-100 p-6 flex flex-col gap-4">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400">{t("slug.reservationSummary")}</p>
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] tracking-widest uppercase text-neutral-500">{t("slug.totalToPay")}</span>
              <span className="text-lg text-neutral-900 tracking-tight">
                COP {finalPrice?.toLocaleString("es-CO") || "1.170.911"}
              </span>
            </div>
            <p className="text-[9px] text-neutral-400">{t("slug.usdNote")}</p>
            <div className="h-px bg-neutral-100" />

            {/* Additional services */}
            <p className="text-[9px] tracking-widest uppercase text-neutral-400">{t("slug.additionalServices")}</p>
            {additionalServices.map((svc) => (
              <div key={svc.name} className="flex items-center justify-between gap-3">
                <p className="text-[10px] text-neutral-500 flex-1">{svc.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-500">{svc.price}</span>
                  <button className="w-8 h-4 bg-neutral-200 rounded-full relative transition-all">
                    <span className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Driver info */}
          <div className="bg-white border border-neutral-100 p-6 flex flex-col gap-4">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400">{t("slug.driverInfo")}</p>
            <input
              type="text"
              placeholder={t("slug.fullName")}
              className="w-full border-b border-neutral-200 py-2 text-xs text-neutral-700 placeholder-neutral-300 outline-none focus:border-neutral-500 bg-transparent transition-all duration-300"
            />
            <div className="flex gap-3">
              <div className="flex items-center gap-1 border-b border-neutral-200 py-2 w-20">
                <span className="text-sm">🇨🇴</span>
                <span className="text-[10px] text-neutral-400">+57</span>
              </div>
              <input
                type="tel"
                placeholder={t("slug.phone")}
                className="flex-1 border-b border-neutral-200 py-2 text-xs text-neutral-700 placeholder-neutral-300 outline-none focus:border-neutral-500 bg-transparent transition-all duration-300"
              />
            </div>
            <input
              type="email"
              placeholder={t("slug.email")}
              className="w-full border-b border-neutral-200 py-2 text-xs text-neutral-700 placeholder-neutral-300 outline-none focus:border-neutral-500 bg-transparent transition-all duration-300"
            />
          </div>

          {/* CTA */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] tracking-widest uppercase py-4 transition-all duration-300">
            {t("slug.next")}
          </button>
          <p className="text-center text-[9px] tracking-widest uppercase text-emerald-500">
            {t("slug.secureInfo")}
          </p>
        </div>
      </div>
    </section>
  )
}
