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

        if (positiveNum < 10) return ONES;
        else if (positiveNum < 100) return TENS;
        else return GREATERTENS;

    },

    absVal: (num) => {
        // define attributes / variables
        //     - boolean
        var isNegative = false;

        if (num < 0) isNegative = true;

        if (isNegative) return (num = 0 - num);
        else return num;

    }

};

export default syntax;
