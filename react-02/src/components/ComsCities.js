import React from 'react';
import './ComsCities.css';
  
function ComsCities(props) {

    return (
        <section className ="sectionMain">
            <h1>Welcome to the Community and City</h1>
            <div id="idAddCom" className="divAddCom">
                <label for="inputNewCom">Enter Name of Community: </label>
                <input id="inputNewCom" type="text"></input>
                <button id="btnCreateCom" type="button">Create</button>
                <button id="btnCancelCom" type="button">Cancel</button>
		    </div>
        </section>      
    );
}

export default ComsCities;
