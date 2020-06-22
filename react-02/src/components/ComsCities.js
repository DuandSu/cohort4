import React from 'react';
import ReactDOM from 'react-dom';
import './ComsCities.css';
import community from '../scripts/community.js';
import c130d from '../scripts/c130d.js';
import c920 from '../scripts/fetch.js';
import SetCommunity from './SetCommunity';
import AddCity from './AddCity';

class ComsCities extends React.Component {

    constructor(props) {
        super(props);
        this.newCommunity = null;
        this.state = {
            msgArea: "",
            divBlock: null,
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
        
        this.newCommunity = await c130d.createNewCommunity(this);
        
        if (this.newCommunity.isMessage()) {
            tmpMsg += this.newCommunity.getMessages();
            this.newCommunity.resetMessage();
        }
        // document.getElementById("h4Community").textContent = "Community: " + this.newCommunity.name;
        // document.getElementById("inputNewCom").value = "";

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

    btnAddCity = async (e) => {
        this.setDivBlock("AddCity");
    }

    onChgselectCity = async (e) => {
        if(document.getElementById("selectCity").value === "srcAddCity")
            this.setDivBlock("AddCity");
    }

    btnCreateCity = async (e) => {
            
        //
        // Add City.
        //

        let tmpMsg = "";

        if (this.newCommunity != null) {
            this.newCommunity = await c130d.createNewCity(this.newCommunity, this);
    
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

    btnCancelCity = async (e) => {
        document.getElementById("selectCity").value = "srcSelect";
        this.setDivBlock("ClrAddCity");
    }    

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

    displayMessage = (msg) => {

        let tmpMsg = msg;
        this.setState({
            msgArea: tmpMsg,
        });  

    }

    setDivBlock = (setDvBlkFlg) => {

        if (setDvBlkFlg  === "SetCommunity") {
            this.setState({
                divBlock: (

                    <SetCommunity 
                        onclkCreateCom={() => this.btnCreateCom()}
                        onclkCancelCom={() => this.btnCancelCom()}
                    />

                ),
            }); 
        }
        else if (setDvBlkFlg  === "AddCity") {
            this.setState({
                divBlock: (

                    <AddCity 
                        onclkCreateCity={() => this.btnCreateCity()}
                        onclkCancelCity={() => this.btnCancelCity()}
                    />

                ),
            });
        }
        else if (setDvBlkFlg  === "ClrAddCity" || setDvBlkFlg  === "ClrSetCommunity") {
            this.setState({
                divBlock: (
                    <div></div>
                ),
            });
        }
    }
    
    // 
    // First: Confirm API is available.
    //
     
    async componentDidMount () {

        let tmpMsg = "";
        let data = await c130d.confirmAPIConnect(c130d.url);
        if (data.status === 200) {
            this.newCommunity = await c130d.loadAPICommunity(c130d.url, this);

            if (this.newCommunity.name !== "MessageOnly") {
                if (this.newCommunity.isMessage()) this.newCommunity.resetMessage();
                this.newCommunity.addMessage("Welcome to Communities and Cities!");
                this.newCommunity.addMessage("Enjoy your experience and have a GREAT day.");
            }

            if (this.newCommunity.isMessage()) {
                tmpMsg += this.newCommunity.getMessages();
                this.newCommunity.resetMessage();
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

        } else {
            tmpMsg = "The API is NOT available. Close browser and try again later!";    

            this.setState({
                msgArea: tmpMsg,
            });        
        }
    }

    render() {

        return (
            <section className ="sectionMain" onClick={this.secMain}>
                <h1>Welcome to the Community and City</h1>
                <div className="divComActions divCCBlk">
                    <div className="divCitySelect">
                        <label htmlFor="selectCity">City Name: </label>
                        <select id="selectCity" onChange={this.onChgselectCity}>
                            <option value="srcSelect">Select City</option>
                            <option value="srcAddCity">Add New City</option>
                            {this.state.srcCityList}
                        </select>
                    </div>
                    <div className="divCityActions">
                        <label htmlFor="inputAmt">Population: </label>
                        <input id="inputAmt" type="number"></input>
                        {/* <input id="inputAmt" type="number" value="0"></input> */}
                        <button id="btnAddCity" className="btncc" type="button" onClick={this.btnAddCity}>Add New City</button>
                        <button id="btnDelCity" className="btncc" type="button" onClick={this.btnDelCity}>Delete</button> 
                        <button id="btnMovedIn" className="btncc" type="button" onClick={this.btnMovedIn}>Moved In</button>
                        <button id="btnMovedOut" className="btncc" type="button" onClick={this.btnMovedOut}>Moved Out</button>
                    </div>
                    <p id="messageArea" position="absolute">{this.state.msgArea}</p>
                </div>
                <div>{this.state.divBlock}</div>
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
