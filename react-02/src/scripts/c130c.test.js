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
			'<button id="btnCancelAcct" type="button">Cancel</button>' +
        '</div>' +
        '<div id=idAccts class="divAccounts">' +
			'<div class="divAcctsList">' +
			'<section class="sectionAcctList">' +
				'<h4>Account</h4>' +
				'<ul id="ulAcctList">' +
                    '<li id="listAcct1" class="liOdd">Chequing</li>' +
                    '<li id="listAcct2" class="liEven">Savings</li>' +
                    '<li id="listAcct3" class="liOdd">Credit Card</li>' +
                    '<li id="idSumTxt" class="liSum">Summary of All Accounts</li>' +
				'</ul>' +
			'</section>' +
			'<aside class="asideAcctBal">' +
				'<h4>Balance</h4>' +
			 	'<ul id="ulAcctBal">' +
                    '<li id="sumAcct1"class="liOdd">$0.00</li>' +
                    '<li id="sumAcct2" class="liEven">$200.00</li>' +
                    '<li id="sumAcct3"class="liOdd">$100.00</li>' +
                 '<li id="idSum" class="liSum">$300</li>' +
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
    // Expect the div Add Account Name exists from original HTML. Then
    // delete it.
    //

    expect(document.getElementById("idAddAcct")).not.toBeNull();
    idAccts.parentElement.removeChild(idAddAcct);
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
    expect(duane.getMessages()).toBe(` Created New Account ${duane.getAcctName(1)} ` +
        `with Initial Balance of $0.00. ` +
        `Your HIGHest value account is Account: Chequing. Your LOWest value account is Account: Chequing.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    expect(duane.addAccount("Savings", 200, false)).toBe(2);
    expect(duane.getAcctName(2)).toBe("Savings");
    expect(duane.getAcctBalance(2)).toBe(200);
    expect(duane.isCredit(2)).toBeFalsy();
    expect(duane.getMessages()).toBe(` Created New Account ${duane.getAcctName(2)} ` +
        `with Initial Balance of $200.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Chequing.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    
    expect(duane.addAccount("Credit Card", 100, true)).toBe(3);
    expect(duane.getAcctName(3)).toBe("Credit Card");
    expect(duane.getAcctBalance(3)).toBe(100);
    expect(duane.isCredit(3)).toBeTruthy();
    expect(duane.getMessages()).toBe(` Created New Credit Account ${duane.getAcctName(3)} ` +
        `with Initial Balance of $100.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Chequing.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Scenario: Attempt Deposit button with nothing selected. Should receive error message.
    //

    let actionType = "Deposit";
    let actionPreposition = "to";

    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(`Please Select an Account.`);
    expect(idSum.textContent).toBe("$300");
    //
    // Scenario: User next selects the Savings account, but leaves the input amount as $0.
    // Should receive error message. Nothing reset.
    //
    
    let acctNum = 2;
    selectAcct.value = "srcAcct2";
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(`Please Input an Amount to ${actionType}.`);
    expect(idSum.textContent).toBe("$300");
   
    //
    // // Scenario: User next attempts a negative value $-1. Should receive error message. Nothing reset.
    //
    
    inputAmt.value = -1;
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(`You May Only ${actionType} a Positive Amount.`);
    expect(idSum.textContent).toBe("$300");
    
    //
    // Scenario: User now types in a value of $500 and attempts to Deposit button. Display action result.
    //
    
    inputAmt.value = 500;
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(` ${actionType} $500.00 ${actionPreposition} ` +
        `${duane.getAcctName(acctNum)}. Balance is now: $700.00. Your HIGHest value account ` +
        `is Account: Savings. Your LOWest value account is Account: Chequing.`);
    expect(duane.getAcctBalance(acctNum)).toBe(700);
    
    //
    // New account balance should show in account list.
    //
    
    expect(document.getElementById(`sumAcct${acctNum}`).textContent).toBe(`$700.00`);
    expect(idSum.textContent).toBe("$800.00");
    
    //
    // Select Menu and Input values get reset.
    //
    
    expect(selectAcct.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");
    
    //
    // Same test scenario for Withdraw. Remember Savings Account is now $700 from previous test.
    //
    // Scenario: Attempt Withdraw button with nothing selected. Should receive error message.
    //
    
    actionType = "Withdraw";
    actionPreposition = "from";
    
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(`Please Select an Account.`);
    
    //
    // Scenario: User next selects the Savings account, but leaves the input amount as $0.
    // Should receive error message. Nothing reset.
    //
    
    acctNum = 2;
    selectAcct.value = "srcAcct2";
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(`Please Input an Amount to ${actionType}.`);
    
    //
    // Scenario: User next attempts a negative value $-1. Should receive error message. Nothing reset.
    //
    
    inputAmt.value = -1;
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(`You May Only ${actionType} a Positive Amount.`);
    
    //
    // Scenario: User now types in a value of $200 and attempts to Withdraw button. Display action result.
    //
    
    inputAmt.value = 200;
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(` ${actionType} $200.00 ${actionPreposition} ` +
        `${duane.getAcctName(acctNum)}. Balance is now: $500.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Chequing.`);
    expect(duane.getAcctBalance(acctNum)).toBe(500);
    
    //
    // New account balance should show in account list.
    //
    
    expect(document.getElementById(`sumAcct${acctNum}`).textContent).toBe(`$500.00`);
    expect(idSum.textContent).toBe("$600.00");
    
    //
    // Select Menu and Input values get reset.
    //

    expect(selectAcct.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    //
    // Add the New Account Name entry div back in to allow name entry. Remember
    // that we deleted it at the begining. We only need it when creating a new
    // account.
    //

    //
    // First confirm NOT existing.
    //
    
    expect(document.getElementById("idAddAcct")).toBeNull();
    
    //
    // Create and confirm exists using id. This is called in event
    // handlers for Add Account button or Source Account Menu Select.
    //
    
    c130c.createdivAddAcct();
    expect(document.getElementById("idAddAcct")).not.toBeNull();
    
    //
    // Confirm div element attributes.
    //
    
    expect(idAddAcct.classList.contains("divAddAcct")).toBeTruthy();
    
    //
    // Confirm input element and attributes.
    //
    
    expect(document.getElementById("inputNewAcct")).not.toBeNull();
    expect(inputNewAcct.nodeName).toBe("INPUT");
    expect(inputNewAcct.type).toBe("text");

    //
    // Confirm Create button element and attributes.
    //
    
    expect(document.getElementById("btnCreateAcct")).not.toBeNull();
    expect(btnCreateAcct.nodeName).toBe("BUTTON");
    expect(btnCreateAcct.type).toBe("button");
    expect(btnCreateAcct.textContent).toBe("Create");
    
    //
    // Confirm Cancel button element and attributes.
    //
    
    expect(document.getElementById("btnCancelAcct")).not.toBeNull();
    expect(btnCancelAcct.nodeName).toBe("BUTTON");
    expect(btnCancelAcct.type).toBe("button");
    expect(btnCancelAcct.textContent).toBe("Cancel");
    
    //
    // Confirm input checkbox element and attributes.
    //
       
    expect(document.getElementById("inputRadioCredit")).not.toBeNull();
    expect(inputRadioCredit.nodeName).toBe("INPUT");
    expect(inputRadioCredit.type).toBe("radio");
    expect(inputRadioCredit.name).toBe("inputRadioCredit");
    expect(inputRadioCredit.value).toBe("inputRadioCredit");
    expect(inputRadioCredit.checked).toBeFalsy();
       
    //
    // Remove the New Account Name entry div to confirm it works.
    // It also simulates them clicking the Add New Account Cancel
    // button.
    //
    
    c130c.removedivAddAcct();
    expect(document.getElementById("idAddAcct")).toBeNull();
    
    //
    // Create it again simulating user has clicked the "Add New Account"
    // button or selected from source account menu. This div is made
    // available to the user. Simulate them typing in a new account name
    // and pressing the Add New Account "Create" button.
    //
    
    c130c.createdivAddAcct();
    expect(document.getElementById("idAddAcct")).not.toBeNull();

    //
    // First simulate them clicking the "Create" button without typing
    // an account name. This is really the only check since a negative
    // or 0 amount is fine.
    //
    inputNewAcct.value = "";
    inputAmt.value = 0;
    expect(c130c.createNewAcct(duane)).toBe(0);
    expect(messageArea.textContent).toBe(`Please input the new Account name.`);
    
    //
    // Create a new account and check values
    //
    
    inputNewAcct.value = "   High Interest    ";
    inputAmt.value = 10000;
    inputRadioCredit.checked = false;
    let newAcctNum = c130c.createNewAcct(duane);
    expect(newAcctNum).toBe(4);
    expect(duane.getAcctName(newAcctNum)).toBe("High Interest");
    expect(duane.getAcctBalance(newAcctNum)).toBe(10000);
    expect(duane.isCredit(newAcctNum)).toBeFalsy();
    // messageArea.textContent = duane.getMessages();
    expect(messageArea.textContent).toBe(` Created New Account ${duane.getAcctName(4)} ` +
        `with Initial Balance of $10,000.00. ` +
        `Your HIGHest value account is Account: High Interest. Your LOWest value account is Account: Chequing.`);
    // expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Select Menu and Input values get reset. Event handler will also
    // delete the Add Account Name div, since not needed until next time.
    // Do that next.
    //

    c130c.removedivAddAcct ();
    expect(selectAcct.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    //
    // Testing routines individually to refresh the account list after
    // adding an account. That is, these are the routines that make up the Add Account.
    //

    expect(c130c.deleteAccountList()).toBe(4);
    expect(duane.sortAcctList("Name")).toEqual([1, 3, 4, 2]);
    expect(c130c.createAccountList(duane)).toBe(4);

    expect(ulAcctList.children[0].id).toBe("listAcct1");
    expect(ulAcctList.children[0].classList.contains("liOdd")).toBeTruthy();
    expect(ulAcctList.children[0].textContent).toBe("Chequing");
    
    expect(ulAcctBal.children[0].id).toBe("sumAcct1");
    expect(ulAcctBal.children[0].classList.contains("liOdd")).toBeTruthy();
    expect(ulAcctBal.children[0].textContent).toBe("$0.00");
    
    expect(ulAcctList.children[1].id).toBe("listAcct3");
    expect(ulAcctList.children[1].classList.contains("liEven")).toBeTruthy();
    expect(ulAcctList.children[1].textContent).toBe("Credit Card");
    
    expect(ulAcctBal.children[1].id).toBe("sumAcct3");
    expect(ulAcctBal.children[1].classList.contains("liEven")).toBeTruthy();
    expect(ulAcctBal.children[1].textContent).toBe("$100.00");

    expect(ulAcctList.children[2].id).toBe("listAcct4");
    expect(ulAcctList.children[2].classList.contains("liOdd")).toBeTruthy();
    expect(ulAcctList.children[2].textContent).toBe("High Interest");
    
    expect(ulAcctBal.children[2].id).toBe("sumAcct4");
    expect(ulAcctBal.children[2].classList.contains("liOdd")).toBeTruthy();
    expect(ulAcctBal.children[2].textContent).toBe("$10,000.00");

    expect(ulAcctList.children[3].id).toBe("listAcct2");
    expect(ulAcctList.children[3].classList.contains("liEven")).toBeTruthy();
    expect(ulAcctList.children[3].textContent).toBe("Savings");
    
    expect(ulAcctBal.children[3].id).toBe("sumAcct2");
    expect(ulAcctBal.children[3].classList.contains("liEven")).toBeTruthy();
    expect(ulAcctBal.children[3].textContent).toBe("$500.00");

    expect(selectAcct.children[0].value).toBe("srcSelect");
    expect(selectAcct.children[1].value).toBe("srcAddAcct");
    expect(selectAcct.children[1+1].value).toBe("srcAcct1");
    expect(selectAcct.children[1+2].value).toBe("srcAcct3");
    expect(selectAcct.children[1+3].value).toBe("srcAcct4");
    expect(selectAcct.children[1+4].value).toBe("srcAcct2");

    expect(selectDestAcct.children[0].value).toBe("destSelect");
    expect(selectDestAcct.children[0+1].value).toBe("destAcct1");
    expect(selectDestAcct.children[0+2].value).toBe("destAcct3");
    expect(selectDestAcct.children[0+3].value).toBe("destAcct4");
    expect(selectDestAcct.children[0+4].value).toBe("destAcct2");

    //
    // Test deleting account from delete button.
    //

    //
    // Simulate no account selected yet.
    //

    selectAcct.value = "srcSelect";
    c130c.deleteAccount(duane);
    expect(messageArea.textContent).toBe(`Please Select an Account.`);

    //
    // Simulate delete the Credit Card account which is not 0 balance.
    //

    selectAcct.value = "srcAcct3";
    c130c.deleteAccount(duane);
    expect(messageArea.textContent).toBe(` Account ${duane.getAcctName(3)} ` +
    `must be a 0 balance for deletion. Deposit or Withdraw to $0.`);

    //
    // Withdraw account to balance $0, so we can delete the account.
    //
    
    inputAmt.value = 100;
    actionType = "Withdraw";
    c130c.actionTransaction(actionType, duane);
    expect(messageArea.textContent).toBe(` ${actionType} $100.00 ${actionPreposition} ` +
        `${duane.getAcctName(3)}. Balance is now: $0.00. ` +
        `Your HIGHest value account is Account: High Interest. Your LOWest value account is Account: Chequing.`);
    expect(duane.getAcctBalance(3)).toBe(0);

    //
    // List will have shifted forward in array after deletion.
    //

    selectAcct.value = "srcAcct3";
    c130c.deleteAccount(duane);
    expect(messageArea.textContent).toBe(` Deleted Account Credit Card. ` +
    `Your HIGHest value account is Account: High Interest. Your LOWest value account is Account: Chequing.`);
   
    expect(ulAcctList.children[1].id).toBe("listAcct4");
    expect(ulAcctList.children[1].textContent).toBe("High Interest");
    
    expect(ulAcctBal.children[1].id).toBe("sumAcct4");
    expect(ulAcctBal.children[1].textContent).toBe("$10,000.00");
    expect(selectAcct.children[1+2].value).toBe("srcAcct4");
    expect(selectDestAcct.children[0+2].value).toBe("destAcct4");

//
// Testing CAD Currency Formatter.
//

    expect(c130c.formatCurrency.format(-2500)).toBe("-$2,500.00");
    expect(c130c.formatCurrency.format(2999566.34)).toBe("$2,999,566.34");
    expect(c130c.formatCurrency.format(2999566.344)).toBe("$2,999,566.34");
    expect(c130c.formatCurrency.format(2999566.346)).toBe("$2,999,566.35");
    expect(c130c.formatCurrency.format(2999566.345)).toBe("$2,999,566.35");
});
