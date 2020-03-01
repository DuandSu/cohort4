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

    callForEach: () => {
        // define attributes / variables
        //     - undefined
        var unDefined; // Variable not set to anything yet so undefined

        // loops 
        //     - forEach (with array and function)
        var fruits = ["apple", "orange", "cherry"];
        fruits.forEach(addFruitPrefixSuffix);
    },

    addFruitPrefixSuffix: (item, index) => {
        return item + "-" + index + " fruit";
    },

    reviewVehicles: () => {
        
        // Objects / Dictionaries
        //     - declare object
        var minivan = {year:2018, type:"Honda", model:"Odyssey", color:"Gray"};
        reviewVehicleWithForIn (minivan);
        reviewVehicleWithLookupKey (minivan);
        
        // Objects / Dictionaries
        //     - declare object
        var truck = {year:1972, type:"GMC", model:"Original", color:"Brown"};
        reviewVehicleWithForIn (truck);
        //reviewVehicleWithLookupKey (truck);
        
        // Objects / Dictionaries
        //     - declare object
        var car = {year:1986, type:"Honda", model:"Prelude", color:"Red"};
        reviewVehicleWithForIn (car);
        //reviewVehicleWithLookupKey (car);
        
    },

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
        
        //if ('year' in vehicle) text += vehicle.year + " ";
        //if ('type' in vehicle) text += vehicle.type + " ";
        //if ('model' in vehicle) text += vehicle.model + " ";
        //if ('color' in vehicle) text += vehicle.color + " ";
        
        text += vehicle["year"] + " ";
        text += vehicle.type + " ";
        text += vehicle.model + " ";
        text += vehicle.color + " ";
        
        //return "2018 Honda Odyssey Gray ";
        return text;
        //return null;
    }

};

export default syntax;
