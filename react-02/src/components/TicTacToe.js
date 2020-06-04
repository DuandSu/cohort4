import React from 'react';

import './TicTacToe.css';

function TicTacToe(props) {

    return (
        <div>
            <div className="AppTicTacToe">
                <p>
                    {props.sMessageArea}
                </p>
            </div>
        </div>
    );
}
    
export default TicTacToe;
