import { useState, useEffect } from 'react'
// import sun from './../../assets/images/sun.svg'
import temp from './../../assets/images/temp.svg'
import prec from './../../assets/images/prec.svg'
import press from './../../assets/images/press.svg'
import wind from './../../assets/images/wind.svg'

const Content = ({ weather }) => {
  function getDate(offset) {
    const date = new Date(new Date().getTime() + offset * 1000)
    const hours = ('0' + date.getUTCHours()).slice(-2)
    const minutes = ('0' + date.getUTCMinutes()).slice(-2)
    return `${hours}:${minutes}`
  }

  return (
    weather && (
      <div className="container header__content">
        <div className="header__content-left">
          <h1>{Math.floor(weather.current.temp)}°</h1>
          <h2>Сегодня</h2>
          <span>Время: {getDate(weather.timezone_offset)}</span>
          <span>Город: {weather.name ?? 'Чирчик'}</span>
          <img
            src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
        <div className="header__content-right">
          <ul className="header__content-list">
            <li>
              <img src={temp} alt="" />
              <h3>Температура</h3>
              <p>
                {Math.floor(weather.current.temp)}° - ощущается как{' '}
                {Math.floor(weather.current.feels_like)}°
              </p>
            </li>
            <li>
              <img src={press} alt="" />
              <h3>Давление </h3>
              <p>{weather.current.pressure} мм ртутного столба - нормальное</p>
            </li>
            <li>
              <img src={prec} alt="" />
              <h3>Осадки</h3>
              <p>{weather.current.humidity ?? 'Без осадков'}%</p>
            </li>
            <li>
              <img src={wind} alt="" />
              <h3>Ветер</h3>
              <p>
                {Math.floor(weather.current.wind_speed)} м/с юго-запад - легкий
                ветер
              </p>
            </li>
          </ul>
        </div>
     
      </div>
    )
  )
}

export default Content
