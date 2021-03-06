//
// This is Competency 140B.
//
// Fun Improvements suggested by the React Competency listed in order of increasing difficulty:
// 
//  1. Display the location for each move in the format (col, row) in the move history list. Status: DONE!
//  2. Bold the currently selected item in the move list. Status: Do NOT see value. NOT Doing!
//  3. Rewrite Board to use two loops to make the squares instead of hardcoding them. Status: Do NOT see value. NOT Doing!
//  4. Add a toggle button that lets you sort the moves in either ascending or descending order. Status: Do NOT see value. NOT Doing!
//  5. When someone wins, highlight the three squares that caused the win. Status: DONE! Changed color to GREEN.
//  6. When no one wins, display a message about the result being a draw. Status: DONE!
//
//  Investigate error: logo.5d5d9eef.svg:1 GET http://localhost:3000/static/media/logo.5d5d9eef.svg net::ERR_CONNECTION_REFUSED

import React, { useState } from 'react';
import ThemeContext from './components/ThemeContext';

import Starter from './components/Starter';
import TicTacToe from './components/TicTacToe';
import ComsCities from './components/ComsCities';
import Play from './components/Play';
import Clock from './components/Clock';
import LinkedList from './components/LinkedList';
import QueCom from './components/QueCom';
import SetColor from './components/SetColor';
import CoderbyteTTT from './components/CoderbyteTTT';
  
import './App.css';

import shipST from './svg/star-trek-svgrepo-com.svg';
import insigniaST from './svg/section_31_geeksvgs.com.svg';
import insigniaKL1 from './svg/star_trek_klingon_insignia__geeksvgs.com.svg';
import insigniaKL2 from './svg/star_trek_33_geeksvgs.com.svg';
import kittyKL from './svg/klingon_kitty_geeksvgs.com.svg';
import spockHI from './svg/star_trek_27_geeksvgs.com.svg';

function App() {
  
  const [messageArea, setMessage] = useState("Edit src/App.js and save to reload.");
  const [appKey, setAppKey] = useState("starter");
  const [txtColor, settxtColor] = useState("#a9c2c0");

  const onPushMe = (e) => {

    const tmpAppKey = e.target.getAttribute("ikey");
    setMessage(`Called Application ${tmpAppKey}`);
    setAppKey(tmpAppKey);

  }

  const onSelectColor = (e) => {

    settxtColor(document.getElementById("selColor").value);
    setAppKey("starter");

  }

  let output = [];
  if (appKey === "starter") {
      output.push(<Starter sMessageArea={messageArea} key={appKey}/>);
  }
  else if (appKey === "tictactoe") {
      output.push(<TicTacToe sMessageArea={messageArea} key={appKey}/>);
  }
  else if (appKey === "play") {
    output.push(<Play sMessageArea={messageArea} key={appKey}/>);
  }
  else if (appKey === "coderbytettt") {
    output.push(<CoderbyteTTT sMessageArea={messageArea} key={appKey}/>);
  }
  else if (appKey === "comscities") {
    output.push(
      <ThemeContext.Provider value={`${txtColor}`} key="ComsCities">
        <ComsCities sMessageArea={messageArea} key={appKey}/>
      </ThemeContext.Provider>);
  }
  else if (appKey === "linkedlist") {
    output.push(
      <ThemeContext.Provider value={`${txtColor}`} key="LinkedList">
        <LinkedList 
          sMessageArea={messageArea} 
          key={appKey} 
        />
      </ThemeContext.Provider>);
  }
  else if (appKey === "queues") {
    output.push(
      <ThemeContext.Provider value={`${txtColor}`} key="QueCom">
        <QueCom 
          sMessageArea={messageArea} 
          key={appKey} 
        />
      </ThemeContext.Provider>);
  }
  else if (appKey === "setcolor") {
    output.push(
      <SetColor 
        sMessageArea={messageArea} 
        key={appKey} 
        ptxtColor={txtColor}
        onColClick={onSelectColor}
      />);
  }
  else {
    output.push(<Starter sMessageArea={messageArea} key={appKey}/>);
  }

  return (
    <div>
        <div className="App-svg-area">
            <div>
              <img src={shipST} className="App-svg1" alt="shipST" ikey="starter" onClick={onPushMe} />
            </div>
            <div>
              <img src={insigniaST} className="App-svg2" alt="insigniaST" ikey="tictactoe" onClick={onPushMe} />
            </div>
            <div>
              <img src={insigniaKL1} className="App-svg3" alt="insigniaKL1" ikey="coderbytettt" onClick={onPushMe} />
            </div>
            <div>
              <img src={insigniaKL2} className="App-svg4" alt="insigniaKL2" ikey="comscities" onClick={onPushMe} />
            </div>
            <div>
              <img src={kittyKL} className="App-svg5" alt="kittyKL" ikey="linkedlist" onClick={onPushMe} />
            </div>
            <div>
              <img src={spockHI} className="App-svg6" alt="spockHI" ikey="queues" onClick={onPushMe} />
            </div>
              <Clock
                cClass={"App-svg7"}
                cKey={"setcolor"} 
                cOnPushMe={onPushMe}
              />
        </div>
        <div>
            <div>
              {output}
            </div>
        </div>
    </div>
  );
}

export default App;
