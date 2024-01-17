import React, { useState, useEffect } from 'react';

export default function SearchComponent({updateContent}) {
    const API_KEY = "1058c937d20ab635a3c30bd2a8cbed5e";


    
    const [city, setCity] = useState(["Lisboa"]);


    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            updateContent(json); //dati inviati a app
        })

        },[city]) //aggiorna la chiamata quando lo state di city cambia


    

  return (
    
    <div>SearchComponent</div>
  )
}
