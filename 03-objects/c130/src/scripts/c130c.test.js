import c130c from './c130c.js'
import {Account, AccountController} from './account.js'

test('130c: Does the Bank Interface Work with Account Controller?', () => {

    document.body.innerHTML =
	'<section class ="sectionMain">' +
		'<h1>Welcome to the MunRobinson Bank</h1>' +
		'<div class="divBankActions">' +
			'<div class="divAcctSelect">' +
                'Account Name: <select id=selectAcct>' +
                    '<option value="srcSelect">Select Account</option>' +
                    '<option value="srcAddAcct">Add New Account</option>' +
                    '<option value="srcAcct1">Chequing</option>' +
                    '<option value="srcAcct2">Savings</option>' +
					'<option value="srcAcct3">Credit Card</option>' +
				'</select>' +
				'-> <select id="selectDestAcct">' +
                    '<option value="destSelect">Select Destination Account</option>' +
                    '<option value="destAcct1">Chequing</option>' +
                    '<option value="destAcct2">Savings</option>' +
                    '<option value="destAcct3">Credit Card</option>' +
				'</select>' +
				'<!-- Account Name: <input id="inputAcct" type=text>' +
			'-> <input id="inputDestAcct" type=text> -->' +
			'</div>' +
			'<div class="divAcctActions">' +
				'$ <input id="inputAmt" type=number value=0>' +
				'<button id="btnAddAcct" type="button">Add New Account</button>' +
				'<button id="btnDeposit" type="button">Deposit</button>' +
				'<button id="btnWithdraw" type="button">Withdraw</button>' +
				'<button id="btnTransfer" type="button">Transfer</button>' +
			'</div>' +
			'<p id="messageArea"></p>' +
			'<!-- <p id="messageArea">There is currently no message to display in the message area.</p> -->' +
		'</div>' +
		'<div id=idAddAcct class="divAddAcct">' +
			'Enter Name of New Account: <input id="inputNewAcct" type=text>' +
			'<button id="btnCreateAcct" type="button">Create</button>' +
			'<button id="btnCancel" type="button">Cancel</button>' +
        '</div>' +
        '<div id=idAccts class="divAccounts">' +
			'<div class="divAcctsList">' +
			'<section class="sectionAcctList">' +
				'<h4>Account</h4>' +
				'<ul id="ulAcctList">' +
                    '<li id="listAcct1" class="liOdd">Chequing</li>' +
                    '<li id="listAcct2" class="liEven">Savings</li>' +
                    '<li id="listAcct3" class="liOdd">Credit Card</li>' +
                    '<li class="liSum">Summary of All Accounts</li>' +
				'</ul>' +
			'</section>' +
			'<aside class="asideAcctBal">' +
				'<h4>Balance</h4>' +
			 	'<ul id="ulAcctBal">' +
                    '<li id="sumAcct1"class="liOdd">$0.00</li>' +
                    '<li id="sumAcct2" class="liEven">$200.00</li>' +
                    '<li id="sumAcct3"class="liOdd">$100.00</li>' +
                 '<li class="liSum">$100.00</li>' +
			 	'</ul>' +
			 '</aside>' +
			'</div>' +
		'</div>' +
    '</section>';
    
    //
    // Setup test client to be Duane. Fill the Account Controller with same
    // accounts as HTML for testing. Note that Account and Account controller
    // have already been fully tested. This testing is more from the perspective
    // of Interface using the Account Controller, with Account mostly being hidden
    // by the calls to Account Controller.
    //

    //
    // Initial setup required to handle the New Account Name entry div.
    //

    const divAdd = document.getElementById("idAddAcct");
    expect(divAdd.id).toBe("idAddAcct");
    const divAccts = document.getElementById("idAccts");
    expect(divAccts.id).toBe("idAccts");
    const divParent = divAdd.parentElement;
    expect(divParent.nodeName).toBe("SECTION");

    //
    // Remove the New Account Name entry until needed.
    //

    divParent.removeChild(divAdd);
    expect(document.getElementById("idAddAcct")).toBeNull();

    //
    // Create AccountController for client Duane Munro
    //
    
    const duane = new AccountController("Duane Munro");
    expect(duane.getClientName()).toBe("Duane Munro");

    //
    // This is just a temporary fix for testing so it matches my starter
    // accounts in innerHTML.
    //

    expect(duane.addAccount("Chequing", 0, false)).toBe(1);
    expect(duane.getAcctName(1)).toBe("Chequing");
    expect(duane.getAcctBalance(1)).toBe(0);
    expect(duane.isCredit(1)).toBeFalsy();

    expect(duane.addAccount("Savings", 200, false)).toBe(2);
    expect(duane.getAcctName(2)).toBe("Savings");
    expect(duane.getAcctBalance(2)).toBe(200);
    expect(duane.isCredit(2)).toBeFalsy();

    
    expect(duane.addAccount("Credit Card", 100, true)).toBe(3);
    expect(duane.getAcctName(3)).toBe("Credit Card");
    expect(duane.getAcctBalance(3)).toBe(100);
    expect(duane.isCredit(3)).toBeTruthy();

// ***************************************************************
// All Code below is broken until I fix the 130c interface change to new
// LI element formats.
//
    //
    // Scenario: Attempt Deposit button with nothing selected. Should receive error message.
    //

    let actionType = "Deposit";
    let actionPreposition = "to";

    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Select an Account`);
    
    //
    // Scenario: User next selects the Savings account, but leaves the input amount as $0.
    // Should receive error message. Nothing reset.
    //
    
    let acctNum = 2;
    document.getElementById("selectAcct").value = "srcAcct2";
    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Input an Amount to ${actionType}`);
    
    //
    // // Scenario: User next attempts a negative value $-1. Should receive error message. Nothing reset.
    //
    
    document.getElementById("inputAmt").value = -1;
    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`You May Only ${actionType} a Positive Amount`);
    
    //
    // Scenario: User now types in a value of $500 and attempts to Deposit button. Display action result.
    //
    
    document.getElementById("inputAmt").value = 500;
    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`${actionType} $500 ${actionPreposition} ` +
        `${duane.getAcctName(acctNum)}. Balance is now: $700`);
    expect(duane.getAcctBalance(acctNum)).toBe(700);

    //
    // New account balance should show in account list.
    //
    
    expect(document.getElementById(`sumAcct${acctNum}`).textContent).toBe(`$700`);

    //
    // Select Menu and Input values get reset.
    //

    expect(document.getElementById("selectAcct").value).toBe("srcSelect");
    expect(document.getElementById("inputAmt").value).toBe("0");

    //
    // Same test scenario for Withdraw. Remember Savings Account is now $700 from previous test.
    //
    // Scenario: Attempt Withdraw button with nothing selected. Should receive error message.
    //

    actionType = "Withdraw";
    actionPreposition = "from";

    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Select an Account`);

    //
    // Scenario: User next selects the Savings account, but leaves the input amount as $0.
    // Should receive error message. Nothing reset.
    //
    
    acctNum = 2;
    document.getElementById("selectAcct").value = "srcAcct2";
    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Input an Amount to ${actionType}`);

    //
    // Scenario: User next attempts a negative value $-1. Should receive error message. Nothing reset.
    //
    
    document.getElementById("inputAmt").value = -1;
    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`You May Only ${actionType} a Positive Amount`);

    //
    // Scenario: User now types in a value of $200 and attempts to Withdraw button. Display action result.
    //

    document.getElementById("inputAmt").value = 200;
    c130c.actionTransaction(actionType, duane);
    expect(document.getElementById("messageArea").textContent).toBe(`${actionType} $200 ${actionPreposition} ` +
        `${duane.getAcctName(acctNum)}. Balance is now: $500`);
    expect(duane.getAcctBalance(acctNum)).toBe(500);

    //
    // New account balance should show in account list.
    //

    expect(document.getElementById(`sumAcct${acctNum}`).textContent).toBe(`$500`);

    //
    // Select Menu and Input values get reset.
    //

    expect(document.getElementById("selectAcct").value).toBe("srcSelect");
    expect(document.getElementById("inputAmt").value).toBe("0");

});
