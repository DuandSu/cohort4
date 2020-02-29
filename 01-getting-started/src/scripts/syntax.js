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
// functions
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

    }

    addToFrontArray: (array, num) => {

        
    }

};

export default syntax;
