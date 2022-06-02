import { IForecastHour } from "./ForecastHour.interface"

export interface IForecastDay {
  astro: {
    moon_illumination: string
    moon_phase: string
    moonrise: string
    moonset: string
    sunrise: string
    sunset: string
  }
  date: string
  date_epoch: number
  day: {
    avghumidity: number
    avgtemp_c: number
    avgtemp_f: number
    avgvis_km: number
    avgvis_miles: number
    condition: {
      code: number
      icon: string
      text: string
    }
    daily_chance_of_rain: number
    daily_chance_of_snow: number
    daily_will_it_rain: number
    daily_will_it_snow: number
    maxtemp_c: number
    maxtemp_f: number
    maxwind_kph: number
    maxwind_mph: number
    mintemp_c: number
    mintemp_f: number
    totalprecip_in: number
    totalprecip_mm: number
    uv: number
  }
  hour: IForecastHour[]
}