import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function SearchComponent({updateContent, updateForecast}) {
    const API_KEY = "1058c937d20ab635a3c30bd2a8cbed5e";

    const [city, setCity] = useState(["Lima"]);
    const [suggestions, setSuggestions] = useState([]);

    //chiamata weather
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log("dati del api: ", data);
            updateContent(data); //dati inviati a app
        })

        },[city]) //aggiorna la chiamata quando lo state di city cambia

    //chiamata forecast
    useEffect(()=>{
        fetch(`https://api.openweathermap.org//data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(forecast => {
            console.log("dati del api forecast: ", forecast);
            updateForecast(forecast.list); //dati inviati a app
            
        })

        },[city])


    

    

  return (
    
    <>
        <h1>Search Component</h1>
        <Form className='w-50' >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email City Name</Form.Label>
            <Form.Control 
            type="name" 
            placeholder="Es. Milano"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Search
        </Button>
        </Form>
    </>
  )
}
