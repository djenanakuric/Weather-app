import React from 'react';
import CurrentDay from './CurrentDay';

function Content( {weatherInfo} ) {

    const today = new Date();
    const locale = 'en';
    const day = today.toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day},${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  return (
    <div className='Content'>
       <CurrentDay weatherInfo = {weatherInfo} date = {date}/>
    </div>
  )
}

export default Content;