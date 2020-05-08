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

test('130d: Play Area with Spread Operator', () => {

    const ctrl = {key:0, name:"Canada", nextKey:1};
    expect(ctrl.key).toBe(0);
    expect(ctrl.nextKey).toBe(1);
    expect(ctrl.name).toBe("Canada");
    
    let newCtrl = {...ctrl};
    expect(newCtrl.key).toBe(0);
    expect(newCtrl.nextKey).toBe(1);
    expect(newCtrl.name).toBe("Canada");
    expect(newCtrl).toEqual({key:0, name:"Canada", nextKey:1});

    const data = [
        {key:0, name:"Canada", nextKey:1},
        {key:1, name:"Calgary", population:1}];

    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(1);
    expect(data[0].name).toBe("Canada");
    
    newCtrl = {...data[0]};
    expect(newCtrl.key).toBe(0);
    expect(newCtrl.nextKey).toBe(1);
    expect(newCtrl.name).toBe("Canada");
    expect(newCtrl).toEqual({key:0, name:"Canada", nextKey:1});
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

test('Larry: test postdata gives a good error if api server not started', async () => {
    
    async function postDataLarry(url = '', data = {}) {
        // Default options are marked with *
        
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
        
        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        
        return json;
    }

    try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await postDataLarry(url);
        // The above line should throw an error and we should never get to the next line
        expect("").toBe("This bad port # should have caused an exception.");
    }
    catch (e) {
        expect(e.code).toBe("ECONNREFUSED");
    }
    finally {
    }
});

test('Duane: test postdata gives a good error if api server not started', async () => {
    
    // try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await c920.postData(url);
        // The above line should throw an error and we should never get to the next line
        expect(data.status).toBe("FetchError");
        // expect("").toBe("This bad port # should have caused an exception.");
    // }
    // catch (e) {
    //     expect(e.code).toBe("ECONNREFUSED");
    // }
    // finally {
    // }

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
    expect(data[0].name).toBe("Canada");
    
    data = await c130d.deleteAPICommunity (url);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0); 
    
    done();
});


test('130d: Async ASP create, delete and update APICity', async (done) => {
    
    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (url, canada.cityList[0]);
    expect(data.status).toBe(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[0].name).toBe("Canada");
    
    let createResult = canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    expect(createResult).toEqual([1,1]);
    
    let newIndex = createResult[0];
    let newKey = createResult[1];
    
    data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toBe(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data[0].name).toBe("Canada");
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

    expect(canada.movedOutOfCity(1, 484)).toBe(1547000);
    data = await c130d.updateAPICity (url, canada.cityList[1]);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    expect(data[1].name).toBe("Calgary");
    expect(data[1].population).toBe(1547000);
    
    expect(canada.movedIntoCity(1, 1000)).toBe(1548000);
    data = await c130d.updateAPICity (url, canada.cityList[1]);
    expect(data.status).toEqual(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    expect(data[1].name).toBe("Calgary");
    expect(data[1].population).toBe(1548000);
    
    data = await c130d.getAPICity (url, canada.cityList[1]);
    expect(data.status).toEqual(200);

    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");
    expect(data[0].population).toBe(1548000);

    data = await c130d.getAllAPI (url);
    expect(data.status).toEqual(200);    

    expect(data.length).toBe(2);
    expect(data[0].name).toBe("Canada");
    expect(data[0].nextKey).toBe(2);
    expect(data[1].name).toBe("Calgary");
    expect(data[1].population).toBe(1548000);
    
    done();
    
});

test('130d: Test deleteLIfromUI from the DOM', () => {

    document.body.innerHTML =
        '<section class="sectionCityList">' +
            '<h4>City</h4>' +
            '<ul id="ulCityList">' +
                '<li id="liCity1" class="liOdd">Calgary</li>' +
                '<li id="liCity2" class="liEven">Vulcan</li>' +
                '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                '<li id="idSumTxt" class="liSum">Totals</li>' +
            '</ul>' +
        '</section>';

    expect(ulCityList.children.length).toBe(4);
    expect(c130d.deleteLIfromUI(ulCityList)).toBe(3);
    expect(ulCityList.children.length).toBe(1);
    expect(ulCityList.children[0].className).toBe("liSum");

});

test('130d: Test deleteCityList from the DOM', () => {

    document.body.innerHTML =

    '<div class="divCitySelect">' +
        'City Name: <select id=selectCity>' +
            '<option value="srcSelect">Select City</option>' +
            '<option value="srcAddCity">Add New City</option>' +
            '<option value="srcCity1">Calgary</option>' +
            '<option value="srcCity2">Vulcan</option>' +
            '<option value="srcCity3">Kirkaldy</option>' +
        '</select>' +
    '</div>' +
    '<div class="divCityList">' +
        '<section class="sectionCityList">' +
            '<h4>City</h4>' +
            '<ul id="ulCityList">' +
                '<li id="liCity1" class="liOdd">Calgary</li>' +
                '<li id="liCity2" class="liEven">Vulcan</li>' +
                '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                '<li id="idSumTxt" class="liSum">Totals</li>' +
            '</ul>' +
        '</section>' +
        '<aside class="asideLatList">' +
            '<h4>Latitude</h4>' +
            '<ul id="ulLatList">' +
                '<li id="liLat1" class="liOdd">51.0447</li>' +
                '<li id="liLat2" class="liEven">50.4038</li>' +
                '<li id="liLat3" class="liOdd">50.3367</li>' +
                '<li class="liSum">.</li>' +
            '</ul>' +
        '</aside>' +
        '<aside class="asideLongList">' +
            '<h4>Longitude</h4>' +
            '<ul id="ulLongList">' +
                '<li id="liLong1" class="liOdd">-114.0719</li>' +
                '<li id="liLong2" class="liEven">-113.2622</li>' +
                '<li id="liLong3" class="liOdd">-13.2380</li>' +
                '<li class="liSum">.</li>' +
            '</ul>' +
        '</aside>' +
        '<aside class="asidePopList">' +
            '<h4>Population</h4>' +
            '<ul id="ulPopList">' +
                '<li id="liPop1" class="liOdd">1,547,484</li>' +
                '<li id="liPop2" class="liEven">1,917</li>' +
                '<li id="liPop3" class="liOdd">20</li>' +
                '<li id="idSum" class="liSum">1,549,421</li>' +
            '</ul>' +
        '</aside>' +
        '<aside class="asideSizeList">' +
            '<h4>Size</h4>' +
            '<ul id="ulSizeList">' +
                '<li id="liSize1" class="liOdd">City</li>' +
                '<li id="liSize2" class="liEven">Town</li>' +
                '<li id="liSize3" class="liOdd">Hamlet</li>' +
                '<li class="liSum">.</li>' +
            '</ul>' +
        '</aside>' +
        '<aside class="asideHemList">' +
            '<h4>N/S</h4>' +
            '<ul id="ulHemList">' +
                '<li id="liHem1" class="liOdd">N</li>' +
                '<li id="liHem2" class="liEven">N</li>' +
                '<li id="liHem3" class="liOdd">N</li>' +
                '<li class="liSum">.</li>' +
            '</ul>' +
        '</aside>' +
        '<aside class="asideMaxList">' +
            '<h4>Max N/S</h4>' +
            '<ul id="ulMaxList">' +
                '<li id="liMax1" class="liOdd">N</li>' +
                '<li id="liMax2" class="liEven">.</li>' +
                '<li id="liMax3" class="liOdd">S</li>' +
                '<li class="liSum">.</li>' +
            '</ul>' +
        '</aside>' +
    '</div>';

    expect(ulCityList.children.length).toBe(4);
    expect(ulLatList.children.length).toBe(4);
    expect(ulLongList.children.length).toBe(4);
    expect(ulPopList.children.length).toBe(4);
    expect(ulSizeList.children.length).toBe(4);
    expect(ulHemList.children.length).toBe(4);
    expect(ulMaxList.children.length).toBe(4);
    expect(selectCity.children.length).toBe(5);
    
    expect(c130d.deleteCityList()).toBe(3);

    expect(ulCityList.children.length).toBe(1);
    expect(ulCityList.children[0].className).toBe("liSum");
    expect(ulLatList.children.length).toBe(1);
    expect(ulLatList.children[0].className).toBe("liSum");
    expect(ulLongList.children.length).toBe(1);
    expect(ulLongList.children[0].className).toBe("liSum");
    expect(ulPopList.children.length).toBe(1);
    expect(ulPopList.children[0].className).toBe("liSum");
    expect(ulSizeList.children.length).toBe(1);
    expect(ulSizeList.children[0].className).toBe("liSum");
    expect(ulHemList.children.length).toBe(1);
    expect(ulHemList.children[0].className).toBe("liSum");
    expect(ulMaxList.children.length).toBe(1);
    expect(ulMaxList.children[0].className).toBe("liSum");
    expect(selectCity.children.length).toBe(2);
    expect(selectCity.children[0].value).toBe("srcSelect");
    expect(selectCity.children[1].value).toBe("srcAddCity");
    expect(selectCity.children[2]).toBeUndefined();

});

test('130d: Test remove new City name div from DOM', () => {
document.body.innerHTML =
'<section class ="sectionMain">' +
    '<h1>Welcome to the Community and City</h1>' +
'   <div id=idAddCom class="divAddCom">' +
        'Enter Name of Community: <input id="inputNewCom" type=text>' +
        '<button id="btnCreateCom" type="button">Create</button>' +
        '<button id="btnCancelCom" type="button">Cancel</button>' +
    '</div>		' +
    '<div class="divComActions">' +
        '<div class="divCitySelect">' +
            'City Name: <select id=selectCity>' +
                '<option value="srcSelect">Select City</option>' +
                '<option value="srcAddCity">Add New City</option>' +
                '<option value="srcCity1">Calgary</option>' +
                '<option value="srcCity2">Vulcan</option>' +
                '<option value="srcCity3">Kirkaldy</option>' +
            '</select>' +
        '</div>' +
        '<div class="divCityActions">' +
            'Population: <input id="inputAmt" type=number value=0>' +
            '<button id="btnAddCity" type="button">Add New City</button>' +
            '<button id="btnDelCity" type="button">Delete</button>' +
            '<button id="btnMovedIn" type="button">Moved In</button>' +
            '<button id="btnMovedOut" type="button">Moved Out</button>' +
        '</div>' +
        '<p id="messageArea" position="absolute"></p>' +
    '</div>' +
    '<div id=idAddCity class="divAddCity">' +
        'Enter Name of New City: <input id="inputNewCity" type=text>' +
        '<button id="btnCreateCity" type="button">Create</button>' +
        '<button id="btnCancelCity" type="button">Cancel</button>' +
    '</div>' +
    '<div id=idAccts class="divCommunity">' +
        '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
        '<div class="divCityList">' +
            '<section class="sectionCityList">' +
                '<h4>City</h4>' +
                '<ul id="ulCityList">' +
                    '<li id="liCity1" class="liOdd">Calgary</li>' +
                    '<li id="liCity2" class="liEven">Vulcan</li>' +
                    '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                    '<li id="idSumTxt" class="liSum">Totals</li>' +
                '</ul>' +
            '</section>' +
            '<aside class="asideLatList">' +
                '<h4>Latitude</h4>' +
                '<ul id="ulLatList">' +
                    '<li id="liLat1" class="liOdd">51.0447</li>' +
                    '<li id="liLat2" class="liEven">50.4038</li>' +
                    '<li id="liLat3" class="liOdd">50.3367</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideLongList">' +
                '<h4>Longitude</h4>' +
                '<ul id="ulLongList">' +
                    '<li id="liLong1" class="liOdd">-114.0719</li>' +
                    '<li id="liLong2" class="liEven">-113.2622</li>' +
                    '<li id="liLong3" class="liOdd">-13.2380</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asidePopList">' +
                '<h4>Population</h4>' +
                '<ul id="ulPopList">' +
                    '<li id="liPop1" class="liOdd">1,547,484</li>' +
                    '<li id="liPop2" class="liEven">1,917</li>' +
                    '<li id="liPop3" class="liOdd">20</li>' +
                    '<li id="idSum" class="liSum">1,549,421</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideSizeList">' +
                '<h4>Size</h4>' +
                '<ul id="ulSizeList">' +
                    '<li id="liSize1" class="liOdd">City</li>' +
                    '<li id="liSize2" class="liEven">Town</li>' +
                    '<li id="liSize3" class="liOdd">Hamlet</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideHemList">' +
                '<h4>N/S</h4>' +
                '<ul id="ulHemList">' +
                    '<li id="liHem1" class="liOdd">N</li>' +
                    '<li id="liHem2" class="liEven">N</li>' +
                    '<li id="liHem3" class="liOdd">N</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideMaxList">' +
                '<h4>Max N/S</h4>' +
                '<ul id="ulMaxList">' +
                    '<li id="liMax1" class="liOdd">N</li>' +
                    '<li id="liMax2" class="liEven">.</li>' +
                    '<li id="liMax3" class="liOdd">S</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
        '</div>' +
    '</div>' +
'</section>';

    //
    // Initial setup required to handle the New City Name entry div.
    //
    // Expect the div Add City Name exists from original HTML. Then
    // delete it.
    //
    
    expect(document.getElementById("idAddCity")).not.toBeNull();
    idAddCity.parentElement.removeChild(idAddCity);
    expect(document.getElementById("idAddCity")).toBeNull();

});

test('130d: Async Test actionMoved interface to DOM', async (done) => {
    document.body.innerHTML =
    '<section class ="sectionMain">' +
        '<h1>Welcome to the Community and City</h1>' +
    '   <div id=idAddCom class="divAddCom">' +
            'Enter Name of Community: <input id="inputNewCom" type=text>' +
            '<button id="btnCreateCom" type="button">Create</button>' +
            '<button id="btnCancelCom" type="button">Cancel</button>' +
        '</div>		' +
        '<div class="divComActions">' +
            '<div class="divCitySelect">' +
                'City Name: <select id=selectCity>' +
                    '<option value="srcSelect">Select City</option>' +
                    '<option value="srcAddCity">Add New City</option>' +
                    '<option value="srcCity1">Calgary</option>' +
                    '<option value="srcCity2">Vulcan</option>' +
                    '<option value="srcCity3">Kirkaldy</option>' +
                '</select>' +
            '</div>' +
            '<div class="divCityActions">' +
                'Population: <input id="inputAmt" type=number value=0>' +
                '<button id="btnAddCity" type="button">Add New City</button>' +
                '<button id="btnDelCity" type="button">Delete</button>' +
                '<button id="btnMovedIn" type="button">Moved In</button>' +
                '<button id="btnMovedOut" type="button">Moved Out</button>' +
            '</div>' +
            '<p id="messageArea" position="absolute"></p>' +
        '</div>' +
        '<div id=idAddCity class="divAddCity">' +
            'Enter Name of New City: <input id="inputNewCity" type=text>' +
            '<button id="btnCreateCity" type="button">Create</button>' +
            '<button id="btnCancelCity" type="button">Cancel</button>' +
        '</div>' +
        '<div id=idAccts class="divCommunity">' +
            '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
            '<div class="divCityList">' +
                '<section class="sectionCityList">' +
                    '<h4>City</h4>' +
                    '<ul id="ulCityList">' +
                        '<li id="liCity1" class="liOdd">Calgary</li>' +
                        '<li id="liCity2" class="liEven">Vulcan</li>' +
                        '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                        '<li id="idSumTxt" class="liSum">Totals</li>' +
                    '</ul>' +
                '</section>' +
                '<aside class="asideLatList">' +
                    '<h4>Latitude</h4>' +
                    '<ul id="ulLatList">' +
                        '<li id="liLat1" class="liOdd">51.0447</li>' +
                        '<li id="liLat2" class="liEven">50.4038</li>' +
                        '<li id="liLat3" class="liOdd">50.3367</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideLongList">' +
                    '<h4>Longitude</h4>' +
                    '<ul id="ulLongList">' +
                        '<li id="liLong1" class="liOdd">-114.0719</li>' +
                        '<li id="liLong2" class="liEven">-113.2622</li>' +
                        '<li id="liLong3" class="liOdd">-13.2380</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asidePopList">' +
                    '<h4>Population</h4>' +
                    '<ul id="ulPopList">' +
                        '<li id="liPop1" class="liOdd">1,547,484</li>' +
                        '<li id="liPop2" class="liEven">1,917</li>' +
                        '<li id="liPop3" class="liOdd">20</li>' +
                        '<li id="idSum" class="liSum">1,549,421</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideSizeList">' +
                    '<h4>Size</h4>' +
                    '<ul id="ulSizeList">' +
                        '<li id="liSize1" class="liOdd">City</li>' +
                        '<li id="liSize2" class="liEven">Town</li>' +
                        '<li id="liSize3" class="liOdd">Hamlet</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideHemList">' +
                    '<h4>N/S</h4>' +
                    '<ul id="ulHemList">' +
                        '<li id="liHem1" class="liOdd">N</li>' +
                        '<li id="liHem2" class="liEven">N</li>' +
                        '<li id="liHem3" class="liOdd">N</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideMaxList">' +
                    '<h4>Max N/S</h4>' +
                    '<ul id="ulMaxList">' +
                        '<li id="liMax1" class="liOdd">N</li>' +
                        '<li id="liMax2" class="liEven">.</li>' +
                        '<li id="liMax3" class="liOdd">S</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>' +
        '</div>' +
    '</section>';
    
    // 
    // Confirm API.
    //

    let data = await c130d.confirmAPIConnect (c130d.url);
    expect(data.status).toBe(200);

    //
    // Setup test Community to be Canada. Fill the Community with same
    // cities as HTML for testing. Community and City classes
    // have already been fully tested, as have the postData. Not re-testing
    // these. Just doing initial setup for testing the interface to HTML
    // and index.js.
    //

    data = await c920.postData(c130d.url + "clear");

    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (c130d.url, canada.cityList[0]);

    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    data = await c130d.createAPICity (c130d.url, canada.cityList[1], canada.cityList[0]);

    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    data = await c130d.createAPICity (c130d.url, canada.cityList[2], canada.cityList[0]);

    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    data = await c130d.createAPICity (c130d.url, canada.cityList[3], canada.cityList[0]);

    //
    // Scenario: Attempt Moved buttons with nothing selected. Should receive error message.
    // No changes to things like total.
    //
    // Note Showing tests for Moved In and Moved Out together since same function using a
    // parameter to decide which to perform.
    //

    canada.resetMessage();
    
    inputAmt.value = 0;
    selectCity.value = "srcSelect";

    data = await c130d.actionMoved("IN", canada);
    expect(messageArea.textContent).toBe(`Please Select a City.`);
    expect(idSum.textContent).toBe("1,549,421");

    data = await c130d.actionMoved("OUT", canada);
    expect(messageArea.textContent).toBe(`Please Select a City.`);
    expect(idSum.textContent).toBe("1,549,421");

    //
    // Scenario: User next selects the city Calgary, but leaves the input amount as 0.
    // Should receive error message. No changes to things like total.
    //
    
    selectCity.value = "srcCity1";

    data = await c130d.actionMoved("IN", canada);
    expect(messageArea.textContent).toBe(`Please Input the Number of People Moving Which is NOT 0.`);
    expect(idSum.textContent).toBe("1,549,421");
    
    data = await c130d.actionMoved("OUT", canada);
    expect(messageArea.textContent).toBe(`Please Input the Number of People Moving Which is NOT 0.`);
    expect(idSum.textContent).toBe("1,549,421");

    //
    // Scenario: User next attempts a negative value $-1. Should receive error message. 
    // No changes to things like total.
    //
    
    inputAmt.value = -1;
    
    data = await c130d.actionMoved("IN", canada);
    expect(messageArea.textContent).toBe(`You May Only Move a Positive Number of People.`);
    expect(idSum.textContent).toBe("1,549,421");
    
    data = await c130d.actionMoved("OUT", canada);
    expect(messageArea.textContent).toBe(`You May Only Move a Positive Number of People.`);
    expect(idSum.textContent).toBe("1,549,421");
    
    //
    // Scenario: User now types in a value and attempts the Move buttons. Display action result.
    //
    
    inputAmt.value = 16;
    
    data = await c130d.actionMoved("IN", canada);

    expect(messageArea.textContent).toBe(" 16 have moved in. Population of Calgary is now 1547500.");
    
    //
    // Select Menu and Input values get reset.
    //
    
    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    expect(liPop1.textContent).toBe("1547500");
    expect(canada.getCityPopulation(1)).toBe(1547500);
    
    expect(idSum.textContent).toBe("1549437");
    expect(canada.getPopulation(1)).toBe(1549437);

    data = await c130d.getAPICity (url, canada.cityList[1]);
    expect(data.status).toEqual(200);

    expect(data[0].name).toBe("Calgary");
    expect(data[0].population).toBe(1547500);

    selectCity.value = "srcCity1";
    inputAmt.value = 1000;
    
    data = await c130d.actionMoved("OUT", canada);

    expect(messageArea.textContent).toBe(" 1000 have moved out. Population of Calgary is now 1546500.");
    
    //
    // Select Menu and Input values get reset.
    //
    
    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    expect(liPop1.textContent).toBe("1546500");
    expect(canada.getCityPopulation(1)).toBe(1546500);
    
    expect(idSum.textContent).toBe("1548437");
    expect(canada.getPopulation(1)).toBe(1548437);

    data = await c130d.getAPICity (url, canada.cityList[1]);
    expect(data.status).toEqual(200);

    expect(data[0].name).toBe("Calgary");
    expect(data[0].population).toBe(1546500);

    done();
});

// test('130d: Async Test NEXT interface to DOM', async (done) => {

//     // 
//     // Confirm API.
//     //

//     let data = await c130d.confirmAPIConnect (c130d.url);
//     expect(data.status).toBe(200);

//     //
//     // Setup test Community to be Canada. Fill the Community with same
//     // cities as HTML for testing. Community and City classes
//     // have already been fully tested, as have the postData. Not re-testing
//     // these. Just doing initial setup for testing the interface to HTML
//     // and index.js.
//     //

//     data = await c920.postData(c130d.url + "clear");

//     const canada = new community.Community ("Canada");
//     data = await c130d.createAPICommunity (c130d.url, canada.cityList[0]);

//     canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
//     data = await c130d.createAPICity (c130d.url, canada.cityList[1], canada.cityList[0]);

//     canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
//     data = await c130d.createAPICity (c130d.url, canada.cityList[2], canada.cityList[0]);

//     canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
//     data = await c130d.createAPICity (c130d.url, canada.cityList[3], canada.cityList[0]);

//     //
//     // Scenario: Attempt Moved buttons with nothing selected. Should receive error message.
//     // No changes to things like total.
//     //
//     // Note Showing tests for Moved In and Moved Out together since same function using a
//     // parameter to decide which to perform.
//     //

//     canada.resetMessage();
    
//     inputAmt.value = 0;
//     selectCity.value = "srcSelect";

//     data = await c130d.actionMoved("IN", canada);
//     expect(messageArea.textContent).toBe(`Please Select a City.`);
//     expect(idSum.textContent).toBe("1,549,421");

//     data = await c130d.actionMoved("OUT", canada);
//     expect(messageArea.textContent).toBe(`Please Select a City.`);
//     expect(idSum.textContent).toBe("1,549,421");

//     //
//     // Scenario: User next selects the city Calgary, but leaves the input amount as 0.
//     // Should receive error message. No changes to things like total.
//     //
    
//     selectCity.value = "srcCity1";

//     data = await c130d.actionMoved("IN", canada);
//     expect(messageArea.textContent).toBe(`Please Input the Number of People Moving Which is NOT 0.`);
//     expect(idSum.textContent).toBe("1,549,421");
    
//     data = await c130d.actionMoved("OUT", canada);
//     expect(messageArea.textContent).toBe(`Please Input the Number of People Moving Which is NOT 0.`);
//     expect(idSum.textContent).toBe("1,549,421");

//     //
//     // Scenario: User next attempts a negative value $-1. Should receive error message. 
//     // No changes to things like total.
//     //
    
//     inputAmt.value = -1;
    
//     data = await c130d.actionMoved("IN", canada);
//     expect(messageArea.textContent).toBe(`You May Only Move a Positive Number of People.`);
//     expect(idSum.textContent).toBe("1,549,421");
    
//     data = await c130d.actionMoved("OUT", canada);
//     expect(messageArea.textContent).toBe(`You May Only Move a Positive Number of People.`);
//     expect(idSum.textContent).toBe("1,549,421");
    
//     //
//     // Scenario: User now types in a value and attempts the Move buttons. Display action result.
//     //
    
//     inputAmt.value = 16;
    
//     data = await c130d.actionMoved("IN", canada);

//     expect(messageArea.textContent).toBe(" 16 have moved in. Population of Calgary is now 1547500.");
    
//     //
//     // Select Menu and Input values get reset.
//     //
    
//     expect(selectCity.value).toBe("srcSelect");
//     expect(inputAmt.value).toBe("0");

//     expect(liPop1.textContent).toBe("1547500");
//     expect(canada.getCityPopulation(1)).toBe(1547500);
    
//     expect(idSum.textContent).toBe("1549437");
//     expect(canada.getPopulation(1)).toBe(1549437);

//     data = await c130d.getAPICity (url, canada.cityList[1]);
//     expect(data.status).toEqual(200);

//     expect(data[0].name).toBe("Calgary");
//     expect(data[0].population).toBe(1547500);

//     selectCity.value = "srcCity1";
//     inputAmt.value = 1000;
    
//     data = await c130d.actionMoved("OUT", canada);

//     expect(messageArea.textContent).toBe(" 1000 have moved out. Population of Calgary is now 1546500.");
    
//     //
//     // Select Menu and Input values get reset.
//     //
    
//     expect(selectCity.value).toBe("srcSelect");
//     expect(inputAmt.value).toBe("0");

//     expect(liPop1.textContent).toBe("1546500");
//     expect(canada.getCityPopulation(1)).toBe(1546500);
    
//     expect(idSum.textContent).toBe("1548437");
//     expect(canada.getPopulation(1)).toBe(1548437);

//     data = await c130d.getAPICity (url, canada.cityList[1]);
//     expect(data.status).toEqual(200);

//     expect(data[0].name).toBe("Calgary");
//     expect(data[0].population).toBe(1546500);

//     done();
// });