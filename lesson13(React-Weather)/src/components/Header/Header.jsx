import React from 'react'
import Main from '../Main/Main.jsx'
import Navbar from './Navbar'
import Content from './Content'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { getWeatherInfo } from '../../store/getWeatherSlice.js'
const Header = () => {
  const dispatch = useDispatch()
  const weatherInfo = useSelector((state) => state.weather.data)
  const changeWeatherHandler = (city) => {
    dispatch(getWeatherInfo(city))
  }

  return (
    <header className="header">
      <Navbar changeWeather={changeWeatherHandler} />
      {weatherInfo ? (
        <>
          <Content
            weather={weatherInfo.weatherData}
            name={weatherInfo.geoData}
          />
          <Main
            weather={weatherInfo.weatherData}
            name={weatherInfo.geoData}
          />
        </>
      ) : (
        <Loader />
      )}
    </header>
  )
}

export default Header
