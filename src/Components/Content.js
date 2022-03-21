import React from 'react';
import Days from './Days';

function Content( {weatherInfo} ) {

    const today = new Date();
    const locale = 'en';
    const day = (today).toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day},${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    
    const tomorow = `${today.getDate()+1} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const dayNext = `${today.getDate()+2} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`; 


    return (
    <div className='Content'>      
        <div>
          {
            weatherInfo !=='' ? <Days weatherInfo = {weatherInfo} date = {date} tomorow={tomorow} dayNext = {dayNext}/> : <p>Please insert a city</p>
         }
        
        </div>
    </div>
  )
}

export default Content;