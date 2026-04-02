export interface Vehicle {
  slug: string
  name: string
  category: string
  price: number
  totalPrice: number
  image: string
}

export const VEHICLES_MOCK: Vehicle[] = [
  {
    slug: 'Nissan_Versa_US_BLUE',
    name: 'Nissan Versa Azul',
    category: 'Compacto',
    price: 197292,
    totalPrice: 789206,
    image: '/images/cars/CCAR_US_BLUE.webp',
  },
  {
    slug: 'Nissan_Versa_US',
    name: 'Nissan Versa',
    category: 'Compacto',
    price: 197292,
    totalPrice: 789206,
    image: '/images/cars/CCAR_US.webp',
  },
  {
    slug: 'Ford_Fusion',
    name: 'Ford Fusion',
    category: 'Full-Size',
    price: 204520,
    totalPrice: 818155,
    image: '/images/cars/FCAR_US.webp',
  },
]

export function fetchVehicles(): Promise<Vehicle[]> {
  return Promise.resolve(VEHICLES_MOCK)
}
