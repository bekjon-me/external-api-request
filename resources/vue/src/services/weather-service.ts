import type { Weather } from '@/models/weather'
import axios from 'axios'

interface WeatherDataResponse {
  data: Weather
}

class WeatherService {
  url: string

  constructor() {
    this.url = `http://127.0.0.1/api/get-weather-data`
  }

  getWeatherData(city_name: string): Promise<WeatherDataResponse> {
    return axios.get(this.url, {
      params: {
        city_name,
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
  }
}

export default new WeatherService()
