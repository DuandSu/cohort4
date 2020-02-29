// define attributes / variables
//     - number
//     - string
//     - boolean
//     - array
//     - TODO: dictionary / objects
//     - TODO: undefined
// sample if / else
// arrays
//     - add to the front
//     - add to the end
//     - update values
// loops 
//     - for
//     - TODO: for/in
//const object = {a: 1, b: 2, c: 3};
//
//for (const property in object) {
//  console.log(`${property}: ${object[property]}`);
//}
//
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
//     - while
//     - do while
//     - TODO: forEach (with array and function)
//var fruits = ["apple", "orange", "cherry"];
//fruits.forEach(myFunction);
//
//function myFunction(item, index) {
//  document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
//} 
// TODO: Objects / Dictionaries
//     - TODO: declare object
//     - TODO: lookup key to retrieve value

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
    }

};

export default syntax;
