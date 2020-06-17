import React from 'react';
import ReactDOM from 'react-dom';
import './ComsCities.css';
import community from '../scripts/community.js';
import c130d from '../scripts/c130d.js';
import c920 from '../scripts/fetch.js';

class ComsCities extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           msgArea: "",
        };
    }
  
    // 
    // First: Confirm API is available.
    //
     
    async componentDidMount () {

        let tmpMsg = "";

        let data = await c130d.confirmAPIConnect (c130d.url);

        if (data.status === 200) {
            tmpMsg = "The API is DEFINITELY available!";    
            let newCommunity = await c130d.loadAPICommunity(c130d.url);
            if (newCommunity != 0) {
                if (newCommunity.isMessage()) newCommunity.resetMessage();
    
                newCommunity.addMessage("Welcome to Communities and Cities!");
                newCommunity.addMessage("Enjoy your experience and have a GREAT day.");
    
                //
                // Visual Setup for web page complete. Display Greeting Messages.
                //
    
                if (newCommunity.isMessage()) {
                    tmpMsg = newCommunity.getMessages();
                    newCommunity.resetMessage();
                }
            } else {
    
                //
                // Event listener for the Add New Community button.
                //
    
                // btnCreateCom.addEventListener('click', (async e => {
    
                //     newCommunity = await c130d.createNewCommunity();
                    
                // }));
    
                // //
                // // Event listener for the Add New Community button.
                // //
    
                // btnCancelCom.addEventListener('click', (e => {
    
                //     inputNewCom.value = "";
                //     messageArea.textContent = "Create Community cancelled. To proceed, you must first enter a name for your Community!";
                    
                // }));
            }
        } else {
            tmpMsg = "The API is NOT available. Close browser and try again later!";    
        }

        this.setState({
            msgArea: tmpMsg,
        });
    
    }

    render() {

        return (
            <section className ="sectionMain">
                <h1>Welcome to the Community and City</h1>
                <div id="idAddCom" className="divAddCom">
                    <label htmlFor="inputNewCom">Enter Name of Community: </label>
                    <input id="inputNewCom" type="text"></input>
                    <button id="btnCreateCom" type="button">Create</button>
                    <button id="btnCancelCom" type="button">Cancel</button>
                </div>
                <div className="divComActions">
                    {/* <div class="divCitySelect">
                        City Name: <select id=selectCity>
                            <option value="srcSelect">Select City</option>
                            <option value="srcAddCity">Add New City</option>
                            <!-- <option value="srcCity1">Calgary</option>
                            <option value="srcCity2">Vulcan</option>
                            <option value="srcCity3">Kirkaldy</option> -->
                        </select>
                    </div> */}
                    {/* <div class="divCityActions">
                        Population: <input id="inputAmt" type=number value=0>
                        <button id="btnAddCity" type="button">Add New City</button>
                        <button id="btnDelCity" type="button">Delete</button>
                        <button id="btnMovedIn" type="button">Moved In</button>
                        <button id="btnMovedOut" type="button">Moved Out</button>
                    </div> */}
                    <p id="messageArea" position="absolute">{this.state.msgArea}</p>
                </div>
            </section>      
        );
    }
}

export default ComsCities;
