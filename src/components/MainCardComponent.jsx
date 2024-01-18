import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBRadio,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import SearchCardComponent from "./SearchCardComponent";
import { Card } from "react-bootstrap";

export default function MainCardComponent({updateContent, updateForecast, content}) {

    if (!content) {
        return <div>No data available</div>;
      }
      if (!content.main) {
        return <div className="">Please insert a city</div>;
      }
    console.log("this is content " + content.main.temp);
   


  return (
    <section className="vh-50">
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
              Check the weather forecast
            </MDBTypography>
                {/*  */}
            {/* INSERTAR AQUÍ SEARCH*/}

            {/* <div className="mb-4 p-2">
              <MDBRadio
                inline
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Celcius"
                defaultChecked
              />
              <MDBRadio
                inline
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Farenheit"
              />
            </div> */}

            <MDBCard className="shadow-0 border">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="mb-1 sfw-normal">{content.name}</MDBTypography>
                <p className="mb-2">
                  Current temperature: <strong>{content.main.temp}°C</strong>
                </p>
                <p>
                  Feels like: <strong>{content.main.feels_like}°C</strong>
                </p>
                <p>
                  Max: <strong>{content.main.temp_max}°C</strong>, Min: <strong>{content.main.temp_min}°C</strong>
                </p>

                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">{content.weather[0].description.charAt(0).toUpperCase() + content.weather[0].description.slice(1)}</p>
                  <Card.Img 
                  variant="top"
                    src={`http://openweathermap.org/img/wn/${content.weather[0].icon}.png`}
                   style={{ width: '50px', height: '50px' }} />
                  <MDBIcon fas icon={content.weather[0].icon} size="3x" style={{color: '#eee'}} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
