import React from 'react'

const Main = ({ weather }) => {
  console.log(weather.daily)
  return (
    <main className="container main">
      <h2 className="main-title">На неделю</h2>
      <div className=" main__content">
        {weather.daily.map((day) => (
          <div key={day.dt} className="main__content-day">
            <h3>Сегодня</h3>
            <h4>28 авг</h4>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt=""
            />
            <span>+{Math.floor(day.temp.day)}°</span>
            <h5>+{Math.floor(day.feels_like.day)}°</h5>
            <h6>{day.weather[0].description}</h6>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Main
