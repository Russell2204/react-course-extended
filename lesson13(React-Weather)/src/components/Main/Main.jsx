import React from 'react'

const Main = ({ weather }) => {
  const weeks = weather.daily.slice(0, 7)
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  return (
    <main className="container main">
      <h2 className="main-title">На неделю</h2>
      <div className="main__content">
        {weeks.map((day, idx) => (
          <div key={day.dt} className="main__content-day">
            <h3>
              {idx === 0
                ? 'Сегодня'
                : weekDays[new Date(day.dt * 1000).getDay()]}
            </h3>
            <h4>
              {new Date(day.dt * 1000).toLocaleDateString('ru-Ru', {
                month: 'short',
                day: 'numeric',
              })}
            </h4>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt=""
            />
            <span>
              {Math.floor(day.temp.day) < 0
                ? Math.floor(day.temp.day)
                : '+' + Math.floor(day.temp.day)}
              °
            </span>
            <h5>  {Math.floor(day.feels_like.day) < 0
                ? Math.floor(day.feels_like.day)
                : '+' + Math.floor(day.feels_like.day)}°</h5>
            <h6>{day.weather[0].description}</h6>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Main
