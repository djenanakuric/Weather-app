import React from 'react'

function NextDay ({weatherInfo}) {
  return (
    <div>
        <img className='weather-image-next-day' src={weatherInfo.day.condition.icon} alt="" />
        <p>{weatherInfo.day.condition.text}</p>
        <p>{weatherInfo.day.mintemp_c} / {weatherInfo.day.maxtemp_c}</p>
        <h3>Chance of rain: </h3>
        <p>{weatherInfo.day.daily_chance_of_rain} %</p>
    </div>
  )
}

export default NextDay;