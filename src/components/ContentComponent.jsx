import React from 'react';

export default function ContentComponent({content}) {


    console.log("this is content " + content.temp);
  return (
    <div>
        <h1>{content.name}</h1>
        <h2>Current Temperature: {content.main.temp}</h2>
        {/* {Array.isArray(content) && content.list.map((ele, index) => (
            <h2>{ele.main}</h2>
        ))
        
        
        } */}
    
    </div>
  )
}
