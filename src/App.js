import './css/App.css';
import logo from './assets/placeholder.png'
import React, { useLayoutEffect, useState } from 'react';
import Footer from './components/Footer';

import Home from './pages/Home';
import GFX from './pages/GFX';
import Photos from './pages/Photos';
import Webdev from './pages/Webdev';
import Links from './pages/Links';

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
          <img src={logo}/>
          
          <div className="header-inner">
            <a href="/home">HOME</a>
            <a href="/gfx">GFX</a>
            <a href="/photos">PHOTOS</a>
            <a href="/webdev">WEBDEV</a>
            <a href="/links">LINKS</a>
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
              <img src={logo}/>

              <a href="/home">HOME</a>
              <a href="/gfx">GFX</a>
              <a href="/photos">PHOTOS</a>
              <a href="/webdev">WEBDEV</a>
              <a href="/links">LINKS</a>

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
