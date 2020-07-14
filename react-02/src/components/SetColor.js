import React from 'react';

function SetColor(props) {

    return (
        <div>
            <div>
                <h1 style={{color: `${props.ptxtColor}`}}>{props.sMessageArea} for Choosing Title/Label Color - Competency 140D</h1>
            </div>
            <div>
                <select id="selColor" onChange={props.onColClick}>
                    <option value="">Select Color</option>
                    <option value="#a9c2c0">Default</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="yellowgreen">Yellow Green</option>
                </select>
            </div>
        </div>
    )
}

export default SetColor;