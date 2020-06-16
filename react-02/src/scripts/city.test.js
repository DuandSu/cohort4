import city from './city.js';
// import shapes from './shapes.js'

let consoleLog = [];
let consoleLine = 0;

test('130d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('130d: Pre Play', () => {
    
    consoleLog = [];
    consoleLine = 0;

    for (let i=0; i < 2; i++) {
        consoleLog[consoleLine++] = "Execute i Loop " + i;
        for (let j=0; j < 2; j++) {
            consoleLog[consoleLine++] = "Execute j Loop " + j;
        }
    }

    expect(consoleLog[0]).toBe("Execute i Loop 0");
    expect(consoleLog[1]).toBe("Execute j Loop 0");
    expect(consoleLog[2]).toBe("Execute j Loop 1");
    expect(consoleLog[3]).toBe("Execute i Loop 1");
    expect(consoleLog[4]).toBe("Execute j Loop 0");
    expect(consoleLog[5]).toBe("Execute j Loop 1");
    expect(consoleLog[6]).toBeUndefined();
    
    consoleLog = [];
    consoleLine = 0;

    for (let i=0; i < 2; i++) {
        consoleLog[consoleLine++] = "Execute i Loop " + i;
        break;
        for (let j=0; j < 2; j++) {
            consoleLog[consoleLine++] = "Execute j Loop " + j;
        }
    }

    expect(consoleLog[0]).toBe("Execute i Loop 0");
    expect(consoleLog[1]).toBeUndefined();

    consoleLog = [];
    consoleLine = 0;

    for (let i=0; i < 2; i++) {
        consoleLog[consoleLine++] = "Execute i Loop " + i;
        for (let j=0; j < 2; j++) {
            consoleLog[consoleLine++] = "Execute j Loop " + j;
            if (i === 1 && j === 1) {
                break;
                consoleLog("Do NOT Print Me");
                consoleLog[consoleLine++] = "Do NOT Print Me";
            }
            consoleLog[consoleLine++] = "Print Me j Loop";
        }
        consoleLog[consoleLine++] = "Print Me i Loop";
    }

    // Shows problem of breaking out of a for loop.
    //
    // Notice it breaks out of j Loop, but does NOT Break out of j loop.
    // Code would continue to execute if something like "i < 10".
    //
    // Better to use do or while loops with a condition that is set to
    // fail all the loop conditions, or at least in combination with
    // the original break.

    expect(consoleLog[0]).toBe("Execute i Loop 0");
    expect(consoleLog[1]).toBe("Execute j Loop 0");
    expect(consoleLog[2]).toBe("Print Me j Loop");
    expect(consoleLog[3]).toBe("Execute j Loop 1");
    expect(consoleLog[4]).toBe("Print Me j Loop");
    expect(consoleLog[5]).toBe("Print Me i Loop");
    expect(consoleLog[6]).toBe("Execute i Loop 1");
    expect(consoleLog[7]).toBe("Execute j Loop 0");
    expect(consoleLog[8]).toBe("Print Me j Loop");
    expect(consoleLog[9]).toBe("Execute j Loop 1");
    // expect(consoleLog[10]).toBe("Print Me j Loop"); Break Skips this log.
    expect(consoleLog[10]).toBe("Print Me i Loop");
    expect(consoleLog[11]).toBeUndefined();

});

test('130d: Does City class instantiation and methods work?', () => {
    
    // Notes for latitude is that N is positive and S is negative. Longitude W is
    // negative and E is positive.

    const calgary = new city.City ("Calgary", 51.0447, -114.0719, 1547484);

    expect(calgary.name).toBe("Calgary");
    expect(calgary.latitude).toBe(51.0447);
    expect(calgary.longitude).toBe(-114.0719);
    expect(calgary.population).toBe(1547484);
    
    expect(calgary.show()).toBe("Calgary at 51.0447 and -114.0719 with 1547484 people");
    
    expect(calgary.movedIn(0)).toBe(1547484);
    expect(calgary.movedIn(16)).toBe(1547500);
    expect(calgary.movedIn(-16)).toBe(1547484);
    expect(calgary.movedIn(-1547500)).toBe(0);
    expect(calgary.movedIn(1547484)).toBe(1547484);
    
    expect(calgary.movedOut(0)).toBe(1547484);
    expect(calgary.movedOut(-16)).toBe(1547500);
    expect(calgary.movedOut(16)).toBe(1547484);
    expect(calgary.movedOut(1547500)).toBe(0);
    expect(calgary.movedOut(-1547484)).toBe(1547484);
    
    expect(calgary.howBig("Number")).toBe(1547484);
    expect(calgary.howBig("Whatever")).toBe(1547484);
    expect(calgary.howBig()).toBe(1547484);
    expect(calgary.howBig("Category")).toBe("City");
    expect(calgary.movedOut(1447484)).toBe(100000);
    expect(calgary.howBig("Category")).toBe("Large Town");
    expect(calgary.movedIn(1)).toBe(100001);
    expect(calgary.howBig("Category")).toBe("City");
    expect(calgary.movedOut(80002)).toBe(19999);
    expect(calgary.howBig("Category")).toBe("Town");
    expect(calgary.movedIn(1)).toBe(20000);
    expect(calgary.howBig("Category")).toBe("Large Town");
    
    const vulcan = new city.City ("Vulcan", 50.4038, -113.2622, 1917);
    
    expect(vulcan.name).toBe("Vulcan");
    expect(vulcan.latitude).toBe(50.4038);
    expect(vulcan.longitude).toBe(-113.2622);
    expect(vulcan.population).toBe(1917);
    expect(vulcan.howBig()).toBe(1917);
    expect(vulcan.howBig("Category")).toBe("Town");
    expect(vulcan.movedOut(917)).toBe(1000);
    expect(vulcan.howBig("Category")).toBe("Town");
    expect(vulcan.movedOut(1)).toBe(999);
    expect(vulcan.howBig("Category")).toBe("Village");
    expect(vulcan.movedOut(899)).toBe(100);
    expect(vulcan.howBig()).toBe(100);
    expect(vulcan.howBig("Category")).toBe("Hamlet");
    expect(vulcan.movedIn(1)).toBe(101);
    expect(vulcan.howBig("Category")).toBe("Village");
    
    const kirkaldy = new city.City ("Kirkaldy", 50.3367, -13.2380, 20);
    
    expect(kirkaldy.name).toBe("Kirkaldy");
    expect(kirkaldy.latitude).toBe(50.3367);
    expect(kirkaldy.longitude).toBe(-13.2380);
    expect(kirkaldy.population).toBe(20);
    expect(kirkaldy.howBig()).toBe(20);
    expect(kirkaldy.howBig("Category")).toBe("Hamlet");
    expect(kirkaldy.movedOut(19)).toBe(1);
    expect(kirkaldy.howBig("Category")).toBe("Hamlet");
    expect(kirkaldy.movedOut(1)).toBe(0);
    expect(kirkaldy.howBig("Category")).toBe("Dead");
    expect(kirkaldy.movedOut(1)).toBe(0);
    expect(kirkaldy.howBig("Category")).toBe("Dead");
 
});