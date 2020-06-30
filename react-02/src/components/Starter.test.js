import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';
import Starter from './Starter.js'

let consoleLog = [];
let consoleLine = 0;

const url = 'http://localhost:5000/';
const urlBad = 'http://localhost:4000/';
// const urlBad = 'https://192.168.0.69';

test('Starter: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('130d: Learn', () => {
    let appKey = "stater";
    let messageArea = "Call Application starter";
    render(<Starter sMessageArea={messageArea} key={appKey}/>);
    // render(<Starter />);

    screen.getByText(/learn react/i);
    screen.getByText(/Call Application starter/i);

});

/*
    utility functions to save tons of code
*/
function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
}

function updateValue(name, value) {
    document.querySelector(`[name=${name}]`).value = value;
}

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}