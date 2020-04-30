import community from './community.js';
import c920 from './fetch.js'

let consoleLog = [];
let consoleLine = 0;

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

test('130d: Async ASP Testing', async (done) => {
    
    const canada = new community.Community ("Canada");
    
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);

    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
  
    done();
});