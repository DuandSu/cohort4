import React from 'react';

function ButtonsQueComp() {
    const txtColor = "blue";

    return (
        <div>
            <button className="clButton" todo="push">Put In</button>
            <button className="clButton" todo="pop">Take Out</button>
        </div>
    )
}

export default ButtonsQueComp;