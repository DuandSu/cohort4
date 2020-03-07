// This is competency 100D.
// The purpose of this Javascript is to demonstrate usage of the array and dictionary objects, following the instructions
// in the competency.
//

const ArraysDictionaries = {

    addToArray: (array, num) => {
        // 
        // The following method creates a temporary array, points tempArray to the array passed in
        // parameter array, then assigns the num parameter to new last index in the array, then passes the
        // array back in the return.

        let tempArray = [];

        tempArray = array;
        tempArray[array.length] = num;
        return tempArray;

    },

    displayArray: (array) => {
        // 
        // The following method displays all indexs in the parameter array to a returned string field that can be used to 
        // display/show the array.
        //

        let textOfArray = "[";

        for (let i = 0; i < array.length; i++) {

            if (i === (array.length-1)) textOfArray += array[i];
            else textOfArray += array[i] + ",";

        }

        textOfArray += "]"
        return textOfArray;
    },

    totalArray: (array) => {
        // 
        // The following method adds the number value of all indexs in the parameter array and returns the total.
        //

        let arrayTotal = 0;

        for (let i = 0; i < array.length; i++) {
            arrayTotal += array[i];
        }

        return arrayTotal;
    },

    clearArray: (array) => {
        // 
        // The following method returns an empty array.
        //

        return [];
    },

    lookupProvDesc: (provCode) => {
        // 
        // The following method returns the Province name/description for the parameter Province Code.
        //
        // Define the dictionary for the Province Code/Descripion table.
        //
        const ProvinceTable = {
            "AB":"Alberta",
            "BC":"British Columbia",
            "MB":"Manitoba",
            "NB":"New Brunswick",
            "NL":"Newfoundland/Labrador",
            "NS":"Nova Scotia",
            "NT":"North West Territories",
            "NU":"Nunavit",
            "ON":"Ontario",
            "PE":"Prince Edward Island",
            "QC":"Quebec",
            "SK":"Saskatchewan",
            "YT":"Yukon"
        };
        //
        // Use parameter provCode to lookup province description. Ensure uppercase and trim spaces.
        // If no match return blank.
        //
        const tempProvCode = provCode.trim().toUpperCase();
        if (tempProvCode in ProvinceTable) return ProvinceTable[tempProvCode];
        else return "";

    }
};

export default ArraysDictionaries;
