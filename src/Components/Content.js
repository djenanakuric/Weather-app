import React from 'react';
import Days from './Days';

function Content( {weatherInfo} ) {

    const today = new Date();
    const locale = 'en';
    const day = (today).toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day},${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    
    const tomorow = new Date()
    const dayTomorow = (tomorow).toLocaleDateString(locale, {weekday: 'long'});
    const dateTomorow = `${tomorow},${tomorow.getDate()+1} ${tomorow.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    console.log(dateTomorow)


    return (
    <div className='Content'>      
        <div>
          {
            weatherInfo !=='' ? <Days weatherInfo = {weatherInfo} date = {date} dateTomorow={dateTomorow} /> : <p>Please insert a city</p>
         }
        
        </div>
    </div>
  )
}

export default Content;