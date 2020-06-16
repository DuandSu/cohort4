import {Account, AccountController} from './account.js'
import c130c from './c130c.js'

//
//
// Initial setup required to handle the New Account Name.
//
// Remove the New Account Name entry. JS will create again when needed.
//

idAccts.parentElement.removeChild(idAddAcct);

//
// This code is NOW working good with the adding and removing of the Add New Account div.
// took a while, but HAPPY working the way I want it.
//
// If time, go back and see if can make work with any of the ideas below. Might be better 
// practice to just hide, then to keep adding and deleting the New Account Entry section. 
//
// Don't let it hold up from going to next competency because hiding elements is NOT
// the point of this competency.
//
// rendor???
//
// document.getElementById("idAddAcct");
// document.getElementById("idAddAcct").setAttribute("visibility", "visible");
// document.getElementById("idAddAcct").setAttribute("visibility", "hidden");
// document.getElementById("idAddAcct").removeAttribute("visibility");
// location.reload(false);
//
// targetFromEvent.parentElement.removeChild(targetFromEvent);
//
// var siteHeader = document.getElementById('header');
//
// siteHeader.style.display='none';
// siteHeader.offsetHeight; // no need to store this anywhere, the reference is enough
// siteHeader.style.display='block';

//
// Add the event listeners and JavaScript code
//

const duane = new AccountController("Duane Munro");

//
// This is just a temporary fix for testing so it matches my starter
// accounts in HTML. Anyways, would assume this whole page would be called after prior
// HTML page would have provided login for that user anyways. Assume that this page
// would get passed the client name and list of existing accounts.
//

duane.addAccount("Chequing", 0, false);
duane.addAccount("Savings", 200, false);
duane.addAccount("Credit Card", 100, true);
duane.resetMessage();

//
// Add some gretting messages for duane to demonstrate message queue funtionality,
// but first clear out any residual from original HTML.
//

if (duane.isMessage()) duane.resetMessage();

duane.addMessage("Welcome to the Bank of Munrobinson!");
duane.addMessage("We provide all your banking needs with no interest or service charges.");
duane.addMessage("Enjoy your experience and have a GREAT day.");

//
// Visual Setup for web page complete. Display Greeting Messages.
//

if (duane.isMessage()) {
    messageArea.textContent = duane.getMessages();
    duane.resetMessage();
}

//
// Event listener for the Add New Account button.
//

btnAddAcct.addEventListener('click', (eIDbtnAddAcct => {
    
    //
    // Add New Account Name Entry, but only need 1.
    //

    c130c.createdivAddAcct(duane);

}));

//
// Event listener for the Delete Account button.
//

btnDelAcct.addEventListener('click', (eIDbtnAddAcct => {
    
    //
    // Add New Account Name Entry, but only need 1.
    //
    c130c.deleteAccount(duane);

}));

//
// Event listener for the Deposit button.
//

btnDeposit.addEventListener('click', (eIbtnDeposit => {

    c130c.actionTransaction("Deposit", duane);

}));

//
// Event listener for the Withdraw button.
//

btnWithdraw.addEventListener('click', (eIbtnWithdraw => {

    c130c.actionTransaction("Withdraw", duane);

}));

//
// Event listener for the Transfer button.
//

btnTransfer.addEventListener('click', (eIbtnTransfer => {

    const inputValue = document.getElementById("inputAmt").value;
    const srcValue = document.getElementById("selectAcct").value;
    const destValue = document.getElementById("selectDestAcct").value;
    if (srcValue === "srcSelect") {
        document.getElementById("messageArea").textContent = `Please Select an Account`;
    }
    else if (destValue === "destSelect") {
        document.getElementById("messageArea").textContent = `Please Select a Destination Account`;
    }
    else {
        if (srcValue.replace("src", "") === destValue.replace("dest", "")) {
            document.getElementById("messageArea").textContent = `Source and Destination Accounts Must Be Different`;
        }
        else if (inputValue < 0) {
            document.getElementById("messageArea").textContent = `You May Only Transfer a Positive Amount`;
        }
        else if (inputValue < 1) {
            document.getElementById("messageArea").textContent = `Please Input an Amount to Transfer`;
        }
        else {
            document.getElementById("messageArea").textContent = `Transfer $${inputValue} from Acct: ${srcValue} to ${destValue}`;
            document.getElementById("selectAcct").value = "srcSelect";
            document.getElementById("selectDestAcct").value = "destSelect";
            document.getElementById("inputAmt").value = 0.00;
        }
    }
}));

//
// Event listener for the Source Account Selection.
//

selectAcct.addEventListener('change', (eIselectAcct => {
    
    console.log (eIselectAcct.target);
    const selectedValue = document.getElementById("selectAcct").value;
    
    if (selectedValue === "srcAddAcct") {

        //
        // Add New Account Name Entry, but only need 1
        //

        c130c.createdivAddAcct(duane);

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
