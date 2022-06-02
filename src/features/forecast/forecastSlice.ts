import { IForecastDay } from './../../types/ForecastDay.interface'
import { createSlice } from "@reduxjs/toolkit"

type initialStateType = {
  days: IForecastDay[]
}

const initialState: initialStateType = {
  days: []
}

type Action = {
  type: string,
  payload: IForecastDay[]
}

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setDays: (state, action: Action) => {
      state.days = action.payload
    }
  }
})

export const { setDays } = forecastSlice.actions
export const forecastReducer = forecastSlice.reducer