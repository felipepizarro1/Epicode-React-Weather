import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const API_KEY = "84ea03d648cf9492e6c4d8b23085e149";

  const [weatherData, setWeatherData ] = useState([]);

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Milano&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => setWeatherData(data))

  },[])

  return (
    <div className="App">
        {console.log(weatherData)}
    </div>
  );
}

export default App;
