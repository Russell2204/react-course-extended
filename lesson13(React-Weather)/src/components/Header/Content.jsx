// import sun from './../../assets/images/sun.svg'
import temp from './../../assets/images/temp.svg'
import prec from './../../assets/images/prec.svg'
import press from './../../assets/images/press.svg'
import wind from './../../assets/images/wind.svg'
import { useEffect } from 'react'
const Content = ({ weather }) => {
  const getDate = (date) => {
    let newDate = new Date(date * 1000),
      hours = newDate.getHours(),
      minutes = '0' + newDate.getMinutes(),
      formattedTime = hours + ':' + minutes.substr(-2)

    return formattedTime
  }
  useEffect(() => {
    getDate(weather.current.dt)
  }, [weather.current.dt])

  return (
    weather && (
      <div className="container header__content">
        <div className="header__content-left">
          <h1>{Math.floor(weather.current.temp)}°</h1>
          <h2>Сегодня</h2>
          <span>Время: {getDate(weather.current.dt) ?? '21:54'}</span>
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
