import './App.css';
import React, { useState, useEffect } from 'react';
import SearchComponent from './components/SearchComponent';
import ContentComponent from './components/ContentComponent';

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
      <SearchComponent updateContent={updateContent} updateForecast={updateForecast}/>
      <ContentComponent content={content} forecast={forecast}/>

    </>
  );
}

export default App;
