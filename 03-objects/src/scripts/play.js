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
    },

    likesMySolution: (names) => {
        //
        // My solution works. Initially I thought it was clever to handle the last person separate
        // from the preceding people. But it is long an not as easy to understand as the simple
        // switch/case solution.
        //
        // My problem was I didn't consider basing it the number of names, rather than all the checks
        // on the index.
        //
        if (names.length === 0)
          return "no one likes this";  
          
        let result = "";
        let lastName = names.length - 1;
        
        for (let i = 0; i < names.length; i++) {
      
          if (i === lastName) {
            if (i > 2)
              result = result + " and " + (names.length - 2) + " others like this";
            else if (i >= 1)
              result = result + " and " + names[i] + " like this";
            else
              result = names[i] + " likes this";
          }
          else {
            if (i === 1)
              result = result + ", " + names[i];
            else if (i < 1)
              result = result + names[i];
          }
        }
        return result;
      },

      likesBest1: (names) => {
        // I didn't understand the purpose for logical OR "||", so did console.log,
        // but there was no difference before or after. So just commented it out.
        // console.log("1:", names);
        // names = names || [];
        // console.log("2:", names);

        //
        // Other than above this solution is far superior than mine. It is totally based on
        // the number of people. It is simpler and easier to understand.
        //
        switch(names.length){
          case 0: return 'no one likes this'; break;
          case 1: return names[0] + ' likes this'; break;
          case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
          case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
          default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
        }
      },

      myMaskify: (cc) => {
        //
        // I thought this solution was pretty good.
        //
        const firstChar = Math.max(0,Math.min(cc.length, cc.length - 4));
        return "#".repeat(firstChar) + cc.slice(firstChar);
        //
        // These were some of the more elegant 1-line solutions.
        //
        // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
        // return cc.replace(/.(?=....)/g, '#');
        // return cc.replace(/.(?=.{4})/g, "#");
      } 
}

export default play;