
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

        c130d.removedivAddCity();

        //
        // Load community from API if there, otherwise get name of community.
        //

        let newCommunity = await c130d.loadAPICommunity(c130d.url);

        //
        // This is just a temporary fix for testing so it matches my starter
        // community and city in HTML. Eventually page will start empty, then either load in from
        // ASP, or if empty, ask to create a community name. It will NOT clear. It will load.
        //

        // messageArea.textContent = "Loading Community and Cities";
        // let data = await c920.postData(c130d.url + "clear");

        // messageArea.textContent = "Loading Community and Cities .";
        // const newCommunity = new community.Community ("Canada");
        // data = await c130d.createAPICommunity (c130d.url, newCommunity.cityList[0]);

        // messageArea.textContent = "Loading Community and Cities ..";
        // newCommunity.createCity ("Calgary", 51.0447, -114.0719, 1547484);
        // data = await c130d.createAPICity (c130d.url, newCommunity.cityList[1], newCommunity.cityList[0]);

        // messageArea.textContent = "Loading Community and Cities ...";
        // newCommunity.createCity ("Vulcan", 50.4038, -113.2622, 1917);
        // data = await c130d.createAPICity (c130d.url, newCommunity.cityList[2], newCommunity.cityList[0]);

        // messageArea.textContent = "Loading Community and Cities ....";
        // newCommunity.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
        // data = await c130d.createAPICity (c130d.url, newCommunity.cityList[3], newCommunity.cityList[0]);

        // messageArea.textContent = "Loading Community and Cities .... DONE";

        //
        // Add some gretting messages for duane to demonstrate message queue funtionality,
        // but first clear out any residual from original HTML.
        //
        if (newCommunity != 0) {
            if (newCommunity.isMessage()) newCommunity.resetMessage();

            newCommunity.addMessage("Welcome to Communities and Cities!");
            newCommunity.addMessage("Enjoy your experience and have a GREAT day.");

            //
            // Visual Setup for web page complete. Display Greeting Messages.
            //

            if (newCommunity.isMessage()) {
                messageArea.textContent = newCommunity.getMessages();
                newCommunity.resetMessage();
            }
        } else {

            //
            // Event listener for the Add New Community button.
            //

            btnCreateCom.addEventListener('click', (async e => {

                newCommunity = await c130d.createNewCommunity();
                
            }));

            //
            // Event listener for the Add New Community button.
            //

            btnCancelCom.addEventListener('click', (e => {

                inputNewCom.value = "";
                messageArea.textContent = "Create Community cancelled. To proceed, you must first enter a name for your Community!";
                
            }));
        }
        //
        // Event listener for the Add New City button.
        //

        btnAddCity.addEventListener('click', (e => {

            if (newCommunity != 0) {
                c130d.createdivAddCity(newCommunity);
            } else {
                messageArea.textContent = "Please first enter a name for your Community!";
            }
            
        }));

        //
        // Event listener for the Delete Account button.
        //

        btnDelCity.addEventListener('click', (e => {
            
            //
            // Delete City.
            //

            if (newCommunity != 0) {
                c130d.deleteCity(newCommunity);
            } else {
                messageArea.textContent = "Please first enter a name for your Community!";
            }            
        }));

        //
        // Event listener for the Moved In button.
        //

        btnMovedIn.addEventListener('click', (e => {
            
            if (newCommunity != 0) {
                c130d.actionMoved("IN", newCommunity);
            } else {
                messageArea.textContent = "Please first enter a name for your Community!";
            }
        }));

        //
        // Event listener for the Moved Out button.
        //

        btnMovedOut.addEventListener('click', (e => {
            
            if (newCommunity != 0) {
                c130d.actionMoved("OUT", newCommunity);
            } else {
                messageArea.textContent = "Please first enter a name for your Community!";
            }
        }));

        //
        // Event listener for the Source Account Selection.
        //

        selectCity.addEventListener('change', (eSelectCity => {

            const selectedValue = document.getElementById("selectCity").value;
            
            if (selectedValue === "srcAddCity") {

                //
                // Add New Account Name Entry, but only need 1
                //

                if (newCommunity != 0) {
                    c130d.createdivAddCity(newCommunity);
                } else {
                    messageArea.textContent = "Please first enter a name for your Community!";
                }

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
            if (e.target.nodeName !== 'BUTTON') {

                messageArea.textContent = "";

            }

        }));

    } else {
        messageArea.textContent = "The API is NOT available. Close browser and try again later!";    
    }

})();