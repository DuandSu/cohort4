test('From 0420', () => {

    let a = [
        "one partridge",
        "two turtle doves",
        "three french hens",
        "four calling birds",
        "five golden rings",
        "six geese a-laying",
        "seven swans a-swimming"]

            
    expect (a).toEqual([
        "one partridge",
        "two turtle doves",
        "three french hens",
        "four calling birds",
        "five golden rings",
        "six geese a-laying",
        "seven swans a-swimming"]);
                
    expect(a.length).toBe[7];

    expect(a[0]).toBe["one partridge"];
    expect(a[1]).toBe["two turtle doves"];
    expect(a[2]).toBe["three french hens"];
    expect(a[3]).toBe["four calling birds"];
    expect(a[4]).toBe["five golden rings"];
    expect(a[5]).toBe["six geese a-laying"];
    expect(a[6]).toBe["seven swans a-swimming"];

    let testOutputLine = 0;
    let testOutput = [];

    expect(testOutput.length).toBe[0];
    expect(testOutput[0]).toBeUndefined();

    for (let k = 0; k < a.length; k = k + 1) { 
        testOutput[k] = "On the "
        + (k+1) 
        + " day of Christmas, my true love gave to me " 
        + (k+1) 
        + " " 
        + a[k]
    }

    expect(testOutput[0]).toBe("On the 1 day of Christmas, my true love gave to me 1 one partridge");
    expect(testOutput[1]).toBe("On the 2 day of Christmas, my true love gave to me 2 two turtle doves");
    expect(testOutput[2]).toBe("On the 3 day of Christmas, my true love gave to me 3 three french hens");
    expect(testOutput[3]).toBe("On the 4 day of Christmas, my true love gave to me 4 four calling birds");
    expect(testOutput[4]).toBe("On the 5 day of Christmas, my true love gave to me 5 five golden rings");
    expect(testOutput[5]).toBe("On the 6 day of Christmas, my true love gave to me 6 six geese a-laying");
    expect(testOutput[6]).toBe("On the 7 day of Christmas, my true love gave to me 7 seven swans a-swimming");

    testOutput = [];
    
    a.forEach ( function (element, index) {  
        testOutput[index] = "On the "
        + (index+1) 
        + " day of Christmas, my true love gave to me " 
        + (index+1) 
        + " " 
        + a[index]
    });
    
    expect(testOutput[0]).toBe("On the 1 day of Christmas, my true love gave to me 1 one partridge");
    expect(testOutput[1]).toBe("On the 2 day of Christmas, my true love gave to me 2 two turtle doves");
    expect(testOutput[2]).toBe("On the 3 day of Christmas, my true love gave to me 3 three french hens");
    expect(testOutput[3]).toBe("On the 4 day of Christmas, my true love gave to me 4 four calling birds");
    expect(testOutput[4]).toBe("On the 5 day of Christmas, my true love gave to me 5 five golden rings");
    expect(testOutput[5]).toBe("On the 6 day of Christmas, my true love gave to me 6 six geese a-laying");
    expect(testOutput[6]).toBe("On the 7 day of Christmas, my true love gave to me 7 seven swans a-swimming");
    
    function square (value) { return value * value }

    // Typing "square" in console shows:
    //  ƒ square (value) { return value * value }

    let value = 15
    expect(square (value) ).toBe(225);
    expect(square (1) ).toBe(1);
    expect(square (2) ).toBe(4);
    expect(square (20) ).toBe(400);
    expect(square ('apple') ).toBe(NaN);

    function shout (action) {
        return action();
    }

    // Both of the following calls to shout() receive error:
    //  TypeError: action is not a function
    //
    // shout();
    // shout(1);

    function shoutAction () { return "Hello there" }

    expect(shoutAction()).toBe("Hello there");
    expect(shout(shoutAction)).toBe("Hello there");
    
    function evaluate ( action, value ) {
        return action (value) ;
    }
    
    // Typing "evaluate" in console shows:
    //  ƒ evaluate ( action, value ) {
    //      return action (value) ;
    //  }
        
    expect(evaluate( square, -30)).toBe(900);

    expect("Aaron-90").toBe("Aaron-90");
    expect("Aaron-90" < "Aaron-80").toBeFalsy();

    expect("90" < "80").toBeFalsy();
    expect("90" < "95").toBeTruthy();
    expect("90" < "901").toBeTruthy();

    expect("-90" < "-80").toBeFalsy();
    expect(-90 < -80).toBeTruthy();

    function cube (value) { return value * value * value }

    // Typing "cube" in console shows:
    //  ƒ cube (value) { return value * value * value }
    
    expect(cube(3)).toBe(27);
    
    function negative (value) { return -value }
    
    // Typing "negative" in console shows:
    //  ƒ negative (value) { return -value }
    
    expect(negative(2)).toBe(-2);
    expect(negative(-20)).toBe(20);
    
    function magic (value) { return value * (value - 1) }

    // Typing "magic" in console shows:
    //  ƒ magic (value) { return value * (value - 1) }
    
    expect(magic(1)).toBe(0);
    expect(magic(2)).toBe(2);
    expect(magic(3)).toBe(6);

    const myFunctions = [square, cube, negative, magic];

    // Typing "myFunctions" in console shows:
    //  (4) [ƒ, ƒ, ƒ, ƒ]0: ƒ square(value)length: 1name: "square"arguments: nullcaller: nullprototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM4278:1[[Scopes]]: Scopes[2]0: Script {myArray: Array(0), myArray2: Array(0), a: Array(7), myNextElement: 5, myNewArrayLength: 5, …}1: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}1: ƒ cube(value)2: ƒ negative(value)3: ƒ magic(value)length: 4__proto__: Array(0)

    // Typing "myFunctions[0]" in console shows:
    //  ƒ square (value) { return value * value }

    testOutput = [];
    
    for (let k = 0; k < myFunctions.length; k = k + 1) {
        testOutput[k] = evaluate( myFunctions[k] , 3 )
    }    
    
    expect(testOutput[0]).toBe(9);
    expect(testOutput[1]).toBe(27);
    expect(testOutput[2]).toBe(-3);
    expect(testOutput[3]).toBe(6);
    
    testOutput = [];
    testOutputLine = 0;
    
    const data = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < myFunctions.length; j++) {
            testOutput [testOutputLine++] = "My i is " + i + "; my j is " + j;
            testOutput [testOutputLine++] = evaluate( myFunctions[j], data[i] );
        }
    }
    
    expect(testOutput[0]).toBe("My i is 0; my j is 0");
    expect(testOutput[1]).toBe(1);
    expect(testOutput[2]).toBe("My i is 0; my j is 1");
    expect(testOutput[3]).toBe(1);
    expect(testOutput[4]).toBe("My i is 0; my j is 2");
    expect(testOutput[5]).toBe(-1);
    expect(testOutput[6]).toBe("My i is 0; my j is 3");
    expect(testOutput[7]).toBe(0);
    expect(testOutput[8]).toBe("My i is 1; my j is 0");
    expect(testOutput[9]).toBe(4);
    expect(testOutput[10]).toBe("My i is 1; my j is 1");
    expect(testOutput[11]).toBe(8);
    expect(testOutput[12]).toBe("My i is 1; my j is 2");
    expect(testOutput[13]).toBe(-2);
    expect(testOutput[14]).toBe("My i is 1; my j is 3");
    expect(testOutput[15]).toBe(2);
    expect(testOutput[16]).toBe("My i is 2; my j is 0");
    expect(testOutput[17]).toBe(9);
    expect(testOutput[18]).toBe("My i is 2; my j is 1");
    expect(testOutput[19]).toBe(27);
    expect(testOutput[20]).toBe("My i is 2; my j is 2");
    expect(testOutput[21]).toBe(-3);
    expect(testOutput[22]).toBe("My i is 2; my j is 3");
    expect(testOutput[23]).toBe(6);
    expect(testOutput[24]).toBe("My i is 3; my j is 0");
    expect(testOutput[25]).toBe(16);
    expect(testOutput[26]).toBe("My i is 3; my j is 1");
    expect(testOutput[27]).toBe(64);
    expect(testOutput[28]).toBe("My i is 3; my j is 2");
    expect(testOutput[29]).toBe(-4);
    expect(testOutput[30]).toBe("My i is 3; my j is 3");
    expect(testOutput[31]).toBe(12);
    expect(testOutput[32]).toBe("My i is 4; my j is 0");
    expect(testOutput[33]).toBe(25);
    expect(testOutput[34]).toBe("My i is 4; my j is 1");
    expect(testOutput[35]).toBe(125);
    expect(testOutput[36]).toBe("My i is 4; my j is 2");
    expect(testOutput[37]).toBe(-5);
    expect(testOutput[38]).toBe("My i is 4; my j is 3");
    expect(testOutput[39]).toBe(20);
    
    testOutput = [];
    testOutputLine = 0;

    for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < myFunctions.length; j++) {
            testOutput [testOutputLine++] = "My i is " + i + "; my j is " + j;
            testOutput [testOutputLine++] = "My data item is "
                + evaluate( myFunctions[j], data[i] )
                + "; my function is " 
                + myFunctions[j];
        }
    }

    // Note that in console display "function" before function name will show as "ƒ"
    // The replace is removing all control characters, including CR and LF, to
    // simplify the expect result.

    expect(testOutput[0]).toBe("My i is 0; my j is 0");
    expect(testOutput[1].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 1; my function is function square(value) {    return value * value;  }");
    expect(testOutput[2]).toBe("My i is 0; my j is 1");
    expect(testOutput[3].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 1; my function is function cube(value) {    return value * value * value;  }");
    expect(testOutput[4]).toBe("My i is 0; my j is 2");
    expect(testOutput[5].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is -1; my function is function negative(value) {    return -value;  }");
    expect(testOutput[6]).toBe("My i is 0; my j is 3");
    expect(testOutput[7].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 0; my function is function magic(value) {    return value * (value - 1);  }");
    expect(testOutput[8]).toBe("My i is 1; my j is 0");
    expect(testOutput[9].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 4; my function is function square(value) {    return value * value;  }");
    expect(testOutput[10]).toBe("My i is 1; my j is 1");
    expect(testOutput[11].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 8; my function is function cube(value) {    return value * value * value;  }");
    expect(testOutput[12]).toBe("My i is 1; my j is 2");
    expect(testOutput[13].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is -2; my function is function negative(value) {    return -value;  }");
    expect(testOutput[14]).toBe("My i is 1; my j is 3");
    expect(testOutput[15].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 2; my function is function magic(value) {    return value * (value - 1);  }");
    expect(testOutput[16]).toBe("My i is 2; my j is 0");
    expect(testOutput[17].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 9; my function is function square(value) {    return value * value;  }");
    expect(testOutput[18]).toBe("My i is 2; my j is 1");
    expect(testOutput[19].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 27; my function is function cube(value) {    return value * value * value;  }");
    expect(testOutput[20]).toBe("My i is 2; my j is 2");
    expect(testOutput[21].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is -3; my function is function negative(value) {    return -value;  }");
    expect(testOutput[22]).toBe("My i is 2; my j is 3");
    expect(testOutput[23].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 6; my function is function magic(value) {    return value * (value - 1);  }");
    expect(testOutput[24]).toBe("My i is 3; my j is 0");
    expect(testOutput[25].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 16; my function is function square(value) {    return value * value;  }");
    expect(testOutput[26]).toBe("My i is 3; my j is 1");
    expect(testOutput[27].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 64; my function is function cube(value) {    return value * value * value;  }");
    expect(testOutput[28]).toBe("My i is 3; my j is 2");
    expect(testOutput[29].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is -4; my function is function negative(value) {    return -value;  }");
    expect(testOutput[30]).toBe("My i is 3; my j is 3");
    expect(testOutput[31].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 12; my function is function magic(value) {    return value * (value - 1);  }");
    expect(testOutput[32]).toBe("My i is 4; my j is 0");
    expect(testOutput[33].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 25; my function is function square(value) {    return value * value;  }");
    expect(testOutput[34]).toBe("My i is 4; my j is 1");
    expect(testOutput[35].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 125; my function is function cube(value) {    return value * value * value;  }");
    expect(testOutput[36]).toBe("My i is 4; my j is 2");
    expect(testOutput[37].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is -5; my function is function negative(value) {    return -value;  }");
    expect(testOutput[38]).toBe("My i is 4; my j is 3");
    expect(testOutput[39].replace(/[^\x20-\x7E]/gmi, "")).toBe("My data item is 20; my function is function magic(value) {    return value * (value - 1);  }");

    // Typing data in console would show:
    //  (5) [1, 2, 3, 4, 5]

    expect(data.length).toBe(5);

    // Typing data.forEach in console would show:
    //  ƒ forEach() { [native code] }

    // Typing data.map in console would show:
    //  ƒ map() { [native code] }

    // Typing data.sort in console would show:
    //  ƒ sort() { [native code] }

    // Typing data.filter in console would show:
    //  ƒ filter() { [native code] }

    // Typing data.reduce in console would show:
    //  ƒ reduce() { [native code] }

    // Typing evaluate in console would show:
    //  ƒ evaluate ( action, value ) {
    //      return action (value) ;
    //  }

    testOutput = [];
    testOutputLine = 0;

    function reveal (a, b, c) {
        testOutput[testOutputLine++] = 'a = ' +  a + '; b = ' + b + '; c = ' + c;
        return 'a = ' +  a + '; b = ' + b + '; c = ' + c;
    }

    expect(reveal(1, 2, 3)).toBe("a = 1; b = 2; c = 3");
    
    testOutput = [];
    testOutputLine = 0;
    
    // If run from console.log will display the array as (5) [1, 2, 3, 4, 5].
    
    data.forEach( reveal );
    expect(testOutput[0]).toBe("a = 1; b = 0; c = 1,2,3,4,5");
    expect(testOutput[1]).toBe("a = 2; b = 1; c = 1,2,3,4,5");
    expect(testOutput[2]).toBe("a = 3; b = 2; c = 1,2,3,4,5");
    expect(testOutput[3]).toBe("a = 4; b = 3; c = 1,2,3,4,5");
    expect(testOutput[4]).toBe("a = 5; b = 4; c = 1,2,3,4,5");
    
    testOutput = [];
    testOutputLine = 0;
    
    a.forEach ( reveal );
    expect(testOutput[0]).toBe('a = one partridge; b = 0; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    expect(testOutput[1]).toBe('a = two turtle doves; b = 1; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    expect(testOutput[2]).toBe('a = three french hens; b = 2; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    expect(testOutput[3]).toBe('a = four calling birds; b = 3; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    expect(testOutput[4]).toBe('a = five golden rings; b = 4; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    expect(testOutput[5]).toBe('a = six geese a-laying; b = 5; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    expect(testOutput[6]).toBe('a = seven swans a-swimming; b = 6; c = one partridge,two turtle doves,three french hens,four calling birds,five golden rings,six geese a-laying,seven swans a-swimming');
    
    const funnyData = ['banana', 'apple', 'pear', 'apple', 'banana'];
    
    function tellSomethingtoReveal ( action, x, y, z ) {
        return action (x, y, z);
    }
    
    expect(tellSomethingtoReveal( reveal, "Happy", "New", "Year")).toBe("a = Happy; b = New; c = Year");
    expect(tellSomethingtoReveal( reveal, "Happy", "New")).toBe("a = Happy; b = New; c = undefined");
    expect(tellSomethingtoReveal( reveal )).toBe("a = undefined; b = undefined; c = undefined");
    
    testOutput = [];
    testOutputLine = 0;

    a.forEach (
        function (value) {
            testOutput[testOutputLine++] = 'My dear love gave to me ' + value;
        }
    );

    expect(testOutput[0]).toBe('My dear love gave to me one partridge');
    expect(testOutput[1]).toBe('My dear love gave to me two turtle doves');
    expect(testOutput[2]).toBe('My dear love gave to me three french hens');
    expect(testOutput[3]).toBe('My dear love gave to me four calling birds');
    expect(testOutput[4]).toBe('My dear love gave to me five golden rings');
    expect(testOutput[5]).toBe('My dear love gave to me six geese a-laying');
    expect(testOutput[6]).toBe('My dear love gave to me seven swans a-swimming');
    
    testOutput = [];
    testOutputLine = 0;

    a.forEach (
        function (value, index) {
            testOutput[testOutputLine++] = 'On the ' + (index+1) + ' day of Christmas, my dear love gave to me ' + value;
        }
    );

    expect(testOutput[0]).toBe('On the 1 day of Christmas, my dear love gave to me one partridge');
    expect(testOutput[1]).toBe('On the 2 day of Christmas, my dear love gave to me two turtle doves');
    expect(testOutput[2]).toBe('On the 3 day of Christmas, my dear love gave to me three french hens');
    expect(testOutput[3]).toBe('On the 4 day of Christmas, my dear love gave to me four calling birds');
    expect(testOutput[4]).toBe('On the 5 day of Christmas, my dear love gave to me five golden rings');
    expect(testOutput[5]).toBe('On the 6 day of Christmas, my dear love gave to me six geese a-laying');
    expect(testOutput[6]).toBe('On the 7 day of Christmas, my dear love gave to me seven swans a-swimming');

        
    testOutput = [];
    testOutputLine = 0;

    a.forEach (
        function (value, index, array) {
            testOutput[testOutputLine++] = 'On the ' + (index+1) + ' day of Christmas, my dear love gave to me ' + value
            + '. And by the way, there were ' + array.length + ' days';
        }
    );
    
    expect(testOutput[0]).toBe('On the 1 day of Christmas, my dear love gave to me one partridge. And by the way, there were 7 days');
    expect(testOutput[1]).toBe('On the 2 day of Christmas, my dear love gave to me two turtle doves. And by the way, there were 7 days');
    expect(testOutput[2]).toBe('On the 3 day of Christmas, my dear love gave to me three french hens. And by the way, there were 7 days');
    expect(testOutput[3]).toBe('On the 4 day of Christmas, my dear love gave to me four calling birds. And by the way, there were 7 days');
    expect(testOutput[4]).toBe('On the 5 day of Christmas, my dear love gave to me five golden rings. And by the way, there were 7 days');
    expect(testOutput[5]).toBe('On the 6 day of Christmas, my dear love gave to me six geese a-laying. And by the way, there were 7 days');
    expect(testOutput[6]).toBe('On the 7 day of Christmas, my dear love gave to me seven swans a-swimming. And by the way, there were 7 days');
    
    testOutput = [];
    testOutputLine = 0;
    
    a.forEach (
        function () {
            testOutput[testOutputLine++] = 'Ha';
        }
    );
        
    expect(testOutput[0]).toBe('Ha');
    expect(testOutput[1]).toBe('Ha');
    expect(testOutput[2]).toBe('Ha');
    expect(testOutput[3]).toBe('Ha');
    expect(testOutput[4]).toBe('Ha');
    expect(testOutput[5]).toBe('Ha');
    expect(testOutput[6]).toBe('Ha');
    expect(testOutput[7]).toBeUndefined();

    a[7] = "eight maids a-milking";

    testOutput = [];
    testOutputLine = 0;

    a.forEach (
        function (value, index, array) {
            testOutput[testOutputLine++] = 'On the ' + (index+1) + ' day of Christmas, my dear love gave to me ' + value
            + '. And by the way, there were ' + array.length + ' days';
        }
    );    

    expect(testOutput[0]).toBe('On the 1 day of Christmas, my dear love gave to me one partridge. And by the way, there were 8 days');
    expect(testOutput[1]).toBe('On the 2 day of Christmas, my dear love gave to me two turtle doves. And by the way, there were 8 days');
    expect(testOutput[2]).toBe('On the 3 day of Christmas, my dear love gave to me three french hens. And by the way, there were 8 days');
    expect(testOutput[3]).toBe('On the 4 day of Christmas, my dear love gave to me four calling birds. And by the way, there were 8 days');
    expect(testOutput[4]).toBe('On the 5 day of Christmas, my dear love gave to me five golden rings. And by the way, there were 8 days');
    expect(testOutput[5]).toBe('On the 6 day of Christmas, my dear love gave to me six geese a-laying. And by the way, there were 8 days');
    expect(testOutput[6]).toBe('On the 7 day of Christmas, my dear love gave to me seven swans a-swimming. And by the way, there were 8 days');
    expect(testOutput[7]).toBe('On the 8 day of Christmas, my dear love gave to me eight maids a-milking. And by the way, there were 8 days');

   let filterResult = a.filter ( 

        function (value) {
            if ( value.includes("partridge") ) {
               return true;
            } else {
               return false;
            }
        }
    );

    expect(filterResult).toEqual(["one partridge"]);

    filterResult = a.filter ( 

        function (value) {
            if ( value.includes("a") ) {
                return true;
            } else {
                return false;
            }
        }
    );

    expect(filterResult).toEqual(["one partridge", "four calling birds", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking"]);
        
    filterResult = a.filter ( 
            
        function (value) {
            if ( value.includes("e") ) {
                return true;
            } else {
                return false;
            }
        }
    );
    
    expect(filterResult).toEqual(["one partridge", "two turtle doves", 
        "three french hens", "five golden rings", "six geese a-laying", 
        "seven swans a-swimming", "eight maids a-milking"]);
        
    filterResult = a.filter ( 
            
        function (value) {
            if ( value.includes("t") ) {
                return true;
            } else {
                return false;
            }
        }
    );
        
    expect(filterResult).toEqual(["one partridge", "two turtle doves", 
        "three french hens", "eight maids a-milking"]);
    
    filterResult = a.filter ( 
            
        function (value, index) {
            if ( index % 2 === 0 ) {
                return true;
            } else {
                return false;
            }
        }
    );

    expect(filterResult).toEqual(["one partridge", "three french hens", 
        "five golden rings", "seven swans a-swimming"]);
    
    filterResult = a.filter ( 
            
        function (value, index) {
            if ( index % 2 === 1 ) {
                return true;
            } else {
                return false;
            }
        }
    );
    
    expect(filterResult).toEqual(["two turtle doves", "four calling birds", 
        "six geese a-laying", "eight maids a-milking"]);

    filterResult = a.filter ( 
            
        function (value, index, array) {
            if ( index === array.length - 1 ) {
                return true;
            } else {
                return false;
            }
        }
    );
        
    expect(filterResult).toEqual(["eight maids a-milking"]);
    
    filterResult = a.filter ( 
            
        function (value, index, array) {
            if ( index >= array.length - 2 ) {
                return true;
            } else {
                return false;
            }
        }
    );
        
    expect(filterResult).toEqual(["seven swans a-swimming", "eight maids a-milking"]);

    filterResult = a.filter ( 
            
        function (value, index, array) {
            if ( index >= array.length - 5 ) {
                return true;
            } else {
                return false;
            }
        }
    );
        
    expect(filterResult).toEqual(["four calling birds", "five golden rings", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking"]);

    let mapResult = a.map ( 

        function (value) {
           return ('Also ' + value);
        }
    );

    expect(mapResult).toEqual(["Also one partridge", "Also two turtle doves", 
        "Also three french hens", "Also four calling birds", 
        "Also five golden rings", "Also six geese a-laying", 
        "Also seven swans a-swimming", "Also eight maids a-milking"]);
    
    mapResult = a.map ( 

        function (value, index) {
            return ('Also ' + value + ' on day ' + (index + 1) );
        }
    );
    
    expect(mapResult).toEqual(["Also one partridge on day 1", "Also two turtle doves on day 2", 
        "Also three french hens on day 3", "Also four calling birds on day 4", 
        "Also five golden rings on day 5", "Also six geese a-laying on day 6", 
        "Also seven swans a-swimming on day 7", "Also eight maids a-milking on day 8"]);

    mapResult = a.map ( 

        function (value, index, array) {
            return ('Also ' + value + ' on day ' + (index + 1)  
                + ' out of ' + array.length + ' days of Christmas!');
        }
    );
    
    expect(mapResult).toEqual(["Also one partridge on day 1 out of 8 days of Christmas!",
        "Also two turtle doves on day 2 out of 8 days of Christmas!",
        "Also three french hens on day 3 out of 8 days of Christmas!",
        "Also four calling birds on day 4 out of 8 days of Christmas!",
        "Also five golden rings on day 5 out of 8 days of Christmas!", 
        "Also six geese a-laying on day 6 out of 8 days of Christmas!", 
        "Also seven swans a-swimming on day 7 out of 8 days of Christmas!", 
        "Also eight maids a-milking on day 8 out of 8 days of Christmas!"]);

    mapResult = a.map ( value => 'Also ' + value );

    expect(mapResult).toEqual(["Also one partridge", "Also two turtle doves", 
        "Also three french hens", "Also four calling birds", 
        "Also five golden rings", "Also six geese a-laying", 
        "Also seven swans a-swimming", "Also eight maids a-milking"]);
});
