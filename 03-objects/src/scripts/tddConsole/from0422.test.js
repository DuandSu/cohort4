test('From 0422', () => {

    const song = [
        "a partridge in a pear tree",
        "two turtle doves",
        "three French hens",
        "four calling birds",
        "five golden rings",
        "six geese a-laying",
        "seven swans a-swimming",
        "eight maids a-milking",
        "nine ladies dancing",
        "ten lords a-leaping",
        "eleven pipers piping",
        "twelve drummers drumming"
    ]
    expect (song).toEqual([
        "a partridge in a pear tree",
        "two turtle doves",
        "three French hens",
        "four calling birds",
        "five golden rings",
        "six geese a-laying",
        "seven swans a-swimming",
        "eight maids a-milking",
        "nine ladies dancing",
        "ten lords a-leaping",
        "eleven pipers piping",
        "twelve drummers drumming"]);
                
    expect(song.length).toBe[12];

    expect(song[0]).toBe["a partridge in a pear tree"];
    expect(song[1]).toBe["two turtle doves"];
    expect(song[2]).toBe["three French hens"];
    expect(song[3]).toBe["four calling birds"];
    expect(song[4]).toBe["five golden rings"];
    expect(song[5]).toBe["six geese a-laying"];
    expect(song[6]).toBe["seven swans a-swimming"];
    expect(song[7]).toBe["eight maids a-milking"];
    expect(song[8]).toBe["nine ladies dancing"];
    expect(song[9]).toBe["ten lords a-leaping"];
    expect(song[10]).toBe["eleven pipers piping"];
    expect(song[11]).toBe["twelve drummers drumming"];

    let filterResult = song.filter(  element => element.includes('a') );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "four calling birds", "six geese a-laying", "seven swans a-swimming", 
        "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping"]);

    function f1 (element) {
        if (element.includes('a')) {
            return true
        } else {
            return false
        }
    }

    filterResult = song.filter( f1 );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "four calling birds", "six geese a-laying", "seven swans a-swimming", 
        "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping"]);

    function f2 () { return true }

    filterResult = song.filter( f2 );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "two turtle doves", "three French hens", "four calling birds", 
        "five golden rings", "six geese a-laying", "seven swans a-swimming", 
        "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping", 
        "eleven pipers piping", "twelve drummers drumming"]);

    function f3 () { return false }

    filterResult = song.filter( f3 );
    
    expect(filterResult).toEqual([]);
    
    function f4 (element, index) { return index < 5 }
    
    filterResult = song.filter( f4 );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "two turtle doves", "three French hens", "four calling birds", 
        "five golden rings"]);

    filterResult = song.filter (  function f5 (element, index) { return index >=5 }  );

    expect(filterResult).toEqual(["six geese a-laying", 
        "seven swans a-swimming", "eight maids a-milking", 
        "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", 
        "twelve drummers drumming"]);

    filterResult = song.filter (  function (element, index) { return index % 2 === 0 }  );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "three French hens", "five golden rings", "seven swans a-swimming", 
        "nine ladies dancing", "eleven pipers piping"]);

    const f6 = function (element, index) { return index % 2 === 1 }

    filterResult = song.filter( f6 );

    expect(filterResult).toEqual(["two turtle doves", "four calling birds", 
        "six geese a-laying", "eight maids a-milking", "ten lords a-leaping", 
        "twelve drummers drumming"]);

    const f7 = (element, index) => { return index % 3 === 2 }

    filterResult = song.filter( f7 );

    expect(filterResult).toEqual(["three French hens", "six geese a-laying", 
        "nine ladies dancing", "twelve drummers drumming"]);

    const f8 = element => { return element.length >= 20 }

    filterResult = song.filter( f8 );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "seven swans a-swimming", "eight maids a-milking", 
        "eleven pipers piping", "twelve drummers drumming"]);

    const f9 = element => element.length < 20;

    filterResult = song.filter( f9 );

    expect(filterResult).toEqual(["two turtle doves", "three French hens", 
        "four calling birds", "five golden rings", "six geese a-laying", 
        "nine ladies dancing", "ten lords a-leaping"]);

    filterResult = song.filter ( element => element.length % 2 === 0 );

    expect(filterResult).toEqual(["a partridge in a pear tree", 
        "two turtle doves", "four calling birds", "six geese a-laying", 
        "seven swans a-swimming", "eleven pipers piping", 
        "twelve drummers drumming"]);

    filterResult = song.filter ( element => element.length % 2 === 1 );

    expect(filterResult).toEqual(["three French hens", "five golden rings", 
        "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping"]);

    function f10 (element) {
        let result
        
        if (element.length % 2 === 1) {
            result = true
        } else {
            result = false
        }
        return result
    }

    filterResult = song.filter (f10);

    expect(filterResult).toEqual(["three French hens", "five golden rings", 
        "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping"]);

    const lied = [
        'Der du von dem Himmel bist',
        'Alles Leid und Schmerzen stillest',
        'Doppelt mit Erquickung f�llest'
    ];

    filterResult = lied.filter( f10);

    expect(filterResult).toEqual(["Alles Leid und Schmerzen stillest"]);

    const literature = [ song, lied ];

    expect(literature.length).toBe(2);

    expect(literature[0].length).toBe(12);
    expect(literature[0][0]).toBe("a partridge in a pear tree");
    expect(literature[0][11]).toBe("twelve drummers drumming");

    expect(literature[1].length).toBe(3);
    expect(literature[1][0]).toBe('Der du von dem Himmel bist');
    expect(literature[1][2]).toBe('Doppelt mit Erquickung f�llest');

    let testOutput = [];
    let testOutputLine = 0;

    for (let i = 0; i < literature.length; i = i + 1) {
        testOutput[testOutputLine++] = literature[i].filter (f10);
     }

    expect(testOutput.length).toBe(2);
    expect(testOutput[0]).toEqual(["three French hens", "five golden rings", 
        "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping"]);
    expect(testOutput[1]).toEqual(["Alles Leid und Schmerzen stillest"]);

    const numbers = [182, 157, 180, 160, 230];

    expect(numbers.sort()).toEqual([157, 160, 180, 182, 230]);
    expect(numbers).toEqual([157, 160, 180, 182, 230]);

    expect(numbers.push(1111111)).toBe(6);
    expect(numbers).toEqual([157, 160, 180, 182, 230, 1111111]);
    
    expect(numbers.sort()).toEqual([1111111, 157, 160, 180, 182, 230]);
    expect(numbers).toEqual([1111111, 157, 160, 180, 182, 230]);

    // Sort Ascending

    function s1 (a, b) {
        let result;
        if (a < b) {
           result = -1;
        } else if (a > b) {
           result = 1;
        } else {
           result = 0;
        }
        return result;
    }

    expect(numbers.sort( s1 )).toEqual([157, 160, 180, 182, 230, 1111111]);
    expect(numbers).toEqual([157, 160, 180, 182, 230, 1111111]);

    function randomNumbers (howMany, min, max) {
        let result = [];
        for (let i = 0; i < howMany; i = i + 1) {
            result.push( Math.round (Math.random() * (max - min)) + min );
        }
        return result;
    }

    const n2 = randomNumbers(10, 0, 100);

    // Eg. n2 is [8, 44, 37, 29, 41, 90, 37, 1, 91, 40]
    //
    // Can not test for Exact state of the array since
    // it is random. However, it will still be 10 elements.

    expect(n2.length).toBe(10);

    // And can check that all the numbers are in the range requested.

    let checkVal = function ( element ) { return (element >= 0 && element <= 100)}
    let checkReduce = function (acc, value) { return acc && value}

    expect(n2.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    n2.sort( s1 );

    // Eg. n2 is [1, 8, 29, 37, 37, 40, 41, 44, 90, 91]

    expect(n2.length).toBe(10);

    // Sort Descending
    
    function s2 (a, b) {
        let result;
        if (a > b) {
           result = -1;
        } else if (a < b) {
           result = 1;
        } else {
           result = 0;
        }
        return result;
    }

    n2.sort( s2);

    // Eg. n2 is [91, 90, 44, 41, 40, 37, 37, 29, 8, 1]
    
    expect(n2.length).toBe(10);
    
    n2.sort( s1 );

    // Eg. n2 is [1, 8, 29, 37, 37, 40, 41, 44, 90, 91]

    expect(n2.length).toBe(10);
    
    const song2 = song.map (a=>a);

    expect(song2.length).toBe(12);
    expect(song2).toEqual(["a partridge in a pear tree", "two turtle doves", 
        "three French hens", "four calling birds", "five golden rings", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", 
        "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", 
        "twelve drummers drumming"]);

    song2.sort();

    expect(song2).toEqual(["a partridge in a pear tree", "eight maids a-milking", 
    "eleven pipers piping", "five golden rings", "four calling birds", 
    "nine ladies dancing", "seven swans a-swimming", "six geese a-laying", 
    "ten lords a-leaping", "three French hens", "twelve drummers drumming", 
    "two turtle doves"]);

    song2.sort ( s2 );

    expect(song2).toEqual(["two turtle doves", "twelve drummers drumming", 
        "three French hens", "ten lords a-leaping", "six geese a-laying", 
        "seven swans a-swimming", "nine ladies dancing", "four calling birds", 
        "five golden rings", "eleven pipers piping", "eight maids a-milking", 
        "a partridge in a pear tree"]);

    const fancyNumberSorter = (a, b) => a - b;

    const n3 = randomNumbers (10, 100, 200);

    // Eg. n3 is [122, 111, 109, 182, 112, 182, 174, 107, 145, 159]
    
    checkVal = function ( element ) { return (element >= 100 && element <= 200)}
    expect(n3.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    n3.sort (fancyNumberSorter);

    // Eg. n3 is [107, 109, 111, 112, 122, 145, 159, 174, 182, 182]
    
    expect (n3.length).toBe(10);
    
    function s1fancy (a, b) {
        let result;
        if (a < b) {
            result = a - b;
        } else if (a > b) {
            result = a - b;
        } else {
            result = a - b;
        }
        return result;
    }
    
    let n4 = randomNumbers (10 , 200, 300);
    
    // Eg. n4 is [259, 294, 236, 279, 201, 267, 266, 277, 249, 252]
    
    expect(n4.length).toBe(10);

    checkVal = function ( element ) { return (element >= 200 && element <= 300)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();    

    n4.sort (s1fancy);
    
    // Eg. n4 is [201, 236, 249, 252, 259, 266, 267, 277, 279, 294]
    
    expect(n4.length).toBe(10);
    
    function s1fancyVerbose (a, b) {
        let result;
        if (a < b) {
            result = a - b;
        } else if (a > b) {
            result = a - b;
        } else {
            result = a - b;
        }
        testOutput[testOutputLine++] = "a, b, result: " + a + " " + b 
            + " " + result;
        return result;
    }
    
    n4 = randomNumbers (10 , 200, 300);
    
    // Eg. n4 is [264, 295, 205, 288, 262, 212, 285, 261, 205, 237]
    
    expect(n4.length).toBe(10);

    checkVal = function ( element ) { return (element >= 200 && element <= 300)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    testOutput = [];
    testOutputLine = 0;
    
    n4.sort (s1fancyVerbose);
    
    // Eg. Output is:
    //
    // a, b, result: 295 264 31
    // a, b, result: 205 295 -90
    // a, b, result: 205 264 -59
    // a, b, result: 288 264 24
    // a, b, result: 288 295 -7
    // a, b, result: 262 288 -26    
    // a, b, result: 262 264 -2
    // a, b, result: 262 205 57
    // a, b, result: 212 264 -52
    // a, b, result: 212 262 -50
    // a, b, result: 212 205 7
    // a, b, result: 285 264 21
    // a, b, result: 285 295 -10
    // a, b, result: 285 288 -3
    // a, b, result: 261 264 -3
    // a, b, result: 261 212 49
    // a, b, result: 261 262 -1
    // a, b, result: 205 264 -59
    // a, b, result: 205 261 -56
    // a, b, result: 205 212 -7
    // a, b, result: 205 205 0
    // a, b, result: 237 262 -25
    // a, b, result: 237 212 25
    // a, b, result: 237 261 -24

    // Eg. n4 is [205, 205, 212, 237, 261, 262, 264, 285, 288, 295]

    expect(n4.length).toBe(10);

    function s1Verbose (a, b) {
        let result;
        if (a < b) {
            result = -1;
        } else if (a > b) {
            result = 1;
        } else {
            result = 0;
        }
        testOutput[testOutputLine++] = "a, b, result: " + a + " " + b 
            + " " + result;
        return result;
    }
    
    n4 = randomNumbers (10 , 200, 300);
    
    // Eg. n4 is [237, 240, 262, 297, 290, 233, 295, 252, 298, 221]
    
    expect(n4.length).toBe(10);
    
    checkVal = function ( element ) { return (element >= 200 && element <= 300)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    testOutput = [];
    testOutputLine = 0;
    
    n4.sort ( s1Verbose );
    
    // Eg. Output is:
    // a, b, result 240 237 1
    // a, b, result 262 240 1
    // a, b, result 297 262 1
    // a, b, result 290 297 -1
    // a, b, result 290 262 1
    // a, b, result 290 297 -1
    // a, b, result 233 262 -1
    // a, b, result 233 240 -1
    // a, b, result 233 237 -1
    // a, b, result 295 262 1
    // a, b, result 295 297 -1
    // a, b, result 295 290 1
    // a, b, result 252 262 -1
    // a, b, result 252 237 1
    // a, b, result 252 240 1
    // a, b, result 298 262 1
    // a, b, result 298 295 1
    // a, b, result 298 297 1
    // a, b, result 221 262 -1
    // a, b, result 221 240 -1
    // a, b, result 221 237 -1
    // a, b, result 221 233 -1
    
    // Eg. n4 is [237, 240, 262, 297, 290, 233, 295, 252, 298, 221]
    
    expect(n4.length).toBe(10);
    
    let song3 = song.map (a=>a);
    
    expect(song3.length).toBe(12);
    expect(song3).toEqual(["a partridge in a pear tree", "two turtle doves", 
    "three French hens", "four calling birds", "five golden rings", 
    "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", 
    "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping",
    "twelve drummers drumming"]);
    
    n4 = randomNumbers (10 , 200, 300);
    
    // Eg. n4 is [223, 220, 285, 228, 260, 216, 266, 253, 242, 231]
    
    expect(n4.length).toBe(10);
    
    checkVal = function ( element ) { return (element >= 200 && element <= 300)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    n4.sort ( (a, b) => a - b );
    
    // Eg. n4 is [216, 220, 223, 228, 231, 242, 253, 260, 266, 285]
    
    expect(n4.length).toBe(10);
   
    song3.sort ( (a, b) => a - b );

    expect(song3).toEqual(["a partridge in a pear tree", "two turtle doves", 
        "three French hens", "four calling birds", "five golden rings", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", 
        "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", 
        "twelve drummers drumming"]);

    expect("abc" - "def").toBe(NaN);

    function wrongSorter (a, b) {
        testOutput[testOutputLine++] = `a, b, result ${a} ${b} ${a-b}`;
        return a-b;
     }
    
     testOutput = [];
     testOutputLine = 0;
     
     song3.sort (wrongSorter);
     
     expect(testOutput[0]).toBe("a, b, result two turtle doves a partridge in a pear tree NaN");
     expect(testOutput[1]).toBe("a, b, result three French hens two turtle doves NaN");
     expect(testOutput[2]).toBe("a, b, result four calling birds three French hens NaN");
     expect(testOutput[3]).toBe("a, b, result five golden rings four calling birds NaN");
     expect(testOutput[4]).toBe("a, b, result six geese a-laying five golden rings NaN");
     expect(testOutput[5]).toBe("a, b, result seven swans a-swimming six geese a-laying NaN");
     expect(testOutput[6]).toBe("a, b, result eight maids a-milking seven swans a-swimming NaN");
     expect(testOutput[7]).toBe("a, b, result nine ladies dancing eight maids a-milking NaN");
     expect(testOutput[8]).toBe("a, b, result ten lords a-leaping nine ladies dancing NaN");
     expect(testOutput[9]).toBe("a, b, result eleven pipers piping ten lords a-leaping NaN");
     expect(testOutput[10]).toBe("a, b, result twelve drummers drumming eleven pipers piping NaN");
     
     expect(song3).toEqual(["a partridge in a pear tree", "two turtle doves", 
        "three French hens", "four calling birds", "five golden rings", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", 
        "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", 
        "twelve drummers drumming"]);
    
    song3.sort (s1fancy);

    expect(song3).toEqual(["a partridge in a pear tree", "two turtle doves", 
        "three French hens", "four calling birds", "five golden rings", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", 
        "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", 
        "twelve drummers drumming"]);

    testOutput = [];
    testOutputLine = 0;
     
    song3.sort ( s1Verbose );

    expect(testOutput[0]).toBe("a, b, result: two turtle doves a partridge in a pear tree 1");
    expect(testOutput[1]).toBe("a, b, result: three French hens two turtle doves -1");
    expect(testOutput[2]).toBe("a, b, result: three French hens two turtle doves -1");
    expect(testOutput[3]).toBe("a, b, result: three French hens a partridge in a pear tree 1");
    expect(testOutput[4]).toBe("a, b, result: four calling birds three French hens -1");
    expect(testOutput[5]).toBe("a, b, result: four calling birds a partridge in a pear tree 1");
    expect(testOutput[6]).toBe("a, b, result: five golden rings three French hens -1");
    expect(testOutput[7]).toBe("a, b, result: five golden rings four calling birds -1");
    expect(testOutput[8]).toBe("a, b, result: five golden rings a partridge in a pear tree 1");
    expect(testOutput[9]).toBe("a, b, result: six geese a-laying four calling birds 1");
    expect(testOutput[10]).toBe("a, b, result: six geese a-laying two turtle doves -1");
    expect(testOutput[11]).toBe("a, b, result: six geese a-laying three French hens -1");
    expect(testOutput[12]).toBe("a, b, result: seven swans a-swimming six geese a-laying -1");
    expect(testOutput[13]).toBe("a, b, result: seven swans a-swimming five golden rings 1");
    expect(testOutput[14]).toBe("a, b, result: seven swans a-swimming four calling birds 1");
    expect(testOutput[15]).toBe("a, b, result: eight maids a-milking seven swans a-swimming -1");
    expect(testOutput[16]).toBe("a, b, result: eight maids a-milking five golden rings -1");
    expect(testOutput[17]).toBe("a, b, result: eight maids a-milking a partridge in a pear tree 1");
    expect(testOutput[18]).toBe("a, b, result: nine ladies dancing seven swans a-swimming -1");
    expect(testOutput[19]).toBe("a, b, result: nine ladies dancing five golden rings 1");
    expect(testOutput[20]).toBe("a, b, result: nine ladies dancing four calling birds 1");
    expect(testOutput[21]).toBe("a, b, result: ten lords a-leaping nine ladies dancing 1");
    expect(testOutput[22]).toBe("a, b, result: ten lords a-leaping three French hens -1");
    expect(testOutput[23]).toBe("a, b, result: ten lords a-leaping six geese a-laying 1");
    expect(testOutput[24]).toBe("a, b, result: eleven pipers piping seven swans a-swimming -1");
    expect(testOutput[25]).toBe("a, b, result: eleven pipers piping five golden rings -1");
    expect(testOutput[26]).toBe("a, b, result: eleven pipers piping eight maids a-milking 1");
    expect(testOutput[27]).toBe("a, b, result: twelve drummers drumming nine ladies dancing 1");
    expect(testOutput[28]).toBe("a, b, result: twelve drummers drumming ten lords a-leaping 1");
    expect(testOutput[29]).toBe("a, b, result: twelve drummers drumming two turtle doves -1");
    expect(testOutput[30]).toBe("a, b, result: twelve drummers drumming three French hens 1");
    
    expect(song3).toEqual(["a partridge in a pear tree", "eight maids a-milking", 
        "eleven pipers piping", "five golden rings", "four calling birds", 
        "nine ladies dancing", "seven swans a-swimming", "six geese a-laying", 
        "ten lords a-leaping", "three French hens", "twelve drummers drumming", 
        "two turtle doves"]);

    n4 = randomNumbers (10 , 0, 100);

    // Eg. n4 is [81, 50, 58, 100, 29, 46, 48, 5, 43, 72]
    
    expect(n4.length).toBe(10);

    checkVal = function ( element ) { return (element >= 0 && element <= 100)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    filterResult = n4.filter ( element => element % 2 === 1 );
    
    // Eg. filterResult is [81, 29, 5, 43]
    
    filterResult = n4.filter ( element => element % 2 === 0 );
    
    // Eg. filterResult is [50, 58, 100, 46, 48, 72]
    
    let h = function ( value ) { return value * 2 }
    
    expect ("a" * 2).toBe(NaN);
    
    let mapResult = n4.map (h);
    
    // Eg. mapResult is [162, 100, 116, 200, 58, 92, 96, 10, 86, 144]
    // n4 is still [81, 50, 58, 100, 29, 46, 48, 5, 43, 72]
    
    expect(n4.length).toBe(10);
    expect(mapResult.length).toBe(10);
    
    h = function ( value ) { return value % 2 === 0 }
    
    expect(h(1)).toBeFalsy();
    expect(h(0)).toBeTruthy();
    
    mapResult = n4.map (h);
    
    // Eg. mapResult is [false, true, true, true, false, true, true, false, 
    //  false, true]
    
    n4 = randomNumbers (20 , 90, 170);

    // Eg. n4 is [115, 97, 151, 162, 113, 126, 132, 120, 139, 139, 132, 167, 
    //  94, 160, 145, 107, 165, 108, 147, 121]
    
    expect(n4.length).toBe(20);

    checkVal = function ( element ) { return (element >= 90 && element <= 170)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    filterResult = n4.filter ( a => a >= 120 );

    // Eg. filterResult is [151, 162, 126, 132, 120, 139, 139, 132, 167, 160, 
    //  145, 165, 147, 121]

    mapResult = n4.map ( a => a >= 120 );

    // Eg. mapResult is [false, false, true, true, false, true, true, true, 
    //  true, true, true, true, false, true, true, false, true, false, true, 
    //  true]

    function ourOwnFilter1 ( someArray, filterCallback ) {

        const testers = someArray.map ( filterCallback );
        const result = [];
        for (let i = 0; i < someArray.length; i++ ) {
           if (testers[i]) { result.push (someArray[i]) }
        }
        return result;
    }

    filterResult = ourOwnFilter1 ( n4, a => a >= 120 );

    // Eg. filterResult is [151, 162, 126, 132, 120, 139, 139, 132, 167, 160, 
    // 145, 165, 147, 121]
    
    filterResult = n4.filter ( a => a >= 120 );
    
    // Eg. filterResult is [151, 162, 126, 132, 120, 139, 139, 132, 167, 160, 
    // 145, 165, 147, 121]

    h = function (value, index) { return value + index }

    n4 = randomNumbers (10 , 0, 20);

    // Eg. n4 is [14, 16, 8, 6, 10, 16, 13, 4, 18, 13]

    expect(n4.length).toBe(10);

    checkVal = function ( element ) { return (element >= 0 && element <= 20)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    mapResult = n4.map ( h );

    // Eg. mapResult is [14, 17, 10, 9, 14, 21, 19, 11, 26, 22]

    h = function (value, index, array) { return value + index + array.length}

    mapResult = n4.map ( h );

    // Eg. mapResult is [24, 27, 20, 19, 24, 31, 29, 21, 36, 32]

    h = function (value, index, array) { 
        testOutput[testOutputLine++] = value + " " + index + " " 
            + array.length;
        return value + index + array.length}

    testOutput = [];
    testOutputLine = 0;

    mapResult = n4.map ( h );

    // Eg. mapResult is [24, 27, 20, 19, 24, 31, 29, 21, 36, 32]
    // And:
    // testOutput[0] is 14 0 10
    // testOutput[0] is 16 1 10
    // testOutput[0] is 8 2 10
    // testOutput[0] is 6 3 10
    // testOutput[0] is 10 4 10
    // testOutput[0] is 16 5 10
    // testOutput[0] is 13 6 10
    // testOutput[0] is 4 7 10
    // testOutput[0] is 18 8 10
    // testOutput[0] is 13 9 10

    n4 = n4.map ( element => element.toString() );

    // Eg. n4 is ["14", "16", "8", "6", "10", "16", "13", "4", "18", "13"]

    let reduceResult = n4.map( element => Number(element) ).reduce ( (acc,value) => acc+value );

    // Eg. reduceResult is 118
    
    n4 = [1, 2, 3];

    h = function (acc, value) { return acc + value }

    expect(n4.reduce(h)).toBe(6);
    expect(n4).toEqual([1, 2, 3]);

    n4 = [24, 27, 20, 19, 24, 31, 29, 21, 36, 32];

    expect(n4.reduce (h)).toBe(263);

    testOutput = [];
    testOutputLine = 0;

    reduceResult = n4.map( element => { testOutput[testOutputLine++] = Number(element); 
        return Number(element) } ).reduce( (acc,value) => acc+value );

    expect (reduceResult).toBe(263);
    expect(testOutput).toEqual([24, 27, 20, 19, 24, 31, 29, 21, 36, 32]);

    n4 = [1, 2, 3, 4];

    reduceResult = n4.reduce ( (acc, value) => acc + value );

    expect(reduceResult).toBe(10);

    reduceResult = n4.reduce ( (acc, value) => acc - value );
    
    expect(reduceResult).toBe(-8);

    reduceResult = n4.reduce ( (acc, value) => acc - value, 0 );
    
    expect(reduceResult).toBe(-10);

    reduceResult = n4.reduce ( (acc, value) => acc + value, 0 );
    
    expect(reduceResult).toBe(10);

    n4 = song.map (a=>a);

    expect(n4).toEqual(["a partridge in a pear tree", "two turtle doves", 
        "three French hens", "four calling birds", "five golden rings", 
        "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", 
        "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", 
        "twelve drummers drumming"]);

    h = function (acc, value) { testOutput[testOutputLine++] = value; return acc }

    n4 = [1, 2, 3, 4];

    testOutput = [];
    testOutputLine = 0;

    reduceResult = n4.reduce ( h, 0 );

    expect(reduceResult).toBe(0);
    expect(testOutput).toEqual([1, 2, 3, 4]);

    h = function (acc, value) { testOutput[testOutputLine++] = 'value: ' + value; 
        return acc }
    
    testOutput = [];
    testOutputLine = 0;
    
    reduceResult = n4.reduce ( h, 0 );
    
    expect(reduceResult).toBe(0);
    expect(testOutput[0]).toBe("value: 1");
    expect(testOutput[1]).toBe("value: 2");
    expect(testOutput[2]).toBe("value: 3");
    expect(testOutput[3]).toBe("value: 4");
    
    h = function (acc, value) { testOutput[testOutputLine++] = 'value: ' + value; 
        return acc + value}
    
    testOutput = [];
    testOutputLine = 0;
        
    reduceResult = n4.reduce ( h, 0 );
        
    expect(reduceResult).toBe(10);
    expect(testOutput[0]).toBe("value: 1");
    expect(testOutput[1]).toBe("value: 2");
    expect(testOutput[2]).toBe("value: 3");
    expect(testOutput[3]).toBe("value: 4");
    
    testOutput = [];
    testOutputLine = 0;
        
    reduceResult = n4.reduce ( h );
        
    expect(reduceResult).toBe(10);
    expect(testOutput[0]).toBe("value: 2");
    expect(testOutput[1]).toBe("value: 3");
    expect(testOutput[2]).toBe("value: 4");
        
    h = function (acc, value) { testOutput[testOutputLine++] = 'value: ' + value; 
        return acc + Math.sqrt(value) }

    n4 = [1, 4, 9, 16];

    testOutput = [];
    testOutputLine = 0;

    reduceResult = n4.reduce ( h );

    expect(reduceResult).toBe(10);
    expect(testOutput[0]).toBe("value: 4");
    expect(testOutput[1]).toBe("value: 9");
    expect(testOutput[2]).toBe("value: 16");

    n4 = [1, 9, 16, 25];

    testOutput = [];
    testOutputLine = 0;

    reduceResult = n4.reduce ( h );

    expect(reduceResult).toBe(13);
    expect(testOutput[0]).toBe("value: 9");
    expect(testOutput[1]).toBe("value: 16");
    expect(testOutput[2]).toBe("value: 25");
    
    n4 = [4];
    
    testOutput = [];
    testOutputLine = 0;
    
    reduceResult = n4.reduce ( h );
    
    expect(reduceResult).toBe(4);
    expect(testOutput).toEqual([]);
    
    testOutput = [];
    testOutputLine = 0;
    
    reduceResult = n4.reduce ( h, 0 );
    
    expect(reduceResult).toBe(2);
    expect(testOutput[0]).toBe("value: 4");
    
    n4 = [-4, 4, 9, 16];
    
    testOutput = [];
    testOutputLine = 0;
    
    reduceResult = n4.reduce ( h );
    
    expect(reduceResult).toBe(5);
    expect(testOutput[0]).toBe("value: 4");
    expect(testOutput[1]).toBe("value: 9");
    expect(testOutput[2]).toBe("value: 16");
    
    testOutput = [];
    testOutputLine = 0;
    
    reduceResult = n4.reduce ( h, 0 );
    
    expect(reduceResult).toBe(NaN);
    expect(testOutput[0]).toBe("value: -4");
    expect(testOutput[1]).toBe("value: 4");
    expect(testOutput[2]).toBe("value: 9");
    expect(testOutput[3]).toBe("value: 16");

    n4 = randomNumbers (10 , 0, 100);

    // Eg. n4 is [43, 92, 92, 82, 8, 38, 76, 73, 68, 90]
    
    expect(n4.length).toBe(10);
    
    checkVal = function ( element ) { return (element >= 0 && element <= 100)}
    expect(n4.map( checkVal ).reduce (checkReduce, true)).toBeTruthy();

    mapResult = n4 = n4.map (number => number.toString());

    // Eg. mapResult is ["43", "92", "92", "82", "8", "38", "76", "73", "68", "90"]
    
    mapResult = n4.map ( element => Number(element));
    
    // Eg. mapResult is [43, 92, 92, 82, 8, 38, 76, 73, 68, 90]

    let xxx = n4.map (element => Number (element));

    // Eg. xxx is [43, 92, 92, 82, 8, 38, 76, 73, 68, 90]
    
    reduceResult = xxx.reduce ( (acc,value) => acc + value, 0 );
    
    // Eg. reduceResult is 662
    
    reduceResult = (n4.map( element => Number(element) )).reduce ( 
        (acc, value) => acc + value, 0);
        
    // Eg. reduceResult is 662
    
    reduceResult = ([1, 2, 3, 4]).reduce( (acc, value) => acc + value, 0);
    
    expect(reduceResult).toBe(10);
    
    h = function (acc, value) { return acc+value }
    
    let initialValue = 0;
    
    reduceResult = ([1, 2, 3, 4]).reduce( h, initialValue );

    expect(reduceResult).toBe(10);

    n4 = [1, 2, 3, 4];

    filterResult = n4.filter ( element => element %2 === 0 );

    expect(filterResult).toEqual([2, 4]);

    let findResult = n4.find ( element => element %2 === 0 );

    expect(findResult).toBe(2);
    
    n4 = [1, 5, 3, 4];
    
    findResult = n4.find ( element => element %2 === 0 );
    
    expect(findResult).toBe(4);

    n4 = [1, 5, 3, 7];
    
    findResult = n4.find ( element => element %2 === 0 );
    
    expect(findResult).toBeUndefined();

    n4 = [1, 2, 3, 4];

    findResult = n4.findIndex ( element => element %2 === 0 );

    expect(findResult).toBe(1);
    
    findResult = n4 [  n4.findIndex ( element => element %2 === 0 ) ];

    expect(findResult).toBe(2);
    
    n4 = [1, 5, 3, 4];
    
    findResult = n4.findIndex ( element => element %2 === 0 );
    
    expect(findResult).toBe(3);
    
    n4 = [1, 5, 3, 7];
    
    findResult = n4.findIndex ( element => element %2 === 0 );
    
    expect(findResult).toBe(-1);

    // Is this the experiment???

    testOutput = [];
    testOutputLine = 0;

    for (let i = 0; i < song.length; i ++ ) {
        testOutput[testOutputLine++] = "Also " + song[i];
     }

    expect(testOutput[0]).toBe("Also a partridge in a pear tree");
    expect(testOutput[1]).toBe("Also two turtle doves");
    expect(testOutput[2]).toBe("Also three French hens");
    expect(testOutput[3]).toBe("Also four calling birds");
    expect(testOutput[4]).toBe("Also five golden rings");
    expect(testOutput[5]).toBe("Also six geese a-laying");
    expect(testOutput[6]).toBe("Also seven swans a-swimming");
    expect(testOutput[7]).toBe("Also eight maids a-milking");
    expect(testOutput[8]).toBe("Also nine ladies dancing");
    expect(testOutput[9]).toBe("Also ten lords a-leaping");
    expect(testOutput[10]).toBe("Also eleven pipers piping");
    expect(testOutput[11]).toBe("Also twelve drummers drumming");

    testOutput = [];
    testOutputLine = 0;
    
    for (const line of song) {
        testOutput[testOutputLine++] = "Also " + line;
    }
    
    expect(testOutput[0]).toBe("Also a partridge in a pear tree");
    expect(testOutput[1]).toBe("Also two turtle doves");
    expect(testOutput[2]).toBe("Also three French hens");
    expect(testOutput[3]).toBe("Also four calling birds");
    expect(testOutput[4]).toBe("Also five golden rings");
    expect(testOutput[5]).toBe("Also six geese a-laying");
    expect(testOutput[6]).toBe("Also seven swans a-swimming");
    expect(testOutput[7]).toBe("Also eight maids a-milking");
    expect(testOutput[8]).toBe("Also nine ladies dancing");
    expect(testOutput[9]).toBe("Also ten lords a-leaping");
    expect(testOutput[10]).toBe("Also eleven pipers piping");
    expect(testOutput[11]).toBe("Also twelve drummers drumming");
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const whatever in song) {
        testOutput[testOutputLine++] = "Also " + whatever;
    }
    
    expect(testOutput[0]).toBe("Also 0");
    expect(testOutput[1]).toBe("Also 1");
    expect(testOutput[2]).toBe("Also 2");
    expect(testOutput[3]).toBe("Also 3");
    expect(testOutput[4]).toBe("Also 4");
    expect(testOutput[5]).toBe("Also 5");
    expect(testOutput[6]).toBe("Also 6");
    expect(testOutput[7]).toBe("Also 7");
    expect(testOutput[8]).toBe("Also 8");
    expect(testOutput[9]).toBe("Also 9");
    expect(testOutput[10]).toBe("Also 10");
    expect(testOutput[11]).toBe("Also 11");

    testOutput = [];
    testOutputLine = 0;
    
    for (const whatever in song) {
        testOutput[testOutputLine++] = "Also " + song[whatever];
    }
    
    expect(testOutput[0]).toBe("Also a partridge in a pear tree");
    expect(testOutput[1]).toBe("Also two turtle doves");
    expect(testOutput[2]).toBe("Also three French hens");
    expect(testOutput[3]).toBe("Also four calling birds");
    expect(testOutput[4]).toBe("Also five golden rings");
    expect(testOutput[5]).toBe("Also six geese a-laying");
    expect(testOutput[6]).toBe("Also seven swans a-swimming");
    expect(testOutput[7]).toBe("Also eight maids a-milking");
    expect(testOutput[8]).toBe("Also nine ladies dancing");
    expect(testOutput[9]).toBe("Also ten lords a-leaping");
    expect(testOutput[10]).toBe("Also eleven pipers piping");
    expect(testOutput[11]).toBe("Also twelve drummers drumming");

    testOutput = [];
    testOutputLine = 0;

    for (let i = 0; i < song.length; i ++ ) {
        testOutput[testOutputLine++] = "Also on day " + (i+1) + " i got " + song[i];
    }
    
    expect(testOutput[0]).toBe("Also on day 1 i got a partridge in a pear tree");
    expect(testOutput[1]).toBe("Also on day 2 i got two turtle doves");
    expect(testOutput[2]).toBe("Also on day 3 i got three French hens");
    expect(testOutput[3]).toBe("Also on day 4 i got four calling birds");
    expect(testOutput[4]).toBe("Also on day 5 i got five golden rings");
    expect(testOutput[5]).toBe("Also on day 6 i got six geese a-laying");
    expect(testOutput[6]).toBe("Also on day 7 i got seven swans a-swimming");
    expect(testOutput[7]).toBe("Also on day 8 i got eight maids a-milking");
    expect(testOutput[8]).toBe("Also on day 9 i got nine ladies dancing");
    expect(testOutput[9]).toBe("Also on day 10 i got ten lords a-leaping");
    expect(testOutput[10]).toBe("Also on day 11 i got eleven pipers piping");
    expect(testOutput[11]).toBe("Also on day 12 i got twelve drummers drumming");
    
    testOutput = [];
    testOutputLine = 0;

    for (const whatever in song) {
        testOutput[testOutputLine++] = "Also on day " + (Number(whatever) + 1) + " i got " + song[Number(whatever)];
    }
    
    expect(testOutput[0]).toBe("Also on day 1 i got a partridge in a pear tree");
    expect(testOutput[1]).toBe("Also on day 2 i got two turtle doves");
    expect(testOutput[2]).toBe("Also on day 3 i got three French hens");
    expect(testOutput[3]).toBe("Also on day 4 i got four calling birds");
    expect(testOutput[4]).toBe("Also on day 5 i got five golden rings");
    expect(testOutput[5]).toBe("Also on day 6 i got six geese a-laying");
    expect(testOutput[6]).toBe("Also on day 7 i got seven swans a-swimming");
    expect(testOutput[7]).toBe("Also on day 8 i got eight maids a-milking");
    expect(testOutput[8]).toBe("Also on day 9 i got nine ladies dancing");
    expect(testOutput[9]).toBe("Also on day 10 i got ten lords a-leaping");
    expect(testOutput[10]).toBe("Also on day 11 i got eleven pipers piping");
    expect(testOutput[11]).toBe("Also on day 12 i got twelve drummers drumming");

    h = function (element, index) {
        let useful = [2, 5, 8];
        return useful.find ( (usefulElement) => usefulElement == index );
    }

    mapResult = song.map ( (element,index) => "Also on day "+(index+1)+" I got "+element).filter (h);

    expect(mapResult[0]).toBe("Also on day 3 I got three French hens");
    expect(mapResult[1]).toBe("Also on day 6 I got six geese a-laying");
    expect(mapResult[2]).toBe("Also on day 9 I got nine ladies dancing");

    });