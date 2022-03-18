import React from 'react'

function CurrentDay({ weatherInfo, date}) {
  return (
    <div className='Current-day'>
       <table className='table-main'>
            <thead>
                <tr className='City-info'>
                    <th>
                        <img className='weather-image-main' src={weatherInfo.current.condition.icon} alt="" />
                    </th>
                    <th>
                        <h1>{weatherInfo.location.name}</h1>
                        <h2>{weatherInfo.location.country}</h2>
                        <h2>{date}</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <h3>{weatherInfo.current.condition.text}</h3>
                </tr>
                <tr>
                    <p>{weatherInfo.current.temp_c} ᵒC</p>
                </tr>
                <tr>
                    <h3> Humidity: </h3>
                    <p>{weatherInfo.current.humidity} %</p>
                </tr>
                <tr>
                    <h3>Feel like:</h3>
                    <p>{weatherInfo.current.feelslike_c} ᵒC</p>
                </tr>
                <tr></tr>
            </tbody>
        </table>

    </div>
  )
}

export default CurrentDay