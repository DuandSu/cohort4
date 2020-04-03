import {Account, AccountController} from './account.js'
import c130c from './c130c.js'

//
//
// Initial setup required to handle the New Account Name. Grab
// this div from the html.
//

const divAdd = document.getElementById("idAddAcct");
const divAccts = document.getElementById("idAccts");
const divParent = divAdd.parentElement;

//
// Remove the New Account Name entry until needed.
//

divParent.removeChild(divAdd);

//
// The above code is working. If time, go back and see if can make work with
// any of the ideas below. Might be better practice to just hide, then to 
// keep adding and deleting the New Account Entry section.
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
// accounts in HTML.
//

duane.addAccount("Chequing", 0, false);
duane.addAccount("Savings", 200, false);
duane.addAccount("Credit Card", 100, true);

//
// Event listener for the Add New Account button.
//

btnAddAcct.addEventListener('click', (eIDbtnAddAcct => {
    //
    // Add New Account Name Entry
    //

    divParent.insertBefore(divAdd, divAccts);

    // console.log (eIDbtnAddAcct.target);
    // const newAcctName = prompt("Enter New Account Name: ");
    // const inputValue = document.getElementById("inputAmt").value;
    // const srcValue = document.getElementById("selectAcct").value;
    // document.getElementById("messageArea").textContent = `Created New Account ${newAcctName} with Initial Balance of $${inputValue}`;
    // document.getElementById("selectAcct").value = "srcSelect";
    // document.getElementById("inputAmt").value = 0.00;
    //

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
    console.log (eIbtnTransfer.target);
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
        // Add New Account Name Entry
        //
        divParent.insertBefore(divAdd, divAccts);
        
        // const newAcctName = prompt("Enter New Account Name: ");
        // const inputValue = document.getElementById("inputAmt").value;
        // const srcValue = document.getElementById("selectAcct").value;

        // document.getElementById("messageArea").textContent = `Create New Account ${newAcctName} with Initial Balance of $${inputValue}`;
        // // alert(`Create New Account ${newAcctName} with Initial Balance of $${inputValue}`);
        // document.getElementById("selectAcct").value = "srcSelect";
        // document.getElementById("inputAmt").value = 0.00;

        //
        // Done, so remove the New Account Name entry until needed.
        //

        // divParent.removeChild(divAdd);
    } 
}));


//
// Event listener for the Add New Cancel button.
//

//btnCreateAcct.addEventListener('click', (eIDbtnCancel => {
// btnCancelAcct.addEventListener('click', (eIDbtnCancel => {
    
    //
    // Done, so remove the New Account Name entry until needed.
    //
        
    // divParent.removeChild(divAdd);
        
// }));

//
// Event listener for Click Anywhere but a BUTTON.
//

document.body.addEventListener("click", (e => {
    //
    //  Bug: This clears the Add confirmation message from SELECT before user can see it. Simple
    //  SELECT opens up to not enough clearing. Need to find the difference for Add from Select.
    //  Maybe add a flag.
    //    
    // if (e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'SELECT') {
    if (e.target.nodeName !== 'BUTTON') {
        document.getElementById("messageArea").textContent = "";
            // document.getElementById("messageArea").textContent = e.target.nodeName;
    }
}));