import community from './community.js';
import c130d from './c130d.js'

// global.fetch = require('node-fetch'); // Was Larry's solution vs the isomorphic-fetch solution that I found.

import c920 from './fetch.js'

const url = 'http://localhost:5000/';

//
//
// Initial setup required to handle the New Account Name.
//
// Remove the New Account Name entry. JS will create again when needed.
//

// idAccts.parentElement.removeChild(idAddAcct);

//
// Add the event listeners and JavaScript code
//



//
// This is just a temporary fix for testing so it matches my starter
// community and city in HTML. Eventually page will start empty, then either load in from
// ASP, or if empty, ask to create a community name. It will NOT clear. It will load.
//

let data = c920.postData(url + "clear");
// let data = await c920.postData(url + "clear");

const canada = new community.Community ("Canada");
data = c130d.createAPICommunity (url, canada.cityList[0]);
// data = await c130d.createAPICommunity (url, canada.cityList[0]);

canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
data = c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
// data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);

canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
data = c130d.createAPICity (url, canada.cityList[2], canada.cityList[0]);
// data = await c130d.createAPICity (url, canada.cityList[2], canada.cityList[0]);

canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
data = c130d.createAPICity (url, canada.cityList[3], canada.cityList[0]);
// data = await c130d.createAPICity (url, canada.cityList[3], canada.cityList[0]);

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

    // c130c.createdivAddAcct(duane);
    console.log("Add City Button Clicked!")
    
}));

//
// Event listener for the Delete Account button.
//

btnDelCity.addEventListener('click', (e => {
    
    //
    // Add New Account Name Entry, but only need 1.
    //
    // c130c.deleteAccount(duane);
    console.log("Delete City Button Clicked!")
    
}));

//
// Event listener for the Deposit button.
//

btnMovedIn.addEventListener('click', (e => {
    
    // c130c.actionTransaction("Deposit", duane);
    console.log("Moved In Button Clicked!")
    
}));

//
// Event listener for the Withdraw button.
//

btnMovedOut.addEventListener('click', (e => {
    
    // c130c.actionTransaction("Withdraw", duane);
    console.log("Moved Out Button Clicked!")

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
