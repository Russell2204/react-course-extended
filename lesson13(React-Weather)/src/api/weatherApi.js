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

  const name =
    response.data[0].local_names.ru ?? response.data[0].local_names.en
  const allWeather = await axios.get(
    `${API_URL_MAIN}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
  )
  const { dt } = allWeather.data.current

  const allData = { ...allWeather.data, name, dt }
  console.log(allData)
  return allData
}
// Этот код содержит функцию fetchWeatherData, которая использует библиотеку Axios для отправки запросов к API погоды (OpenWeatherMap) и получения данных о погоде для указанного города.

// В начале кода определяются константы API_KEY, API_URL_GEO и API_URL_MAIN, которые содержат API ключ, URL для получения географических данных и URL для получения основных данных о погоде соответственно.

// Функция fetchWeatherData принимает название города в качестве аргумента, затем делает запрос к API API_URL_GEO для получения географических данных о заданном городе с использованием указанного API ключа.

// Если ответ содержит данные о координатах города, то извлекаются широта (lat) и долгота (lon). Если ответ не содержит данных, используются значения по умолчанию из переменной defaultTown.

// Затем функция делает запрос к API API_URL_MAIN с полученными координатами города, чтобы получить основные данные о погоде (например, текущую погоду, температуру и т. д.) с учетом метрической системы измерения и языка (русский).

// После получения всех данных, функция формирует объект allData, который содержит основные данные о погоде, название города на русском или английском языке и дату последнего обновления погоды.

// Наконец, данные о погоде выводятся в консоль с помощью console.log, а затем возвращаются из функции fetchWeatherData.

// Таким образом, этот код выполняет запросы к API погоды для получения данных о погоде для указанного города и возвращает эти данные в виде объекта.