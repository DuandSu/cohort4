import React from 'react';
import logo from './svg/logo.svg';
import shipST from './svg/star-trek-svgrepo-com.svg';
import insigniaST from './svg/section_31_geeksvgs.com.svg';
import insigniaKL1 from './svg/star_trek_klingon_insignia__geeksvgs.com.svg';
import insigniaKL2 from './svg/star_trek_33_geeksvgs.com.svg';
import kittyKL from './svg/klingon_kitty_geeksvgs.com.svg';
import spockHI from './svg/star_trek_27_geeksvgs.com.svg';
import './App.css';

function App() {
  return (
    <div>
        <div className="App-svg-area">
            <div>
              <img src={shipST} className="App-svg1" alt="shipST" />
            </div>
            <div>
              <img src={insigniaST} className="App-svg2" alt="insigniaST" />
            </div>
            <div>
              <img src={insigniaKL1} className="App-svg3" alt="insigniaKL1" />
            </div>
            <div>
              <img src={insigniaKL2} className="App-svg4" alt="insigniaKL2" />
            </div>
            <div>
              <img src={kittyKL} className="App-svg5" alt="kittyKL" />
            </div>
            <div>
              <img src={spockHI} className="App-svg6" alt="spockHI" />
            </div>
        </div>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
        </div>
    </div>
  );
}

export default App;
