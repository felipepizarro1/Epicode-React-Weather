import React from 'react';

export default function ContentComponent({content}) {

    if (!content) {
        return <div>No data available</div>;
      }
      if (!content.main) {
        return <div>No temperature data available</div>;
      }
    console.log("this is content " + content.main.temp);
  return (
    <div>
        
        <>
        <h1>{content.name}</h1>
        <h2>Current Temperature: {content.main.temp}</h2>
        <h2>Fells like: {content.main.feels_like}</h2>
        <h2>Min Temperature: {content.main.temp_min}</h2>
        <h2>Max Temperature: {content.main.temp_max}</h2>
        </>
        
        
        {/* {Array.isArray(content) && content.list.map((ele, index) => (
            <h2>{ele.main}</h2>
        ))
        
        
        } */}
    
    </div>
  )
}
