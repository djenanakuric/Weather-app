import React from 'react';
import WeatherData from './WeatherData';
import Information from './Information';

function Content({weatherInfo}) {
  return (
      <div>
            <div className='firstPart'>
                <Information weatherInfo = {weatherInfo}/>
            </div>
            <div className='secondPart'>
                <WeatherData weatherInfo = {weatherInfo}/>
            </div>
      </div>
    
  )
}

export default Content;