import React from 'react'
import sun from './../../assets/images/sun.svg'
import temp from './../../assets/images/temp.svg'
import prec from './../../assets/images/prec.svg'
import press from './../../assets/images/press.svg'
import wind from './../../assets/images/wind.svg'

const Content = () => {
  return (
    <div className="container header__content">
      <div className="header__content-left">
        <h1>20°</h1>
        <h2>Сегодня</h2>
        <span>Время: 21:54</span>
        <span>Город: Санкт-Петербург</span>
        <img src={sun} alt="" />
      </div>
      <div className="header__content-right">
        <ul className="header__content-list">
          <li>
            <img src={temp} alt="" />
            <h3>Температура</h3>
            <p>20° - ощущается как 17°</p>
          </li>
          <li>
            <img src={press} alt="" />
            <h3>Давление </h3>
            <p>765 мм ртутного столба - нормальное</p>
          </li>
          <li>
            <img src={prec} alt="" />
            <h3>Осадки</h3>
            <p>Без осадков</p>
          </li>
          <li>
            <img src={wind} alt="" />
            <h3>Ветер</h3>
            <p>3 м/с юго-запад - легкий ветер</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Content
