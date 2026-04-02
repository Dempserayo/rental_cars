import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Vehicle, fetchVehicles } from '@/src/lib/vehicles'

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

export const searchVehicles = createAsyncThunk(
  'vehicles/search',
  async (location: string, { rejectWithValue }) => {
    try {
      const all = await fetchVehicles()
      const filtered = all.filter((v) =>
        v.name.toLowerCase().includes(location.toLowerCase()) ||
        v.category.toLowerCase().includes(location.toLowerCase()) ||
        location.trim() !== ''
      )
      return filtered
    } catch {
      return rejectWithValue('Error al buscar vehículos')
    }
  }
)

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
  extraReducers: (builder) => {
    builder
      .addCase(searchVehicles.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchVehicles.fulfilled, (state, action) => {
        state.loading = false
        state.results = action.payload
      })
      .addCase(searchVehicles.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setVehicles, selectVehicle, setLoading, setError } = vehicleSlice.actions
export default vehicleSlice.reducer
