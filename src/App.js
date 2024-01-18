import './App.css';
import React, { useState, useEffect } from 'react';
import SearchComponent from './components/SearchComponent';
import ContentComponent from './components/ContentComponent';
import MainCardComponent from './components/MainCardComponent';
import ForecastComponent from './components/ForecastComponent';
import SearchCardComponent from './components/SearchCardComponent';

function App() {

  const [content, setContent ] = useState([]);
  const [forecast, setForecast] = useState([]);

    const updateContent = (searchData) => {
      setContent(searchData);
      //questa funzione va come props al searchComponent
      //così, aggiorna lo state de app con i suoi dati
    }

    const updateForecast = (searchData) => {
      setForecast(searchData)
    }

  return (
    <>
      <SearchCardComponent updateContent={updateContent} updateForecast={updateForecast}/>
      <MainCardComponent content={content}/> 
      <ForecastComponent forecast={forecast}/>
      {/* <SearchComponent updateContent={updateContent} updateForecast={updateForecast}/>
      <ContentComponent /> */}

    </>
  );
}

export default App;
