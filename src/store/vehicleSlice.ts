import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Vehicle } from '@/lib/vehicles'

interface VehicleState {
  results: Vehicle[]
  selectedVehicle: Vehicle | null
  loading: boolean
  error: string | null
}

const initialState: VehicleState = {
  results: [],
  selectedVehicle: null,
  loading: false,
  error: null,
}

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles(state, action: PayloadAction<Vehicle[]>) {
      state.results = action.payload
    },
    selectVehicle(state, action: PayloadAction<Vehicle>) {
      state.selectedVehicle = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setVehicles, selectVehicle, setLoading, setError } = vehicleSlice.actions
export default vehicleSlice.reducer
