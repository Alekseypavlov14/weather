import { configureStore } from '@reduxjs/toolkit'
import { forecastReducer } from '../features/forecast/forecastSlice'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer
  }
})

export type RootState = ReturnType<typeof store.getState>