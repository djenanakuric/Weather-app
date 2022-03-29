import React from 'react';
import NextDay from './NextDay';

function Days ({ weatherInfo, date, tomorow, dayNext}) {
    return (
        <div className='days'>
            <table className='main-table'>
                <tr>
                    <th className='current-city-info'>
                    <table className='table-main'>
                        <tr className='City-info'>
                            <th className='image-col'>
                                <img className='weather-image-main' src={weatherInfo.current.condition.icon} alt="" />
                            </th>
                            <th className='City-info-main'>
                                <h1>{weatherInfo.location.name}</h1>
                                <h2>{weatherInfo.location.country}</h2>
                                <h2>{date}</h2>
                            </th>
                        </tr>
                        <tr className='table-main-other-info'>
                            
                            <p>{weatherInfo.current.condition.text}</p>
                            <p>{weatherInfo.current.temp_c} ᵒC</p>
                            <h3> Humidity: </h3>
                            <p>{weatherInfo.current.humidity} %</p>
                            <h3>Feel like:</h3>
                            <p>{weatherInfo.current.feelslike_c} ᵒC</p>
                            <h3>Chance of rain:</h3>
                            <p>{weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain} %</p>
                        </tr>
                    </table>
                    </th>
                    <th className='next-day1'>
                    <NextDay weatherInfo={weatherInfo.forecast.forecastday[1]} tomorow = {tomorow} />
                    </th>
                    <th className='next-day2'>
                    <NextDay weatherInfo={weatherInfo.forecast.forecastday[2]} tomorow={dayNext} />
                    </th>
                </tr>
            </table>

        </div>
    )
}

export default Days;

