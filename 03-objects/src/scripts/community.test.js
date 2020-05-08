import community from './community.js';

global.fetch = require('node-fetch'); // Was Larry's solution vs the isomorphic-fetch solution that I found.
import c920 from './fetch.js'
// import "isomorphic-fetch";

let consoleLog = [];
let consoleLine = 0;

const url = 'http://localhost:5000/';

test('130d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('130d: Play Area', () => {
    
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let orange = fruits.splice(1,1);
    expect(fruits).toEqual(["Banana", "Apple", "Mango"]);
    expect(orange).toEqual(["Orange"]);
    
});

test('130d: Does Community controller class instantiation and methods work?', () => {
    
    const canada = new community.Community ("Canada");

    expect(canada.name).toBe("Canada");
    expect(canada.cityList[0]).toEqual({key: 0, name: "Canada", nextKey: 1});
    expect(canada.cityList[0].key).toBe(0);
    expect(canada.cityList[0].nextKey).toBe(1);

    let createResult = canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    expect(createResult).toEqual([1,1]);
    
    let newIndex = createResult[0];
    let newKey = createResult[1];
    
    expect(canada.cityList[newIndex].name).toBe("Calgary");
    expect(canada.getCityName(newKey)).toBe("Calgary");
    expect(canada.cityList[newIndex].latitude).toBe(51.0447);
    expect(canada.getCityLatitude(newKey)).toBe(51.0447);
    expect(canada.cityList[newIndex].longitude).toBe(-114.0719);
    expect(canada.getCityLongitude(newKey)).toBe(-114.0719);
    expect(canada.cityList[newIndex].population).toBe(1547484);
    expect(canada.getCityPopulation(newKey)).toBe(1547484);
    expect(canada.cityList[newIndex].key).toBe(newKey);
    expect(canada.cityList[0].nextKey).toBe(2);
    
    expect(canada.cityList[newIndex].howBig()).toBe(1547484);
    expect(canada.cityList[newIndex].howBig("Category")).toBe("City");
    expect(canada.getCityHowBig(newKey)).toBe("City");
    
    createResult = canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    expect(createResult).toEqual([2,2]);
    
    newIndex = createResult[0];
    newKey = createResult[1];
    
    expect(canada.getCityName(newKey)).toBe("Vulcan");
    expect(canada.getCityLatitude(newKey)).toBe(50.4038);
    expect(canada.getCityLongitude(newKey)).toBe(-113.2622);
    expect(canada.getCityPopulation(newKey)).toBe(1917);
    expect(canada.cityList[newIndex].key).toBe(newKey);
    expect(canada.cityList[0].nextKey).toBe(3);
    
    expect(canada.cityList[newIndex].howBig()).toBe(1917);
    expect(canada.cityList[newIndex].howBig("Category")).toBe("Town");
    expect(canada.getCityHowBig(newKey)).toBe("Town");

    let delIndex = canada.findKeyIndex(1);
    expect(delIndex).toBe(1);

    expect(canada.cityList[1].name).toBe("Calgary");
    canada.deleteCity(1);
    expect(canada.cityList[1].name).toBe("Vulcan");

    createResult = canada.createCity ("Calgary", 51.0447, -114.0719, 1547484, 1);
    expect(createResult).toEqual([2,1]);
    expect(canada.cityList[1].name).toBe("Vulcan");
    expect(canada.cityList[1].key).toBe(2);
    expect(canada.cityList[2].name).toBe("Calgary");
    expect(canada.cityList[2].key).toBe(1);
    
    createResult = canada.createCity ("Hell", 51.0447, -114.0719, 1547484, "3");
    expect(createResult).toEqual([3,3]);
});

test('130d: Test Other Community class methods', () => {

    const canada = new community.Community ("Canada");

    expect(canada.getMostNorthern()).toBe(0);
    expect(canada.getMostSouthern()).toBe(0);
    
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    canada.createCity ("Vulcan South", -50.3367, -13.2380, 1917);
    canada.createCity ("Equator City", 0, -13.2380, 1000001);
    canada.createCity ("Just Below Equatorton", -1, -13.2380, 2000);
    canada.createCity ("Minus Zero", -0, -13.2380, 0);
    
    expect(canada.whichSphere(1)).toBe("N");
    expect(canada.whichSphere(4)).toBe("S");
    expect(canada.whichSphere(5)).toBe("N");
    expect(canada.whichSphere(6)).toBe("S");
    expect(canada.whichSphere(7)).toBe("N");
    
    expect(canada.getMostNorthern()).toBe(1);
    
    canada.createCity ("Edmonton", 53.5461, -113.4938, 1461182);
    
    expect(canada.getMostNorthern()).toBe(8);
    
    canada.createCity ("Edmonton Mirror", 53.5461, -113.4938, 1461183);
    
    expect(canada.getMostNorthern()).toBe(9);
    
    expect(canada.getMostSouthern()).toBe(4);
    
    canada.createCity ("Vulcan Big South", -50.3367, -13.2380, 1918);

    expect(canada.getMostSouthern()).toBe(10);

    expect(canada.getPopulation()).toBe(5477622);

    expect(canada.movedOutOfCity(1, 484)).toBe(1547000);
    expect(canada.movedIntoCity(1, 1000)).toBe(1548000);

    console.log(canada.cityList);

    expect(canada.cityList.length).toBe(11);
    expect(canada.sortCityList("Name")).toEqual([1, 8, 9, 5, 6, 3, 7, 2, 10, 4]);

});

test('130d: Async ASP Basic Testing with Community', async (done) => {
    
    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);

    data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);

    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await c920.postData(url + 'add', canada.cityList[0]);
    expect(data.status).toEqual(200);

    data = await c920.postData(url + 'add', canada.cityList[1]);
    expect(data.status).toEqual(200);

    data = await c920.postData(url + 'add', canada.cityList[2]);
    expect(data.status).toEqual(200);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(3);

    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(3);
    
    expect(data[1].key).toBe(1);
    expect(data[1].name).toBe("Calgary");
    expect(data[1].latitude).toBe(51.0447);
    expect(data[1].longitude).toBe(-114.0719);
    expect(data[1].population).toBe(1547484);

    expect(data[2].key).toBe(2);
    expect(data[2].name).toBe("Vulcan");
    expect(data[2].latitude).toBe(50.4038);
    expect(data[2].longitude).toBe(-113.2622);
    expect(data[2].population).toBe(1917);

    // add a second with the same key which should be an error

    data = await c920.postData(url + 'add', canada.cityList[0]);
    expect(data.status).toEqual(400);
    data = await c920.postData(url + 'add', canada.cityList[1]);
    expect(data.status).toEqual(400);
    data = await c920.postData(url + 'add', canada.cityList[2]);
    expect(data.status).toEqual(400);
    
    let key0 = {};
    key0.key = 0;
    
    expect(key0).toEqual({key:0});
    
    data = await c920.postData(url + 'read', key0);
    // data = await c920.postData(url + 'read', {key:0});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].nextKey).toBe(3);
    
    let key1 = {};
    key1.key = 1;

    data = await c920.postData(url + 'read', key1);
    // data = await c920.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    expect(canada.cityList[1].movedIn(16)).toBe(1547500);
    expect(canada.cityList[1].howBig()).toBe(1547500);

    let keyPop1 = {};
    keyPop1.key = 1;
    keyPop1.population = 1547500;

    data = await c920.postData(url + 'update', keyPop1);
    // data = await c920.postData(url + 'update', {key:1, population:1547500});
    expect(data.status).toEqual(200);
        
    data = await c920.postData(url + 'read', key1);
    // data = await c920.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].population).toBe(1547500);

    function findKey(pcity, pkey) {

        // console.log(pcity.name, pcity.key, pkey);
        return pcity.key === pkey;
    }

    expect(findKey(canada.cityList[1],1)).toBeTruthy();

    let delIndex = -1;
    for (let i = 1; i < canada.cityList.length; i++) {
        if (findKey(canada.cityList[i], 1)) {
            delIndex = i;
            break;
        }
    }

    expect(delIndex).toBe(1);
    
    // delIndex = canada.cityList.findIndex( findKey(canada.cityList, 1));
    // expect(delIndex).toBe(1);

    data = await c920.postData(url + 'delete', key1);
    // data = await c920.postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);
  
    data = await c920.postData(url + 'read', key1);
    // data = await c920.postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);



    done();
});

test('130d: Testing Messages', () => {
    
    const canada = new community.Community ("Canada");

    expect(canada.name).toBe("Canada");
    expect(canada.cityList[0]).toEqual({key: 0, name: "Canada", nextKey: 1});
    expect(canada.cityList[0].key).toBe(0);
    expect(canada.cityList[0].nextKey).toBe(1);
    
    expect(canada.isMessage()).toBeFalsy();
    expect(canada.getMessages()).toBe("");

    expect(canada.addMessage("Welcome to Communities and Cities!")).toBe(true);
    expect(canada.addMessage("Enjoy your experience and have a GREAT day.")).toBe(true);
    expect(canada.isMessage()).toBeTruthy();
    expect(canada.getMessages()).toBe(" Welcome to Communities and Cities!" +
    " Enjoy your experience and have a GREAT day.");
    expect(canada.resetMessage()).toBe(true);
    expect(canada.isMessage()).toBeFalsy();
    expect(canada.getMessages()).toBe("");
    
});