import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function ContentComponent({content, forecast}) {

    const formatTime = (time) => {
        const date = new Date(time);
        
        const hours = date.getHours();

        return `${hours}:00`;
            
    }        
        
    

    if (!content) {
        return <div>No data available</div>;
      }
      if (!content.main) {
        return <div>No temperature data available</div>;
      }
    console.log("this is content " + content.main.temp);
  return (
    
        
        <>
        <h1>{content.name}</h1>
        <h2>Current Temperature: {content.main.temp}</h2>
        <h2>Feels like: {content.main.feels_like}</h2>
        <h2>Min Temperature: {content.main.temp_min}</h2>
        <h2>Max Temperature: {content.main.temp_max}</h2>
        <img src={`http://openweathermap.org/img/wn/${content.weather[0].icon}.png`} alt={content.weather[0].description} />
        <p>{content.weather[0].description.charAt(0).toUpperCase() + content.weather[0].description.slice(1)}</p>
        <Row >
        
        {forecast && forecast.map((ele, key)=>
        <>
        <Card style={{ width: '8rem' }}>
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`} />
            <Card.Body>
                <Card.Title>{ele.main.temp}</Card.Title>
                <Card.Text>
                 {formatTime(ele.dt_txt)}
                </Card.Text>
                
             </Card.Body>
        </Card>
            
        </>
        )}
        
        </Row>
        </>
        
        
    
    
  )
}
