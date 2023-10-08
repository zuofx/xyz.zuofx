import '../css/Photos.css';
import React, { useState, useEffect } from 'react';

import textPHOTOS from '../assets/header-buttons/PHOTOS.png'
import imgLeftArrow from '../assets/leftarrow.png'
import imgRightArrow from '../assets/rightarrow.png'

const Photos = () => {
    const [photos, setPhotos] = useState([

    ])

    const [index, setIndex] = useState(0)

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 

    function handleForward() {
      if (index < photos.length - 1) {
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
        setIndex(photos.length - 1)
      }
      topFunction();
    }

    const getData=()=>{
        fetch('../data/photos.json'
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
            setPhotos(myJson);
          });
      }
  
    useEffect(() => {
        getData();
    }, [])

    if (photos != null && photos.length > 0) {
      return (
        <div className="PHOTOS">
          <div className="photos-title">
            <img src={textPHOTOS}></img>
            <h1>Photos I've taken and edited!</h1>
          </div>

          <div className="carousel">
            <div className="button-holder">
              <a className="button-l" onClick={handleBackward}><img src={imgLeftArrow}></img></a>
              <a className="button-r" onClick={handleForward}><img src={imgRightArrow}></img></a>
            </div>

            <div className="photos-card">    
              <a onClick={handleForward}>
              <img src={require(`../assets/gfx/${photos[index].img}`)} alt={photos[index].alt}></img>
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
        <div className="PHOTOS">
          <h1>
            Nothing to display here.
          </h1>
        </div>
      )
    }
};

export default Photos;