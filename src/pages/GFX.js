import '../css/GFX.css';
import React, { useState, useEffect } from 'react';

const GFX = () => {
    const [gfx, setGFX] = useState([

    ])

    const getData=()=>{
        fetch('../data/gfx.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
    
          .then(function(myJson) {
            console.log(myJson);
            setGFX(myJson);
          });
      }
  
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="GFX">
            <h1 className="WIP">
                WIP
                <br/>
                
            </h1>
            <h2 className="WIP2">
                Come back later!
            </h2>
        </div>
    );
};

export default GFX;