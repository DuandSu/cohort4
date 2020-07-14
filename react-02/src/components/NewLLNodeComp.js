import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function NewLLNodeComp(props) {

    const [msg, setMsg] = useState("");

    function get(id) {
        return document.getElementById(id).value;
    }

    function mySave() {
        const subject = get("idSubject");
        const amount = Number(get("idAmount"));

        if (!amount) {
            setMsg('You must enter an Numeric amount');
            return;
        }

        props.onSave(subject, amount);

    }

    return (
        <div className="clInnerBox" style={{color: `${React.useContext(ThemeContext)}`}}>
            <h1>New Subject Node</h1>
            <p id="messageArea">{msg}</p>
            <div>
                <label className="labelLL">Subject </label>
                <input id="idSubject"></input>
            </div>
            <div>
                <label className="labelLL">Amount </label>
                <input id="idAmount"></input>
            </div>

            <button className="clButton" onClick={mySave} >Save</button>
            <button className="clButton" todo="cancel">Cancel</button>
        </div>
    )
}

export default NewLLNodeComp;