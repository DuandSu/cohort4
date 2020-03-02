// This is competency 100C.
// The purpose of this Javascript is to use all of the below. Each documentation line is repeated later in the script 
// when actually used.
//
// define attributes / variables
//     - number
//     - string
//     - boolean
//     - array
//     - dictionary / objects
//     - undefined
// sample if / else
// arrays
//     - add to the front
//     - add to the end
//     - update values
// loops 
//     - for
//     - for/in
//     - while
//     - do while
//     - forEach (with array and function)
// Objects / Dictionaries
//     - declare object
//     - lookup key to retrieve value

//
// functions - See below for lots of occurences of functions with parameters and returning values.
//     - parameters
//     - returns

const syntax = {

    add3: (num1, num2, num3) => {
        // define attributes / variables
        //     - number
        var numberValue1 = Number(num1);
        var numberValue2 = Number(num2);
        var numberValue3 = Number(num3);
    
        return numberValue1 + numberValue2 + numberValue3;
    },

    decimalPosition: (num) => {
        // define attributes / variables
        //     - Constant
        //     - string
        const ONES = "Ones";
        const TENS = "Tens";
        const GREATERTENS = "Greater than TENS";

        var positiveNum = syntax.absVal(num);

        // sample if / else
        if (positiveNum < 10) return ONES;
        else if (positiveNum < 100) return TENS;
        else return GREATERTENS;

    },

    absVal: (num) => {
        // define attributes / variables
        //     - boolean

        // sample if / else
        if (syntax.isNumNegative(num)) return (0 - num);
        else return num;
    },

    isNumNegative: (num) => {
        // define attributes / variables
        //     - boolean
        var isNegative = false;

        // sample if / else
        if (num < 0) isNegative = true;

        return isNegative;

    },

    createSimpleArray: (num) => {
        // define attributes / variables
        //     - array

        var simpleArray = [];
        
        // loops 
        //     - for
        for (var i = 0; i < num; i++) {
            // arrays
            //     - update values
            simpleArray[i] = i;
        }
        
        return simpleArray;

    },

    addToFrontOfArray: (array, num) => {
        // define attributes / variables
        //     - array

        var tempArray = [];
        var nextArrayValue = num;
        var i = 0;
        var maxLength = array.length + 1;

        // loops 
        //     - do while
        // arrays
        //     - add to the front
        //     - update values
        do {
            tempArray[i] = nextArrayValue;
            nextArrayValue = array [i];
            i++;
        } while (i < maxLength);

        return tempArray;

    },

    addToEndOfArray: (array, num) => {
        // define attributes / variables
        //     - array

        var tempArray = [];
        var i = 0;
    
        // loops 
        //     - while
        // arrays
        //     - add to the end
        //     - update values

        while (i < array.length) {
            tempArray[i] = array [i];
            i++;
        }

        tempArray[i] = num;

        return tempArray;
    },

    //
    // Initially had this code to try show the use of the forEach using the addFruitPrefixSuffix.
    // I was able to prove that the forEach was working in the console, but since the forEach itself
    // does NOT return anything I couldn't come up with a TDD test that proves the forEach in the testing. I 
    // did create a test that proves the function it calls works. I decided it was time to move on. Maybe I'll
    // learn something later that could apply here.
    //
    callForEach: () => {
        // loops 
        //     - forEach (with array and function)
        //const fruits = ["apple", "orange", "cherry"];
        fruits.forEach(syntax.addFruitPrefixSuffix);
    },

    addFruitPrefixSuffix: (item, index) => {
        //console.log(item + "-" + index + " fruit");
        return item + "-" + index + " fruit";
    },

    //
    // Initially had the following code thinking required to make test scripts work. Eventually discovered
    // easier alternative by defining test example direclty in the test script.
    // Left code in for later reference.
    //reviewVehicles: () => {
        //
        // Objects / Dictionaries
        //     - declare object
        //var minivan = {year:2018, type:"Honda", model:"Odyssey", color:"Gray"};
        //syntax.reviewVehicleWithForIn (minivan);
        //syntax.reviewVehicleWithLookupKey (minivan);
        
        // Objects / Dictionaries
        //     - declare object
        //var truck = {year:1972, type:"GMC", model:"Original", color:"Brown"};
        //syntax.reviewVehicleWithForIn (truck);
        //syntax.reviewVehicleWithLookupKey (truck);
        
        // Objects / Dictionaries
        //     - declare object
        //var car = {year:1986, type:"Honda", model:"Prelude", color:"Red"};
        //syntax.reviewVehicleWithForIn (car);
        //syntax.reviewVehicleWithLookupKey (car);
        
    //},

    reviewVehicleWithForIn: (vehicle) => {
        // loops 
        //     - for/in

        var text = "";
        for (var i in vehicle) {
          text += vehicle[i] + " ";
        } 
        return text;
    },

    reviewVehicleWithLookupKey: (vehicle) => {
        // Objects / Dictionaries
        //     - lookup key to retrieve value

        var text = "";
        
        if ('year' in vehicle) text += vehicle.year + " ";
        if ('type' in vehicle) text += vehicle.type + " ";
        if ('model' in vehicle) text += vehicle.model + " ";
        if ('color' in vehicle) text += vehicle.color + " ";

        return text;
    },

    testForNull: () => {
        // define attributes / variables
        //     - undefined

        var undefinedVariable;  // Variable not set to anything yet so undefined
        return undefinedVariable;

    }

};


export default syntax;
