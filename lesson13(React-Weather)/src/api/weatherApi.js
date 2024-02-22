import axios from 'axios'

const API_KEY = '852fea6c8191e19d3d72f836adf3521f'
const API_URL_GEO = 'https://api.openweathermap.org/geo/1.0/direct'
const API_URL_MAIN = 'https://api.openweathermap.org/data/2.8/onecall'

export const fetchWeatherData = async (city) => {
  const response = await axios.get(
    `${API_URL_GEO}?q=${city}&appid=${API_KEY}&lang=ru`
  )
  const defaultTown = { lat: '41.4726', lon: '69.5814' }
  const { lat, lon } = response.data[0] ?? defaultTown
  const name = response.data[0].local_names.ru ?? response.data[0].local_names.en
  const allWeather = await axios.get(
    `${API_URL_MAIN}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
  const allData = { ...allWeather.data, name }
  console.log(allData)
  return allData
}
