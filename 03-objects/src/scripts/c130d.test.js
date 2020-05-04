import community from './community.js';
import c130d from './c130d.js'

global.fetch = require('node-fetch'); // Was Larry's solution vs the isomorphic-fetch solution that I found.

import c920 from './fetch.js'

// import "isomorphic-fetch";

let consoleLog = [];
let consoleLine = 0;

const url = 'http://localhost:5000/';
const urlBad = 'http://localhost:4000/';
// const urlBad = 'https://192.168.0.69';

test('130d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('130d: Play Area with Try Catch Block and scope references', () => {
    
    let testScope = function (xParam) {

        consoleLog[consoleLine++] = "Global Entered testScope Function = " + xGlobal;
        consoleLog[consoleLine++] = "Param Entered testScope Function = " + xParam;
        let xFunction = "xFunction";
        consoleLog[consoleLine++] = "Function Entered testScope Function = " + xFunction;
        try {
            let xTry = "xTry";
            consoleLog[consoleLine++] = "Global in Try = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Try = " + xParam;
            consoleLog[consoleLine++] = "Function in Try = " + xFunction;
            consoleLog[consoleLine++] = "Try in Try = " + xTry;
        }
        catch {
            let xCatch = "xCatch";
            consoleLog[consoleLine++] = "Global in Catch = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Catch = " + xParam;
            consoleLog[consoleLine++] = "Function in Catch = " + xFunction;
            consoleLog[consoleLine++] = "Try in Catch = " + xTry;
            consoleLog[consoleLine++] = "Catch in Catch = " + xCatch;
        }
        consoleLog[consoleLine++] = "Global Before Return = " + xGlobal;
        consoleLog[consoleLine++] = "Param Before Return = " + xParam;
        consoleLog[consoleLine++] = "Function Before Return = " + xFunction;
        // consoleLog[consoleLine++] = "Try Before Return = " + xTry; // ReferenceError: xTry is not defined. Not caught because after try - catch block.
        // consoleLog[consoleLine++] = "Catch Before Return = " + xCatch;
        return "xReturn";
    }
    
    consoleLog = [];
    consoleLine = 0;
    
    let xGlobal = "xGlobal";
    consoleLog[consoleLine++] = "Global Declaration = " + xGlobal;
    
    let xReturn = testScope("xParam");
    
    consoleLog[consoleLine++] = "Global After Exit testScope Function = " + xGlobal;
    consoleLog[consoleLine++] = "Return After Exit testScope Function = " + xReturn;
    
    expect(consoleLog[0]).toBe("Global Declaration = xGlobal");
    expect(consoleLog[1]).toBe("Global Entered testScope Function = xGlobal");
    expect(consoleLog[2]).toBe("Param Entered testScope Function = xParam");
    expect(consoleLog[3]).toBe("Function Entered testScope Function = xFunction");
    expect(consoleLog[4]).toBe("Global in Try = xGlobal");
    expect(consoleLog[5]).toBe("Param in Try = xParam");
    expect(consoleLog[6]).toBe("Function in Try = xFunction");
    expect(consoleLog[7]).toBe("Try in Try = xTry");
    expect(consoleLog[8]).toBe("Global Before Return = xGlobal");
    expect(consoleLog[9]).toBe("Param Before Return = xParam");
    expect(consoleLog[10]).toBe("Function Before Return = xFunction");
    // expect(consoleLog[8]).toBe("Try Before Return = xTry"); // ReferenceError: xTry is not defined. Not caught because after try - catch block.
    expect(consoleLog[11]).toBe("Global After Exit testScope Function = xGlobal");
    expect(consoleLog[12]).toBe("Return After Exit testScope Function = xReturn");
    
    testScope = function (xParam) {
        
        consoleLog[consoleLine++] = "Global Entered testScope Function = " + xGlobal;
        consoleLog[consoleLine++] = "Param Entered testScope Function = " + xParam;
        let xFunction = "xFunction";
        consoleLog[consoleLine++] = "Function Entered testScope Function = " + xFunction;
        try {
            let xTry = "xTry";
            consoleLog[consoleLine++] = "Global in Try = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Try = " + xParam;
            consoleLog[consoleLine++] = "Function in Try = " + xFunction;
            consoleLog[consoleLine++] = "Try in Try = " + xTry;
            
            // Trigger reference error to catch. Skips over code to end of try block
            // or simply jumps to catch block.
            
            console.log(yNotDefined);
            
            consoleLog[consoleLine++] = "Global Skipped after Error = " + xGlobal;
            consoleLog[consoleLine++] = "Param Skipped after Error = " + xParam;
            consoleLog[consoleLine++] = "Try Skipped after Error = " + xTry;
        }
        catch {
            let xCatch = "xCatch";
            consoleLog[consoleLine++] = "Global in Catch = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Catch = " + xParam;
            consoleLog[consoleLine++] = "Function in Catch = " + xFunction;
            // consoleLog[consoleLine++] = "Try in Catch = " + xTry; // ReferenceError: xTry is not defined. Not caught because after try block.
            consoleLog[consoleLine++] = "Catch in Catch = " + xCatch;
        }
        consoleLog[consoleLine++] = "Global Before Return = " + xGlobal;
        consoleLog[consoleLine++] = "Param Before Return = " + xParam;
        consoleLog[consoleLine++] = "Function Before Return = " + xFunction;
        // consoleLog[consoleLine++] = "Try Before Return = " + xTry; // ReferenceError: xTry is not defined. Not caught because after try block.
        // consoleLog[consoleLine++] = "Catch Before Return = " + xCatch;
        return "xReturn";
    }
    
    consoleLog = [];
    consoleLine = 0;
    
    consoleLog[consoleLine++] = "Global Declaration = " + xGlobal;
    
    xReturn = testScope("xParam");
    
    consoleLog[consoleLine++] = "Global After Exit testScope Function = " + xGlobal;
    consoleLog[consoleLine++] = "Return After Exit testScope Function = " + xReturn;
    
    expect(consoleLog[0]).toBe("Global Declaration = xGlobal");
    expect(consoleLog[1]).toBe("Global Entered testScope Function = xGlobal");
    expect(consoleLog[2]).toBe("Param Entered testScope Function = xParam");
    expect(consoleLog[3]).toBe("Function Entered testScope Function = xFunction");
    expect(consoleLog[4]).toBe("Global in Try = xGlobal");
    expect(consoleLog[5]).toBe("Param in Try = xParam");
    expect(consoleLog[6]).toBe("Function in Try = xFunction");
    expect(consoleLog[7]).toBe("Try in Try = xTry");
    expect(consoleLog[8]).toBe("Global in Catch = xGlobal");
    expect(consoleLog[9]).toBe("Param in Catch = xParam");
    expect(consoleLog[10]).toBe("Function in Catch = xFunction");
    // expect(consoleLog[8]).toBe("Try in Catch = xTry"); // ReferenceError: xTry is not defined. Not caught because after try block.
    expect(consoleLog[11]).toBe("Catch in Catch = xCatch");
    expect(consoleLog[12]).toBe("Global Before Return = xGlobal");
    expect(consoleLog[13]).toBe("Param Before Return = xParam");
    expect(consoleLog[14]).toBe("Function Before Return = xFunction");
    // expect(consoleLog[8]).toBe("Try Before Return = xTry"); // ReferenceError: xTry is not defined. Not caught because after try block.
    expect(consoleLog[15]).toBe("Global After Exit testScope Function = xGlobal");
    expect(consoleLog[16]).toBe("Return After Exit testScope Function = xReturn");
    
});

test('130d: Async ASP confirmAPIConnect', async (done) => {
    
    
    let data = await c130d.confirmAPIConnect (urlBad);
    expect(data.status).not.toBe(200);
    
    data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    data = await c130d.confirmAPIConnect (url);
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    data = await c920.postData(url + 'add', canada.cityList[0]);
    expect(data.status).toEqual(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    expect(data.length).toBe(1); 
    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(1);
    
    data = await c130d.confirmAPIConnect (url);
    expect(data.status).toBe(200);
    expect(data.length).toBe(1); 
    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(1);
    
    done();
});

test('130d: Async ASP create and delete APICommunity', async (done) => {
    
    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    
    data = await c130d.createAPICommunity (url, canada.cityList[0]);
    expect(data.status).toBe(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    data = await c130d.deleteAPICommunity (url);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0); 
    
    done();
});

    
test('130d: Async ASP create and delete APICity', async (done) => {
        
    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);

    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (url, canada.cityList[0]);
    expect(data.status).toBe(200);
    
    let createResult = canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    expect(createResult).toEqual([1,1]);
    
    let newIndex = createResult[0];
    let newKey = createResult[1];
    
    data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toBe(200);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data[newIndex].name).toBe("Calgary");
    expect(data[newIndex].latitude).toBe(51.0447);
    expect(data[newIndex].longitude).toBe(-114.0719);
    expect(data[newIndex].population).toBe(1547484);
    expect(data[newIndex].key).toBe(newKey);
    expect(data[0].nextKey).toBe(2);

    data = await c130d.deleteAPICity (url, canada.cityList[1]);
    expect(data.status).toBe(200);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data.length).toBe(1);
    expect(data[0].nextKey).toBe(2);

    let keyDel = {};
    keyDel.key = newKey;

    data = await c920.postData(url + 'read', keyDel);
    expect(data.status).toEqual(400);

    data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toBe(200);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data[newIndex].name).toBe("Calgary");
    expect(data[newIndex].key).toBe(newKey);
    expect(data[0].nextKey).toBe(2);

    done();

});