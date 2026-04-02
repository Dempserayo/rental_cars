import { Vehicle } from "@/lib/vehicles"

export function handleReserve(vehicle: Vehicle, isReserved: boolean): void {
  const storageKey = `reserved-${vehicle.slug}`
  if (!isReserved) {
    localStorage.setItem(storageKey, JSON.stringify({ reserved: true, ...vehicle }))
  } else {
    localStorage.removeItem(storageKey)
  }
  window.dispatchEvent(new Event("reservations-updated"))
}

export function calcFinalPrice(pricePerDay: number, days: number): number {
  return pricePerDay * days
}
