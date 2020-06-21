import React from 'react';

function AddCity(props) {

    return (
        <div id="idAddCity" className="divAddCity divCCBlk">
            <label htmlFor="inputNewCity">Enter New City: </label>
            <input id="inputNewCity" type="text"></input>
            <label htmlFor="inputNewPop">Enter Population: </label>
            <input id="inputNewPop" type="number"></input>
            <button id="btnCreateCity" className="btncc" type="button" onClick={props.onclkCreateCity}>Create</button><br></br>
            <label htmlFor="inputNewLat">Enter Latitude: </label>
            <input id="inputNewLat" type="number"></input>
            <label htmlFor="inputNewLong">Enter Longitude: </label>
            <input id="inputNewLong" type="number"></input>
            <button id="btnCancelCity" className="btncc" type="button" onClick={props.onclkCancelCity}>Cancel</button>
        </div>
    );
}

export default AddCity;