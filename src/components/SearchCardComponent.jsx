import { MDBInputGroup } from 'mdb-react-ui-kit'
import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

export default function SearchCardComponent({updateContent, updateForecast}) {
    const API_KEY = "1058c937d20ab635a3c30bd2a8cbed5e";

    const [city, setCity] = useState([""]);
    const [suggestions, setSuggestions] = useState([]);

    //chiamata weather
    //chiamata forecast
    // useEffect(() => {
    //     if (city) {
    //         const timer = setTimeout(() => {
    //             chiamataWeather();
    //             chiamataForecast();
    //         }, 800); // Espera 500 ms después de la última pulsación de tecla
            
    //     }
    // }, [city]);//aggiorna la chiamata quando lo state di city cambia


    //chiamata weather
    //chiamata forecast

    const handleSubmit = (e) => {
        e.preventDefault();
        chiamataWeather();
        chiamataForecast();
      };

    
    function chiamataWeather() {
        if(city){

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log("dati del api: ", data);
            updateContent(data); //dati inviati a app
        })
        }
    }

    function chiamataForecast(){

        if(city){
        fetch(`https://api.openweathermap.org//data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(forecast => {
            console.log("dati del api forecast: ", forecast);
            updateForecast(forecast.list); //dati inviati a app
            
        })
        }
    }

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setCity(inputValue);
    
        // APLICAR LOGICA DE ARRAY GEO CITIES
        if (inputValue.trim() !== "") {
            const fakeSuggestions = ["London", "Paris", "New York"].filter(suggestion =>
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(fakeSuggestions);
        } else {
            setSuggestions([]); // Limpiar las sugerencias si no hay nada escrito
        }
    }   

    const handleSuggestionClick = (selectedCity) => {
        setCity(selectedCity);
        setSuggestions([]); // Limpiar las sugerencias
      };

  return (
    <>
    <form onSubmit={handleSubmit} >
        <div className='mx-auto w-25 w-sm-auto mt-4'>

        
        <MDBInputGroup  >
              <input
                className="form-control rounded"
                type="text"
                placeholder="City"
                onChange={handleInputChange} 
                value={city}
                 
              />
               <button type="submit" className="btn btn-primary ">
                  Check!
                </button>
        </MDBInputGroup>
        </div>
    </form>
    {suggestions.length > 0 && (
                <ListGroup style={{ width: '1300px' }} className='d-flex justify-content-center align-items-center h-100'> 
                    {suggestions.map((suggestion, index) => (
                        <ListGroup.Item key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
        )}
    </>
  )
}
