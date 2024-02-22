import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from '../../api/weatherThunk'
import Main from '../Main/Main'
const Header = () => {
  const dispatch = useDispatch()
  const weatherData = useSelector((state) => state.weather.data)
  const changeWeatherHandler = (city) => {
    dispatch(getWeatherData(city))
  }

  return (
    <header className="header">
      <Navbar changeWeather={changeWeatherHandler} />
      {weatherData && <Content weather={weatherData} />}
      {weatherData && <Main weather={weatherData} />}
    </header>
  )
}

export default Header
