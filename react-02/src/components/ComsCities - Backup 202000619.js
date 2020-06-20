import React from 'react';
import ReactDOM from 'react-dom';
import './ComsCities.css';
import community from '../scripts/community.js';
import c130d from '../scripts/c130d.js';
import c920 from '../scripts/fetch.js';

class ComsCities extends React.Component {

    constructor(props) {
        super(props);
        this.newCommunity = null;
        this.state = {
            msgArea: "",
            liCityList: null,
            liLatList: null,
            liLongList: null,
            liPopList: null,
            liSizeList: null,
            liHemList: null,
            liMaxList: null,
            srcCityList: null,
        };
    }

    btnCreateCom = async (e) => {

        let tmpMsg = "";
        
        this.newCommunity = await c130d.createNewCommunity();
        // this.newCommunity = await c130d.createNewCommunity(this.displayMessage);
        
        if (this.newCommunity.isMessage()) {
            tmpMsg += this.newCommunity.getMessages();
            this.newCommunity.resetMessage();
        }
        // document.getElementById("h4Community").textContent = "Community: " + this.newCommunity.name;
        document.getElementById("inputNewCom").value = "";
        
        this.setState({
            msgArea: tmpMsg,
        });    
    }

    btnCancelCom = (e) => {

        document.getElementById("inputNewCom").value = "";

        let tmpMsg = "Create Community cancelled. To proceed, you must first enter a name for your Community!";
        this.setState({
            msgArea: tmpMsg,
        });
    }

    secMain = (e) => {

        if (e.target.nodeName !== 'BUTTON') {

            let tmpMsg = "";
            this.setState({
                msgArea: tmpMsg,
            });
        }

    }

    displayMessage (msg) {

        let tmpMsg = msg;
        this.setState({
            msgArea: tmpMsg,
        });  

    }

    btnAddCity = async (e) => {
            
        //
        // Add City.
        //

        let tmpMsg = "";

        if (this.newCommunity != null) {
            this.newCommunity = await c130d.createNewCity(this.newCommunity);
    
            if (this.newCommunity.isMessage()) {
                tmpMsg += this.newCommunity.getMessages();
                this.newCommunity.resetMessage();
            }

            if (this.newCommunity.allLists.length === 0) {
                this.setState({
                    msgArea: tmpMsg,
                });
            }
            else {
                this.setState({
                    msgArea: tmpMsg,
                    liCityList: this.newCommunity.allLists[0],
                    liLatList: this.newCommunity.allLists[1],
                    liLongList: this.newCommunity.allLists[2],
                    liPopList: this.newCommunity.allLists[3],
                    liSizeList: this.newCommunity.allLists[4],
                    liHemList: this.newCommunity.allLists[5],
                    liMaxList: this.newCommunity.allLists[6],
                    srcCityList: this.newCommunity.allLists[7],
                });
            }
            
        } else {
            let tmpMsg = "Please first enter a name for your Community!";
            this.setState({
                msgArea: tmpMsg,
            });            
        }

    };
    
    btnDelCity = async (e) => {
            
        //
        // Delete City.
        //

        let tmpMsg = "";

        if (this.newCommunity != null) {
            this.newCommunity = await c130d.deleteCity(this.newCommunity);

            if (this.newCommunity.isMessage()) {
                tmpMsg += this.newCommunity.getMessages();
                this.newCommunity.resetMessage();
            }

            if (this.newCommunity.allLists.length === 0) {
                this.setState({
                    msgArea: tmpMsg,
                });
            }
            else {
                this.setState({
                    msgArea: tmpMsg,
                    liCityList: this.newCommunity.allLists[0],
                    liLatList: this.newCommunity.allLists[1],
                    liLongList: this.newCommunity.allLists[2],
                    liPopList: this.newCommunity.allLists[3],
                    liSizeList: this.newCommunity.allLists[4],
                    liHemList: this.newCommunity.allLists[5],
                    liMaxList: this.newCommunity.allLists[6],
                    srcCityList: this.newCommunity.allLists[7],
                });
            }
            
        } else {
            let tmpMsg = "Please first enter a name for your Community!";
            this.setState({
                msgArea: tmpMsg,
            });            
        }

    };

    btnMovedIn = async (e) => {
            
        //
        // Moved Into City.
        //

        let tmpMsg = "";

        if (this.newCommunity != null) {
            this.newCommunity = await c130d.actionMoved("IN", this.newCommunity);

            if (this.newCommunity.isMessage()) {
                tmpMsg += this.newCommunity.getMessages();
                this.newCommunity.resetMessage();
            }

            if (this.newCommunity.allLists.length === 0) {
                this.setState({
                    msgArea: tmpMsg,
                });
            }
            else {
                this.setState({
                    msgArea: tmpMsg,
                    liCityList: this.newCommunity.allLists[0],
                    liLatList: this.newCommunity.allLists[1],
                    liLongList: this.newCommunity.allLists[2],
                    liPopList: this.newCommunity.allLists[3],
                    liSizeList: this.newCommunity.allLists[4],
                    liHemList: this.newCommunity.allLists[5],
                    liMaxList: this.newCommunity.allLists[6],
                    srcCityList: this.newCommunity.allLists[7],
                });
            }
            
        } else {
            let tmpMsg = "Please first enter a name for your Community!";
            this.setState({
                msgArea: tmpMsg,
            });            
        }

    };

    btnMovedOut = async (e) => {
            
        //
        // Moved Out of City.
        //

        let tmpMsg = "";

        if (this.newCommunity != null) {
            this.newCommunity = await c130d.actionMoved("OUT", this.newCommunity);

            if (this.newCommunity.isMessage()) {
                tmpMsg += this.newCommunity.getMessages();
                this.newCommunity.resetMessage();
            }

            if (this.newCommunity.allLists.length === 0) {
                this.setState({
                    msgArea: tmpMsg,
                });
            }
            else {
                this.setState({
                    msgArea: tmpMsg,
                    liCityList: this.newCommunity.allLists[0],
                    liLatList: this.newCommunity.allLists[1],
                    liLongList: this.newCommunity.allLists[2],
                    liPopList: this.newCommunity.allLists[3],
                    liSizeList: this.newCommunity.allLists[4],
                    liHemList: this.newCommunity.allLists[5],
                    liMaxList: this.newCommunity.allLists[6],
                    srcCityList: this.newCommunity.allLists[7],
                });
            }
            
        } else {
            let tmpMsg = "Please first enter a name for your Community!";
            this.setState({
                msgArea: tmpMsg,
            });            
        }

    };

    // 
    // First: Confirm API is available.
    //
     
    async componentDidMount () {

        let tmpMsg = "";
        let data = await c130d.confirmAPIConnect(c130d.url);

        if (data.status === 200) {
            this.newCommunity = await c130d.loadAPICommunity(c130d.url);

            if (this.newCommunity.name !== "MessageOnly") {
                if (this.newCommunity.isMessage()) this.newCommunity.resetMessage();
                this.newCommunity.addMessage("Welcome to Communities and Cities!");
                this.newCommunity.addMessage("Enjoy your experience and have a GREAT day.");
            }

            if (this.newCommunity.isMessage()) {
                tmpMsg += this.newCommunity.getMessages();
                this.newCommunity.resetMessage();
            }

        } else {
            tmpMsg = "The API is NOT available. Close browser and try again later!";    
        }

        this.setState({
            msgArea: tmpMsg,
            liCityList: this.newCommunity.allLists[0],
            liLatList: this.newCommunity.allLists[1],
            liLongList: this.newCommunity.allLists[2],
            liPopList: this.newCommunity.allLists[3],
            liSizeList: this.newCommunity.allLists[4],
            liHemList: this.newCommunity.allLists[5],
            liMaxList: this.newCommunity.allLists[6],
            srcCityList: this.newCommunity.allLists[7],
        });
    }

    render() {

        return (
            <section className ="sectionMain" onClick={this.secMain}>
                <h1>Welcome to the Community and City</h1>
                <div id="idAddCom" className="divAddCom divCCBlk">
                    <label htmlFor="inputNewCom">Enter Name of Community: </label>
                    <input id="inputNewCom" type="text"></input>
                    <button id="btnCreateCom" className="btncc" type="button" onClick={this.btnCreateCom}>Create</button>
                    <button id="btnCancelCom" className="btncc" type="button" onClick={this.btnCancelCom}>Cancel</button>
                </div>
                <div className="divComActions divCCBlk">
                    <div className="divCitySelect">
                        <label htmlFor="selectCity">City Name: </label>
                        <select id="selectCity">
                            <option value="srcSelect">Select City</option>
                            <option value="srcAddCity">Add New City</option>
                            {this.state.srcCityList}
                        </select>
                    </div>
                    <div className="divCityActions">
                        <label htmlFor="inputAmt">Population: </label>
                        <input id="inputAmt" type="number"></input>
                        {/* <input id="inputAmt" type="number" value="0"></input> */}
                        <button id="btnAddCity" className="btncc" type="button">Add New City</button>
                        <button id="btnDelCity" className="btncc" type="button" onClick={this.btnDelCity}>Delete</button> 
                        <button id="btnMovedIn" className="btncc" type="button" onClick={this.btnMovedIn}>Moved In</button>
                        <button id="btnMovedOut" className="btncc" type="button" onClick={this.btnMovedOut}>Moved Out</button>
                    </div>
                    <p id="messageArea" position="absolute">{this.state.msgArea}</p>
                </div>
                <div id="idAddCity" className="divAddCity divCCBlk">
                    <label htmlFor="inputNewCity">Enter New City: </label>
                    <input id="inputNewCity" type="text"></input>
                    <label htmlFor="inputNewPop">Enter Population: </label>
                    <input id="inputNewPop" type="number"></input>
                    <button id="btnCreateCity" className="btncc" type="button" onClick={this.btnAddCity}>Create</button><br></br>
                    <label htmlFor="inputNewLat">Enter Latitude: </label>
                    <input id="inputNewLat" type="number"></input>
                    <label htmlFor="inputNewLong">Enter Longitude: </label>
                    <input id="inputNewLong" type="number"></input>
                    <button id="btnCancelCity" className="btncc" type="button">Cancel</button>
                </div>
                <div id="idCitys" className="divCommunity">
                    <h4 id="h4Community" className="h4ComTitle divCCBlk">Community: NOT Entered Yet!!</h4>
                    <div className="divCityList">
                        <section className="sectionCityList">
                            <h4>City</h4>
                            <ul id="ulCityList">
                                {this.state.liCityList}
                                <li id="idSumTxt" className="liSum">Totals</li>
                            </ul>
                        </section>
                        <aside className="asideLatList">
                            <h4>Latitude</h4>
                            <ul id="ulLatList">
                                {this.state.liLatList}
                                <li className="liSum">.</li>
                            </ul>
                        </aside>
                        <aside className="asideLongList">
                            <h4>Longitude</h4>
                            <ul id="ulLongList">
                                {this.state.liLongList}
                                <li className="liSum">.</li>
                            </ul>
                        </aside>
                        <aside className="asidePopList">
                            <h4>Population</h4>
                            <ul id="ulPopList">
                                {this.state.liPopList}
                                <li id="idSum" className="liSum">0</li>
                            </ul>
                        </aside>
                        <aside className="asideSizeList">
                            <h4>Size</h4>
                            <ul id="ulSizeList">
                                {this.state.liSizeList}
                                <li className="liSum">.</li>
                            </ul>
                        </aside>
                        <aside className="asideHemList">
                            <h4>N/S</h4>
                            <ul id="ulHemList">
                                {this.state.liHemList}
                                <li className="liSum">.</li>
                            </ul>
                        </aside>
                        <aside className="asideMaxList">
                            <h4>Max N/S</h4>
                            <ul id="ulMaxList">
                                {this.state.liMaxList}
                                <li className="liSum">.</li>
                            </ul>
                        </aside>
                    </div>
                </div>

            </section>      
        );
    }
}

export default ComsCities;
