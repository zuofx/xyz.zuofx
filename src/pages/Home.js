import '../css/Home.css';
import React, { useLayoutEffect, useState } from 'react';

//Assets
import logo from '../assets/logo.png';
import intro from '../assets/intro.png'
import mepixel from '../assets/mepixel.png'
import menorm from '../assets/menorm.png'
import qu from '../assets/link-cards/Logos/QueensU.png'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const Home = () => {

    const [w, h] = useWindowSize();
    const [open, setOpen] = useState(0);

    if (w > 1000 || w < 300) {
        return (
            <div className="Home">
                <div className="home-top">
                    <img src={mepixel}></img>
                    <div className="home-text">
                        <h1>
                            Hello.<br></br>
                            <span>
                                I'm Huy.
                            </span>
                            <br/>
                            
                        </h1>
                        <h2>
                            Let's Explore<span>|</span>
                        </h2>
                    </div>
                </div>
    
                <div className="goButton">
                    <div>
                        <a href="/links">
                        CONTACT
                        </a>
                    </div>
                </div>
    
                <div className="about-me">
                    <h1>
                        About Me
                    </h1>
                    <div className="ab-card-holder">
                        <div className="ab-card">
                            <img src={menorm}></img>
                            <p><span>Huy M. Truong</span><br/> Queen's University Computing '26<br/>Specializing in Software Design (SODE)</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else if ( w < 1000 && w > 500) {
        return (
            <div className="Home">
            <div className="home-top">
                <img src={mepixel}></img>
                <div className="home-text">
                    <h1>
                        Hello.<br></br>
                        <span>
                            I'm Huy.
                        </span>
                        <br/>
                        
                    </h1>
                    <h2>
                        Let's Explore<span>|</span>
                    </h2>
                </div>
            </div>

            <div className="goButton">
                <div>
                    <a href="/links">
                    CONTACT
                    </a>
                </div>
            </div>

            <div className="about-me">
                <h1>
                    About Me
                </h1>
                <div className="ab-card-holder-small">
                    <div className="ab-card-small">
                        <img src={menorm}></img>
                        <p><span>Huy M. Truong</span><br/> Queen's University Computing '26<br/>Specializing in Software Design (SODE)</p>
                    </div>
                </div>
            </div>
        </div>           
        )
    }else if (w < 500) {
        return (
            <div className="Home">
            <div className="home-top">
                <img src={mepixel}></img>
                <div className="home-text">
                    <h1>
                        Hello.<br></br>
                        <span>
                            I'm Huy.
                        </span>
                        <br/>
                        
                    </h1>
                    <h2>
                        Let's Explore<span>|</span>
                    </h2>
                </div>
            </div>

            <div className="goButton">
                <div>
                    <a href="/links">
                    CONTACT
                    </a>
                </div>
            </div>

            <div className="about-me">
                <h1>
                    About Me
                </h1>
                <div className="ab-card-holder-smaller">
                    <div className="ab-card-smaller">
                        <img src={menorm}></img>
                        <p><span>Huy M. Truong</span><br/> Queen's University Computing '26<br/>Specializing in Software Design (SODE)</p>
                    </div>
                </div>
            </div>
        </div>           
        )
    }
    
};

export default Home;