import { fetchVehicles } from "@/lib/vehicles"
import SearchView from "../view/view_search"

export default async function Search() {
  const vehicles = await fetchVehicles()
  return <SearchView initialVehicles={vehicles} />
}
