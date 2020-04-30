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

test('130d: Does Community controller class instantiation and methods work?', () => {
    
    const canada = new community.Community ("Canada");

    expect(canada.name).toBe("Canada");
    expect(canada.cityList[0]).toEqual({key: 0, nextKey: 1});
    expect(canada.cityList[0].key).toBe(0);
    expect(canada.cityList[0].nextKey).toBe(1);

    let createResult = canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    expect(createResult).toEqual([1,1]);
    
    let newIndex = createResult[0];
    let newKey = createResult[1];
    
    expect(canada.cityList[newIndex].name).toBe("Calgary");
    expect(canada.cityList[newIndex].latitude).toBe(51.0447);
    expect(canada.cityList[newIndex].longitude).toBe(-114.0719);
    expect(canada.cityList[newIndex].population).toBe(1547484);
    expect(canada.cityList[newIndex].key).toBe(newKey);
    expect(canada.cityList[0].nextKey).toBe(2);
    
    expect(canada.cityList[newIndex].howBig()).toBe(1547484);
    expect(canada.cityList[newIndex].howBig("Category")).toBe("City");
    
    createResult = canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    expect(createResult).toEqual([2,2]);
    
    newIndex = createResult[0];
    newKey = createResult[1];
    
    expect(canada.cityList[newIndex].name).toBe("Vulcan");
    expect(canada.cityList[newIndex].latitude).toBe(50.4038);
    expect(canada.cityList[newIndex].longitude).toBe(-113.2622);
    expect(canada.cityList[newIndex].population).toBe(1917);
    expect(canada.cityList[newIndex].key).toBe(newKey);
    expect(canada.cityList[0].nextKey).toBe(3);
    
    expect(canada.cityList[newIndex].howBig()).toBe(1917);
    expect(canada.cityList[newIndex].howBig("Category")).toBe("Town");
    
});

test('130d: Async ASP Testing with Community', async (done) => {
    
    const canada = new community.Community ("Canada");
    
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);

    let data = await c920.postData(url + "clear");
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

    data = await c920.postData(url + 'delete', key1);
    // data = await c920.postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);
  
    data = await c920.postData(url + 'read', key1);
    // data = await c920.postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);

    done();
});