import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
function App() {
  const [weatherInfo, setWeatherInfo] = useState('');
  useEffect ( () => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "82ce00c528msh01e956e4f9737c6p1290ccjsnd1525eae9761"
    }
  });
  const weather = await data.json();
  setWeatherInfo(weather);
  console.log(weather)
  }

  console.log(weatherInfo);
 
  return (
    <div className="App">
      <Header />
      <Content weatherInfo = {weatherInfo}/>
      <Footer />
    </div>
  );
}

export default App;
