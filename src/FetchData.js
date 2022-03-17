import React from 'react'

function FetchData() {
    fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "82ce00c528msh01e956e4f9737c6p1290ccjsnd1525eae9761"
    }
  })
  .then(async response => {
    //console.log(response.json());
    //const weatherData = await response.json();
   // console.log(weatherData)
   //setWeatherInfo(weatherData);
   return (await response.json();)

  })
  .catch(err => {
    console.error(err);
    return Promise.resolve({response: response});
  });
}

export default FetchData