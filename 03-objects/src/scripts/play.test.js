import play from './play.js';

let consoleLog = [];
let consoleLine = 0;

test('Play: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('Play: coderbyte example 1', () => {
    
    consoleLog = [];
    consoleLine = 0;
    //
    // This 1st example is leading up to the example.
    // It is simple and as expected.
    //
    for (var i = 0; i < 3; i++) {
        consoleLog[consoleLine++] = i;
    }
    
    expect(consoleLog.length).toBe(3);
    
    expect(consoleLog[0]).toBe(0);
    expect(consoleLog[1]).toBe(1);
    expect(consoleLog[2]).toBe(2);
    //
    // This is the question, basically the same except using consoleLog instead
    // of alert. The answer of what gets returned is "undefined".
    //
    // Even though "i" within the callback function should have global scope, it is probably
    // undefined because "setTimeout" delays the execution and "i" must be out of scope by
    // the time it executes. Same holds true for "consoleLog".
    // 
    consoleLog = [];
    consoleLine = 0;
    for (var i = 0; i < 3; i++) {
        consoleLog[consoleLine++] = i;
        setTimeout(function () {
            consoleLog[consoleLine++] = i;
        }, 1000 + i);
     }

    expect(consoleLog.length).toBe(3);
    
    expect(consoleLog[0]).toBe(0);
    expect(consoleLog[1]).toBe(1);
    expect(consoleLog[2]).toBe(2);
    expect(consoleLog[3]).toBeUndefined();
    expect(consoleLog[4]).toBeUndefined();
    expect(consoleLog[5]).toBeUndefined();
    //
    // This is my attempt to fix it by passing "i", "consoleLog" and "consoleLine" as
    // arguments. It should work, but doesn't. That is the testing is working and still
    // "consoleLog" only has 3 elements, and index 3 is undefined. I would have expected
    // 6 elements and 0, 1, 2 values for indexes 3, 4, 5. Almost like it's not executing 
    // because the console.log does not show anything either.
    //
    consoleLog = [];
    consoleLine = 0;
    for (var i = 0; i < 3; i++) {
        consoleLog[consoleLine++] = i;
        setTimeout(function (i, consoleLog, consoleLine) {
            console.log(i, consoleLog, consoleLine);
            consoleLog[consoleLine++] = i;
        }, 1000 + i);
     }

    expect(consoleLog.length).toBe(3);
    
    expect(consoleLog[0]).toBe(0);
    expect(consoleLog[1]).toBe(1);
    expect(consoleLog[2]).toBe(2);
    expect(consoleLog[3]).toBeUndefined();
    expect(consoleLog[4]).toBeUndefined();
    expect(consoleLog[5]).toBeUndefined();

});


test('Play: coderbyte example 2', () => {
    //
    // Initially I suspected console.log[0] would be undefined. Specifically because
    // I thought in "var a = b = 5", that b was scope local only to the function. The 
    // reality is that unlike a which is defined, b is NOT defined. Therefore, this code 
    // fails with a "ReferenceError".
    //
    // So I commented that out and defined "var b". The code then preceded to fail again with
    // a "ReferenceError" at the main console.log. So essentially I was correct that b would be
    // scope local to the function. By the time the console.log executes "b" no longer exists.
    // My only mistake was that it was a reference error and not undefined.
    //
    (function() {
        // var a = b = 5;
        var b = 5;
        console.log(b);
    })()

});

test('Play: coderbyte play convert string to char array', () => {

    const string1 = '100';
    const string2 = '000';

    // Option 1
    // string.split('');
    expect(string1.split('')).toEqual(['1', '0', '0']);
    expect(string2.split('')).toEqual(['0', '0', '0']);
    
    // Option 2
    // [...string];
    expect([...string1]).toEqual(['1', '0', '0']);
    expect([...string2]).toEqual(['0', '0', '0']);

    // Option 3
    // Array.from(string);
    expect(Array.from(string1)).toEqual(['1', '0', '0']);
    expect(Array.from(string2)).toEqual(['0', '0', '0']);
    
    // Option 4
    // Object.assign([], string);
    expect(Object.assign([],string1)).toEqual(['1', '0', '0']);
    expect(Object.assign([],string2)).toEqual(['0', '0', '0']);

});

test('Play: coderbyte play convert char to boolean', () => {

    const zero = "0";
    const one = "1";
    const two = "2";

    expect(zero === "0" ? false : true).toBeFalsy();
    expect(one === "0" ? false : true).toBeTruthy();
    expect(two === "0" ? false : true).toBeTruthy();
});


test('Play: coderbyte play convert char array to boolean array', () => {
    const stringArr1 = ['1', '0', '0'];
    const stringArr2 = ['0', '0', '0'];
    expect(
        stringArr1.map( 
            (element) => {
                return element === "0" ? false : true;
            }
        )
    ).toEqual([true, false, false]);
    
    expect(
        stringArr1.map( 
            (element) => element === "0" ? false : true
        )
    ).toEqual([true, false, false]);
    
    expect(
        stringArr2.map((element) => element === "0" ? false : true)
    ).toEqual([false, false, false]);
    
});

test('Play: coderbyte example BitwiseOne', () => {

    expect(play.BitwiseOne([])).toBe("Empty");
    expect(play.BitwiseOne(["100"])).toBe("100");
    expect(play.BitwiseOne(["100", "000"])).toBe("100");
    expect(play.BitwiseOne(["1001", "0100"])).toBe("1101");
    expect(play.BitwiseOne(["1001", "0100", "0011"])).toBe("1111");
});

test('Play: coderbyte example reverse', () => {
    
    expect(play.reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(play.reverse([0, 1, 20, -3])).toEqual([-3, 20, 1, 0]);
    expect(play.reverse(["zero", "one", "two", "three"])).toEqual(["three", "two", "one", "zero"]);
    
    expect([1, 2, 3].reverse()).toEqual([3, 2, 1]);
});

test('Play: codewars Who Likes It', () => {

    const empty = [];
    const one = ["Duane"];
    const two = ["Duane", "Suzanne"];
    const three = ["Duane", "Suzanne", "Sasha"];
    const four = ["Duane", "Suzanne", "Sasha", "Christopher"];
    const five = ["Duane", "Suzanne", "Sasha", "Christopher", "Disesl"];

    expect(play.likesMySolution(empty)).toBe("no one likes this");
    expect(play.likesMySolution(one)).toBe("Duane likes this");
    expect(play.likesMySolution(two)).toBe("Duane and Suzanne like this");
    expect(play.likesMySolution(three)).toBe("Duane, Suzanne and Sasha like this");
    expect(play.likesMySolution(four)).toBe("Duane, Suzanne and 2 others like this");
    expect(play.likesMySolution(five)).toBe("Duane, Suzanne and 3 others like this");

    expect(play.likesBest1(empty)).toBe("no one likes this");
    expect(play.likesBest1(one)).toBe("Duane likes this");
    expect(play.likesBest1(two)).toBe("Duane and Suzanne like this");
    expect(play.likesBest1(three)).toBe("Duane, Suzanne and Sasha like this");
    expect(play.likesBest1(four)).toBe("Duane, Suzanne and 2 others like this");
    expect(play.likesBest1(five)).toBe("Duane, Suzanne and 3 others like this");
});

test('Play: Credit Card Mask', () => {

    expect(play.myMaskify('4556364607935616')).toBe('############5616');
    expect(play.myMaskify('1')).toBe('1');
    expect(play.myMaskify('11111')).toBe('#1111');
    expect(play.myMaskify('1234')).toBe('1234');
    expect(play.myMaskify('')).toBe('');

    expect(play.maskify1('4556364607935616')).toBe('############5616');
    expect(play.maskify1('1')).toBe('1');
    expect(play.maskify1('11111')).toBe('#1111');
    expect(play.maskify1('1234')).toBe('1234');
    expect(play.maskify1('')).toBe('');

    expect(play.maskify2('4556364607935616')).toBe('############5616');
    expect(play.maskify2('1')).toBe('1');
    expect(play.maskify2('11111')).toBe('#1111');
    expect(play.maskify2('1234')).toBe('1234');
    expect(play.maskify2('')).toBe('');

    expect(play.maskify3('4556364607935616')).toBe('############5616');
    expect(play.maskify3('1')).toBe('1');
    expect(play.maskify3('11111')).toBe('#1111');
    expect(play.maskify3('1234')).toBe('1234');
    expect(play.maskify3('')).toBe('');
});