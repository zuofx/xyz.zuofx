import './css/App.css';
import React, { useLayoutEffect, useState } from 'react';
import Footer from './components/Footer';

//Assets
import logo from './assets/logo.png';
import banner from './assets/banner-plain.png';
import intro from './assets/intro.png'
import buttonHome from './assets/header-buttons/HOME.png';
import buttonLinks from './assets/header-buttons/LINKS.png';
import buttonPhotos from './assets/header-buttons/PHOTOS.png';
import buttonWebdev from './assets/header-buttons/WEBDEV.png';
import buttonGFX from './assets/header-buttons/GFX.png';

// Pages
import Home from './pages/Home';
import GFX from './pages/GFX';
import Photos from './pages/Photos';
import Webdev from './pages/Webdev';
import Links from './pages/Links';
import ErrorPage from './pages/404';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

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

const App = () => {
  const [w, h] = useWindowSize();
  const [open, setOpen] = useState(0);

  function openMenu() {
    if (open === 0) {
      setOpen(1);
    }else {
      setOpen(0);
    }
    console.log(open);
  }

  if (w >= 800) {
    return (
      <div className="App">
        <div className="header">
          <img className="header-logo" src={logo}/>
          
          <div className="header-inner">

            <a className="header-button" href="/home">
              <img className="h-button" src={buttonHome} alt="home"></img>
            </a>

            <a className="header-button" href="gfx">
              <img className="h-button" src={buttonGFX} alt="GFX"></img>
            </a>

            <a className="header-button" href="photos">
              <img className="h-button" src={buttonPhotos} alt="Photos"></img>
            </a>

            <a className="header-button" href="webdev">
              <img className="h-button" src={buttonWebdev} alt="webdev"></img>
            </a>

            <a className="header-button" href="links">
             <img className="h-button" src={buttonLinks} alt="links"></img>
            </a>
            
          </div>
        </div>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gfx" element={<GFX />} />
            <Route path="/design" element={<GFX />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/photography" element={<Photos />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/links" element={<Links />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>

        {Footer()}
      </div>
    );
  }else {

    if (open === 0) {
      return (
        <div className="App">
          <div className="header">
            
            <div className="header-inner">

              <button className="bars" onClick={() => openMenu()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </button>

            </div>

          </div>

          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/gfx" element={<GFX />} />
              <Route path="/design" element={<GFX />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/photography" element={<Photos />} />
              <Route path="/webdev" element={<Webdev />} />
              <Route path="/links" element={<Links />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>

          {Footer()}
        </div>
      );
    }else {
      return (
        <div className="App">
          <div className="header-expanded">
            <div className="mini-inner">
              <img className="mini-logo" src={logo}/>

              <a className="mini-button" href="/home">
                <img className="mh-button" src={buttonHome} alt="home"></img>
              </a>

              <a className="mini-button" href="gfx">
                <img className="mh-button" src={buttonGFX} alt="GFX"></img>
              </a>

              <a className="mini-button" href="photos">
                <img className="mh-button" src={buttonPhotos} alt="Photos"></img>
              </a>

              <a className="mini-button" href="webdev">
                <img className="mh-button" src={buttonWebdev} alt="webdev"></img>
              </a>

              <a className="mini-button" href="links">
              <img className="mh-button" src={buttonLinks} alt="links"></img>
              </a>

              <div className="x-button">
                <button onClick={() => openMenu()}>X</button>
              </div>

            </div>

            
          </div>

          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/gfx" element={<GFX />} />
              <Route path="/design" element={<GFX />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/photography" element={<Photos />} />
              <Route path="/webdev" element={<Webdev />} />
              <Route path="/links" element={<Links />} />
            </Routes>
          </Router>

          {Footer()}

        </div>
      );
    }
  }
}

export default App;
