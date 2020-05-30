import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';

class App extends React.Component {

  constructor() {
    super()
    this.state = {    
      appCounter: 0,
    }
  }

  onPushMe = () => {
    
    // let tempCounter = this.state.appCounter + 1;
    // this.setState({appCounter: tempCounter});

    this.setState((state) => ({
      appCounter: state.appCounter + 1
    }));
    
  }

  render() {
    return (
        <div>
          {this.state.appCounter % 2 !== 0
            ? <div>
                <
                  MyComponent whatToSay={"You are Awesome!"}
                    onPushMeAction={this.onPushMe}
                    myAppCounter={this.state.appCounter} 
                />              
                <    
                  OddComponent whatToSay={"I am defintely ODD!"}
                    onPushMeAction={this.onPushMe} 
                />
              </div>
            : <div>
                <
                  MyComponent whatToSay={"You are Awesome!"}
                    onPushMeAction={this.onPushMe}
                    myAppCounter={this.state.appCounter} 
                />              
                <
                  EvenComponent whatToSay={"I am EVEN!"}
                    onPushMeAction={this.onPushMe} 
                />
            </div>
          }
        </div>
    );
  }

  // {appCounter % 2 !== 0 &&
  //   <div>
  //     <    
  //       OddComponent whatToSay={"I am defintely ODD!"}
  //           onPushMeAction={onPushMe} 
  //     />
  //   </div>}
  //   {appCounter % 2 === 0 &&
  //   <div>
  //     <
  //       EvenComponent whatToSay={"I am EVEN!"}
  //           onPushMeAction={onPushMe} 
  //     />
  //   </div>}

}

export default App;
