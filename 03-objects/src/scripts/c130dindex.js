
import community from './community.js';
import c130d from './c130d.js'

// global.fetch = require('node-fetch'); // Was Larry's solution vs the isomorphic-fetch solution that I found.

import c920 from './fetch.js'

(async () => {

    // 
    // First: Confirm API is available.
    //

    let data = await c130d.confirmAPIConnect (c130d.url);

    if (data.status === 200) {
        //
        //
        // Initial setup required to handle the New Account Name.
        //
        // Remove the New Account Name entry. JS will create again when needed.
        //

        // idAddCity.parentElement.removeChild(idAddCity);

        //
        // This is just a temporary fix for testing so it matches my starter
        // community and city in HTML. Eventually page will start empty, then either load in from
        // ASP, or if empty, ask to create a community name. It will NOT clear. It will load.
        //

        messageArea.textContent = "Loading Community and Cities";
        let data = await c920.postData(c130d.url + "clear");

        messageArea.textContent = "Loading Community and Cities .";
        const canada = new community.Community ("Canada");
        data = await c130d.createAPICommunity (c130d.url, canada.cityList[0]);

        messageArea.textContent = "Loading Community and Cities ..";
        canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
        data = await c130d.createAPICity (c130d.url, canada.cityList[1], canada.cityList[0]);

        messageArea.textContent = "Loading Community and Cities ...";
        canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
        data = await c130d.createAPICity (c130d.url, canada.cityList[2], canada.cityList[0]);

        messageArea.textContent = "Loading Community and Cities ....";
        canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
        data = await c130d.createAPICity (c130d.url, canada.cityList[3], canada.cityList[0]);

        messageArea.textContent = "Loading Community and Cities .... DONE";

        canada.resetMessage();

        //
        // Add some gretting messages for duane to demonstrate message queue funtionality,
        // but first clear out any residual from original HTML.
        //

        if (canada.isMessage()) canada.resetMessage();

        canada.addMessage("Welcome to Communities and Cities!");
        canada.addMessage("Enjoy your experience and have a GREAT day.");

        //
        // Visual Setup for web page complete. Display Greeting Messages.
        //

        if (canada.isMessage()) {
            messageArea.textContent = canada.getMessages();
            canada.resetMessage();
        }

        //
        // Event listener for the Add New City button.
        //

        btnAddCity.addEventListener('click', (e => {
            
            //
            // Add New Account Name Entry, but only need 1.
            //

            // c130c.createdivAddCity(duane);
            console.log("Add City Button Clicked!")
            
        }));

        //
        // Event listener for the Delete Account button.
        //

        btnDelCity.addEventListener('click', (e => {
            
            //
            // Delete City.
            //
            c130d.deleteCity(canada);
            
        }));

        //
        // Event listener for the Moved In button.
        //

        btnMovedIn.addEventListener('click', (e => {
            
            c130d.actionMoved("IN", canada);
            
        }));

        //
        // Event listener for the Moved Out button.
        //

        btnMovedOut.addEventListener('click', (e => {
            
            c130d.actionMoved("OUT", canada);

        }));

        //
        // Event listener for the Source Account Selection.
        //

        selectCity.addEventListener('change', (eSelectCity => {

            console.log("Select City selected something!")
            console.log (eSelectCity.target);
            const selectedValue = document.getElementById("selectCity").value;
            
            if (selectedValue === "srcAddCity") {

                //
                // Add New Account Name Entry, but only need 1
                //

                // c130c.createdivAddAcct(duane);
                console.log("Something was to Add a City!")

            }
        
        }));

        //
        // Event listener for Click Anywhere but a BUTTON. Clear messageArea.
        //

        document.body.addEventListener("click", (e => {
            //
            //  Bug: This clears the Add confirmation message from SELECT before user can see it. Simple
            //  SELECT opens up to not enough clearing. Need to find the difference for Add from Select.
            //  Maybe add a flag.
            //
            console.log("Mouse Clicked!")
            if (e.target.nodeName !== 'BUTTON') {

                messageArea.textContent = "";
                console.log("NOT a Button!");

            }

        }));

    } else {
        messageArea.textContent = "The API is NOT available. Close browser and try again later!";    
    }

})();