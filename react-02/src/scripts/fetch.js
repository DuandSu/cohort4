//
// This is competency 920.
//

const c920 = {

    // url: 'https://TYPOjsonplaceholder.typicode.com/users',
    url: 'https://jsonplaceholder.typicode.com/users',
    
    getFirstName: (data) => {

        return data[0].name;

    },

    getAllFirstNamesDWM: (data) => {

        const arrNames = [];
    
        for (let i = 0; i < data.length; i++)
            arrNames[i] = data[i].name;
    
        return arrNames;
    },

    getAllFirstNames: (data) => {

        return data.map((d) => d.name);
        // return data.map((d, i, x) => d.name);
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
        // console.log("In getUsers")
        let data = [];
        try {
            // console.log(c920.url);
            const response = await fetch(c920.url);
            if (response.ok) {
                data = await response.json();
            }
            else {
                data = response.status;
                // console.log("HTTP-Error: " + data);
            }
        } catch (err) {
            // console.log('DWM Error:', err);
            throw (err);
            // return err;
        }
        return data;
    },

    async workWithData() {
        const data = await c920.getUsers();
        // console.log("In workWithData", data);
        if (data instanceof Array) {
            // console.log("Found DATA");
            // console.log(c920.getFirstName(data));
            // console.log(c920.getAllFirstNames(data));
            return true;
        }
        else if (data instanceof TypeError) {
            // console.log("Found error");
            return false;
        }
        else {
            // console.log("Likely string message of failed fetch!: " + data);
            return false;
        }
    },

    async postData(url = '', data = {}) {
        // Default options are marked with *

        try {

            const response = await fetch(url, {
                method: 'POST',     // *GET, POST, PUT, DELETE, etc.
                mode: 'cors',       // no-cors, *cors, same-origin
                cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow',         // manual, *follow, error
                referrer: 'no-referrer',    // no-referrer, *client
                body: JSON.stringify(data)  // body data type must match "Content-Type" header
            });

            const json = await response.json();    // parses JSON response into native JavaScript objects
            json.status = response.status;
            json.statusText = response.statusText;

            return json;
            
        } catch (err) {
            
            const catchErr = {};
            catchErr.status = err.name;
            catchErr.statusText = err.message;

            return catchErr;

        }
    }
};

export default c920;