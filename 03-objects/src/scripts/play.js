const play = {
    
    BitwiseOne: (strArr) => {

        if (strArr.length === 0) return "Empty";
        //
        // Convert the 1st element to an array of characters, then convert that to an array
        // of boolean values, where "0" is false and "1" is true. Reality is anything NOT "0"
        // will be true.
        //
        let result = [...strArr[0]];
        let resultCheck = result.map((e) => e === "0" ? false : true);
        let next = [];
        let nextCheck = [];
        //
        // Cycle through all the parameter array elements, converting to array of boolean values,
        // then perform the bitwise.
        //
        for (let i = 1; i < strArr.length; i++) {
            next = [...strArr[i]];
            nextCheck = next.map((e) => e === "0" ? false : true);
            resultCheck = nextCheck.map((e, j) => e || resultCheck[j]);
        }
        //
        // Convert the array of boolean values back to "0" and "1". Then
        // convert the array of characters back to a string and return it.
        //
        result = resultCheck.map((e) => e ? "1" : "0");

        return result.toString().replace(/,/g, "");
    },

    reverse:  (arr) => {

        let arrRev = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            arrRev.push(arr[i]);
        }

        return arrRev;
    }
}

export default play;