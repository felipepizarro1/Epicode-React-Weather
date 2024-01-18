import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import { Card } from 'react-bootstrap';

export default function ForecastComponent({forecast}) {
    const formatTime = (time) => {
        const date = new Date(time);
        
        const hours = date.getHours();

        return `${hours}:00`;
            
    }       
  return (
    <>
    <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  {forecast && forecast.slice(0,7).map((ele,index)=>

                    <div className="flex-column">
                    <p className="small">
                      <strong>{ele.main.temp}°C</strong>
                    </p>
                    <Card.Img 
                    variant="top" 
                    src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`}
                    style={{ width: '50px', height: '50px' }} />
                    {/* <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    /> */}
                    <p className="mb-0">
                      <strong>{formatTime(ele.dt_txt)}</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >

                    
                    {parseInt(formatTime(ele.dt_txt)) < 12 ? "AM" : "PM"}
                    </p>
                  </div>
                  )}
                  
                </div>
              </MDBCardBody>
            </MDBCard>
    
    
    
    </>
    

  )
}
