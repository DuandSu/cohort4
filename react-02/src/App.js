import React, { useState } from 'react';

import c140b from './containers/c140b';
import Starter from './components/Starter';
import TicTacToe from './components/TicTacToe';

import './App.css';

import shipST from './svg/star-trek-svgrepo-com.svg';
import insigniaST from './svg/section_31_geeksvgs.com.svg';
import insigniaKL1 from './svg/star_trek_klingon_insignia__geeksvgs.com.svg';
import insigniaKL2 from './svg/star_trek_33_geeksvgs.com.svg';
import kittyKL from './svg/klingon_kitty_geeksvgs.com.svg';
import spockHI from './svg/star_trek_27_geeksvgs.com.svg';

function App() {

  const [messageArea, setMessage] = useState("Edit src/App.js and save to reload.");
  const [appToRun, setAppToRun] = useState("Starter");

  const onPushMe = (e) => {

    let appName = "";
    for (let i = 0; i < c140b.appList.length; i++) {
        if (Number(e.target.id) === c140b.appList[i].key) {
            appName = c140b.appList[i].appName;
            break;
        }
    }

    setMessage(`Call Application #${e.target.id} Name is ${appName}`);
    setAppToRun(appName);
    
  }

  return (
    <div>
        <div className="App-svg-area">
            <div>
              <img src={shipST} className="App-svg1" alt="shipST" id="1" onClick={onPushMe} />
            </div>
            <div>
              <img src={insigniaST} className="App-svg2" alt="insigniaST" id="2" onClick={onPushMe} />
            </div>
            <div>
              <img src={insigniaKL1} className="App-svg3" alt="insigniaKL1" id="3" onClick={onPushMe} />
            </div>
            <div>
              <img src={insigniaKL2} className="App-svg4" alt="insigniaKL2" id="4" onClick={onPushMe} />
            </div>
            <div>
              <img src={kittyKL} className="App-svg5" alt="kittyKL" id="5" onClick={onPushMe} />
            </div>
            <div>
              <img src={spockHI} className="App-svg6" alt="spockHI" id="6" onClick={onPushMe} />
            </div>
        </div>
        <div className="AppArea">
            {appToRun !== "TicTacToe" &&
                <div>
                    <Starter sMessageArea={messageArea}/>
                </div>
            }
            {appToRun === "TicTacToe" &&
                <div>
                    <TicTacToe sMessageArea={messageArea}/>
                </div>
            }
        </div>
    </div>
  );
}

export default App;
