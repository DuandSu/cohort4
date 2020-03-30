import c130b from './c130b.js'
import {Account} from './account.js'

test('130b: Does the Bank Interface Work?', () => {

    document.body.innerHTML =
	'<section class ="sectionMain">' +
		'<h1>Welcome to the MunRobinson Bank</h1>' +
		'<div class="divBankActions">' +
			'<div class="divAcctSelect">' +
				'Account Name: <select id=selectAcct>' +
					'<option value="srcSelect">Select Account</option>' +
					'<option value="srcAddAcct">Add New Account</option>' +
					'<option value="srcAcctChequing">Chequing</option>' +
					'<option value="srcAcctSavings">Savings</option>' +
					'<option value="srcAcctCreditCard">Credit Card</option>' +
					'<option value="srcAcctReallyLongNameforanAccount">Really Long Name for an Account</option>' +
				'</select>' +
				'-> <select id="selectDestAcct">' +
					'<option value="destSelect">Select Destination Account</option>' +
					'<option value="destAcctChequing">Chequing</option>' +
					'<option value="destAcctSavings">Savings</option>' +
					'<option value="destAcctCreditCard">Credit Card</option>' +
					'<option value="destAcctReallyLongNameforanAccount">Really Long Name for an Account</option>' +
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
		'<div class="divAccounts">' +
			'<div class="divAcctsList">' +
			'<section class="sectionAcctList">' +
				'<h4>Account</h4>' +
				'<ul id="ulAcctList">' +
					'<li id="listAcctChequing" class="liOdd">Chequing</li>' +
					'<li id="listAcctSavings" class="liEven">Savings</li>' +
					'<li id="listAcctCredit Card" class="liOdd">Credit Card</li>' +
					'<li class="liSum">Summary of All Accounts</li>' +
				'</ul>' +
			'</section>' +
			'<aside class="asideAcctBal">' +
				'<h4>Balance</h4>' +
			 	'<ul id="ulAcctBal">' +
					'<li id="sumAcctChequing"class="liOdd">$0.00</li>' +
					'<li id="sumAcctSavings" class="liEven">$200.00</li>' +
					'<li id="sumAcctCredit Card"class="liOdd">$100.00</li>' +
					'<li class="liSum">$100.00</li>' +
			 	'</ul>' +
			 '</aside>' +
			'</div>' +
		'</div>' +
    '</section>';
    
    //
    // Setup test account to be Savings with initial balance $200.00
    //
    const savingsAccount = new Account("Savings", 200);
    //
    // Scenario: Attempt Deposit button with nothing selected. Should receive error message.
    //
    let actionType = "Deposit";
    let actionPreposition = "to";
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Select an Account`);
    //
    // Scenario: User next selects the Savings account, but leaves the input amount as $0.
    // Should receive error message. Nothing reset.
    //
    document.getElementById("selectAcct").value = "srcAcctSavings";
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Input an Amount to ${actionType}`);
    //
    // Scenario: User next attempts a negative value $-1. Should receive error message. Nothing reset.
    //
    document.getElementById("inputAmt").value = -1;
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`You May Only ${actionType} a Positive Amount`);
    //
    // Scenario: User now types in a value of $500 and attempts to Deposit button. Display action result.
    //
    document.getElementById("inputAmt").value = 500;
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`${actionType} $500 ${actionPreposition} ` +
        `${savingsAccount.getAccountName()}. Balance is now: $700`);
    //
    // New account balance should show in account list.
    //
    expect(document.getElementById(`sumAcct${savingsAccount.getAccountName()}`).textContent).toBe(`$${savingsAccount.getBalance()}`);
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
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Select an Account`);
    //
    // Scenario: User next selects the Savings account, but leaves the input amount as $0.
    // Should receive error message. Nothing reset.
    //
    document.getElementById("selectAcct").value = "srcAcctSavings";
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`Please Input an Amount to ${actionType}`);
    //
    // Scenario: User next attempts a negative value $-1. Should receive error message. Nothing reset.
    //
    document.getElementById("inputAmt").value = -1;
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`You May Only ${actionType} a Positive Amount`);
    //
    // Scenario: User now types in a value of $200 and attempts to Withdraw button. Display action result.
    //
    document.getElementById("inputAmt").value = 200;
    c130b.actionTransaction(actionType, savingsAccount);
    expect(document.getElementById("messageArea").textContent).toBe(`${actionType} $200 ${actionPreposition} ` +
        `${savingsAccount.getAccountName()}. Balance is now: $500`);
    //
    // New account balance should show in account list.
    //
    expect(document.getElementById(`sumAcct${savingsAccount.getAccountName()}`).textContent).toBe(`$${savingsAccount.getBalance()}`);
    //
    // Select Menu and Input values get reset.
    //
    expect(document.getElementById("selectAcct").value).toBe("srcSelect");
    expect(document.getElementById("inputAmt").value).toBe("0");

});
