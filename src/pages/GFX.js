import '../css/GFX.css';
import React, { useState, useEffect } from 'react';

import textGFX from '../assets/header-buttons/GFX.png'
import imgLeftArrow from '../assets/leftarrow.png'
import imgRightArrow from '../assets/rightarrow.png'

const GFX = () => {
    const [gfx, setGFX] = useState([

    ])

    const [index, setIndex] = useState(0)

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 

    function handleForward() {
      if (index < gfx.length - 1) {
        setIndex(index + 1)
      }else {
        setIndex(0)
      }
      topFunction();
    }
    function handleBackward() {
      if (index > 0) {
        setIndex(index - 1)
      }else {
        setIndex(gfx.length - 1)
      }
      topFunction();
    }

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

    if (gfx != null && gfx.length > 0) {
      return (
        <div className="GFX">
          <div className="gfx-title">
            <img src={textGFX}></img>
            <h1>Some of my work in Graphics Design!</h1>
          </div>

          <div className="carousel">
            <div className="button-holder">
              <a className="button-l" onClick={handleBackward}><img src={imgLeftArrow}></img></a>
              <a className="button-r" onClick={handleForward}><img src={imgRightArrow}></img></a>
            </div>

            <div className="gfx-card">    
              <a onClick={handleForward}>
              <img src={require(`../assets/gfx/${gfx[index].img}`)} alt={gfx[index].alt}></img>
              </a>
            </div>

            <div className="button-holder">
              <a className="button-l" onClick={handleBackward}><img src={imgLeftArrow}></img></a>
              <a className="button-r" onClick={handleForward}><img src={imgRightArrow}></img></a>
            </div>

          </div>
          <div className="spacer">fwe</div>
        </div>
      );
    }else {
      return (
        <div className="GFX">
          <h1>
            Nothing to display here.
          </h1>
        </div>
      )
    }

};

export default GFX;