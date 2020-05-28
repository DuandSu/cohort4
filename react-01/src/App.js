// import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.counter = 21;
        this.state = {
          myState: "TBD"
        };
    }

    onPushMe = () => {
        this.setState({
          myState: "now:" + this.counter++
        });
    }

    render () {
        return (
            <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1>I am in control of this application and my name is Duane Munro {this.counter} {this.state.myState}</h1>
                      <button onClick={this.onPushMe}>
                          Push Me
                      </button>
                      <p>
                          Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer">
                          Learn React
                      </a>
                  </header>
            </div>
        )
    }
}

export default App;
