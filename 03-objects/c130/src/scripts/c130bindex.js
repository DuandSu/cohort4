import c130b from './c130b.js'

// **********
//
// Add the event listeners and JavaScript code
// 

let nxtAcctNum = 4;

//
// Event listener for the Add New Account button.
//

btnAddAcct.addEventListener('click', (eIDbtnAddAcct => {
    console.log (eIDbtnAddAcct.target);
    const newAcctName = prompt("Enter New Account Name: ");
    const inputValue = document.getElementById("inputAmt").value;
    const srcValue = document.getElementById("selectAcct").value;
    document.getElementById("messageArea").textContent = `Created New Account ${newAcctName} with Initial Balance of $${inputValue}`;
    document.getElementById("selectAcct").value = "srcSelect";
    document.getElementById("inputAmt").value = 0.00;
}));

//
// Event listener for the Deposit button.
//

btnDeposit.addEventListener('click', (eIbtnDeposit => {
    console.log (eIbtnDeposit.target);
    const inputValue = document.getElementById("inputAmt").value;
    const srcValue = document.getElementById("selectAcct").value;
    if (srcValue === "srcSelect") {
        document.getElementById("messageArea").textContent = `Please Select an Account`;
    }
    else if (inputValue < 0) {
        document.getElementById("messageArea").textContent = `You May Only Deposit a Positive Amount`;
    }
    else if (inputValue < 1) {
        document.getElementById("messageArea").textContent = `Please Input an Amount to Deposit`;
    }
    else {
        document.getElementById("messageArea").textContent = `Deposit $${inputValue} to Acct: ${srcValue}`;
        document.getElementById("selectAcct").value = "srcSelect";
        document.getElementById("inputAmt").value = 0.00;
    }
}));

//
// Event listener for the Withdraw button.
//

btnWithdraw.addEventListener('click', (eIbtnWithdraw => {
    console.log (eIbtnWithdraw.target);
    const inputValue = document.getElementById("inputAmt").value;
    const srcValue = document.getElementById("selectAcct").value;
    if (srcValue === "srcSelect") {
        document.getElementById("messageArea").textContent = `Please Select an Account`;
    }
    else if (inputValue < 0) {
        document.getElementById("messageArea").textContent = `You May Only Withdraw a Positive Amount`;
    }
    else if (inputValue < 1) {
        document.getElementById("messageArea").textContent = `Please Input an Amount to Withdraw`;
    }
    else {
        document.getElementById("messageArea").textContent = `Withdraw $${inputValue} from Acct: ${srcValue}`;
        document.getElementById("selectAcct").value = "srcSelect";
        document.getElementById("inputAmt").value = 0.00;
    }
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
    // if (selectedValue === "srcSelect") {
    //     alert (`Ignore Select Account: ${selectedValue}`);
    // }
    // else 
    if (selectedValue === "srcAddAcct") {
        const newAcctName = prompt("Enter New Account Name: ");
        const inputValue = document.getElementById("inputAmt").value;
        const srcValue = document.getElementById("selectAcct").value;
        document.getElementById("messageArea").textContent = `Create New Account ${newAcctName} with Initial Balance of $${inputValue}`;
        document.getElementById("selectAcct").value = "srcSelect";
        document.getElementById("inputAmt").value = 0.00;
    } 
}));

//
// Event listener for Click Anywhere but a BUTTON.
//

document.body.addEventListener("click", e => {
 
    if (e.target.nodeName !== 'BUTTON') {
        document.getElementById("messageArea").textContent = "";
    }
})