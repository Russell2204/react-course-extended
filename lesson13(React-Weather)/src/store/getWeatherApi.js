// api.js
import axios from 'axios'
const API_GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct?'
const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.8/onecall'
const API_KEY = '852fea6c8191e19d3d72f836adf3521f'

export const getWeatherData = async (city) => {
  try {
    const geoResponse = await axios.get(
      `${API_GEO_URL}q=${city}&appid=${API_KEY}`
    )
    const { lat, lon, local_names } = geoResponse.data?.[0]
    console.log(geoResponse)
    const weatherResponse = await axios.get(
      `${API_WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude={hourly,minutely}&appid=${API_KEY}`
    )
    const allData = { ...weatherResponse.data, local_names }
    return {
      geoData: geoResponse.data,
      weatherData: allData,
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
