import React from 'react';
import './App.css';
import DispInvComp from './components/DispInvComp';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.compDict = {};
      this.custDict = {};
      this.prodDict = {};
      this.invToPrint = {}
      this.state = {
        invToPrint: {},
    };
  }

  async getData(url = '', data = {}) {
    // Default options are marked with *

    try {

        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });

        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;

        return json;
        
    } catch (err) {
        
        const catchErr = {};
        catchErr.status = err.name;
        catchErr.statusText = err.message;

        return catchErr;

    }
  }

  async componentDidMount () {
    let data;
    // data = await this.getData('http://127.0.0.1:5000/comp');
    this.compDict = await this.getData('http://localhost:5000/comp');
    console.log(this.compDict);
    this.custDict = await this.getData('http://localhost:5000/cust');
    console.log(this.custDict);
    this.prodDict = await this.getData('http://localhost:5000/prod');
    console.log(this.prodDict);
  }

  dispInv = async (e) => {
    let invNo = document.getElementById("inputAmt").value;
    this.invToPrint = await this.getData('http://localhost:5000/inv/' + invNo);
    delete this.invToPrint["status"]
    delete this.invToPrint["statusText"]
    this.setState({
      invToPrint: this.invToPrint,
    }); 
  }

  render() {

    return (
      <div className="App">
          <p>
            Type in an Invoice Number to display the invoice.
          </p>
          <label htmlFor="inputAmt">Invoice Number: </label>
          <input id="inputAmt" type="number"></input>
          <button id="btnDispInv" type="button" onClick={this.dispInv}>Display Invoice</button>
          <div>
            <DispInvComp 
                pInvToPrint={this.state.invToPrint}
            />
          </div>
      </div>
    );
  }
}

export default App;
