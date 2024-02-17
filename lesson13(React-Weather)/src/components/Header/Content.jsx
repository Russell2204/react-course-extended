import React from 'react'
import sun from './../../assets/images/sun.svg'

const Content = () => {
  return (
    <div className='container header__content'>
        <div className="header__content-left">
            <h1>20°</h1>
            <h2>Сегодня</h2>
            <span>Время: 21:54</span>
            <span>Город: Санкт-Петербург</span>
            <img src={sun} alt="" />
            
        </div>
        <div className="header__content-right">
            
        </div>
    </div>
  )
}

export default Content