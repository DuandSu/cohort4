import React from 'react';

function SetCommunity(props) {

    return (
        <div id="idAddCom" className="divAddCom divCCBlk">
            <label htmlFor="inputNewCom">Enter Name of Community: </label>
            <input id="inputNewCom" type="text"></input>
            <button id="btnCreateCom" className="btncc" type="button" onClick={props.onclkCreateCom}>Create</button>
            <button id="btnCancelCom" className="btncc" type="button" onClick={props.onclkCancelCom}>Cancel</button>
        </div>    
    );
}

export default SetCommunity;