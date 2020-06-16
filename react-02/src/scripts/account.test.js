import {Account, AccountController} from './account.js'

test('130a/b/c: Does Account class instantiation and methods work?', () => {
    
    const savingsAccount = new Account("Savings", 100);
    expect(savingsAccount.acctName).toBe("Savings");
    expect(savingsAccount.getAccountName()).toBe("Savings");
    expect(savingsAccount.acctBal).toBe(100);
    expect(savingsAccount.getBalance()).toBe(100);
    expect(savingsAccount.isCredit()).toBeFalsy();;
    expect(savingsAccount.deposit(150)).toBe(250);
    expect(savingsAccount.getBalance()).toBe(250);
    expect(savingsAccount.withdraw(50)).toBe(200);
    expect(savingsAccount.getBalance()).toBe(200);
    
    const checkingAccount = new Account("Chequing", 25);
    expect(checkingAccount.acctName).toBe("Chequing");
    expect(checkingAccount.getAccountName()).toBe("Chequing");
    expect(checkingAccount.getBalance()).toBe(25);
    expect(checkingAccount.isCredit()).toBeFalsy();;
    expect(checkingAccount.deposit(10)).toBe(35);
    expect(checkingAccount.getBalance()).toBe(35);
    expect(checkingAccount.withdraw(30)).toBe(5);
    expect(checkingAccount.getBalance()).toBe(5);
    
    const creditCardAccount = new Account("MasterCard", 0);
    expect(creditCardAccount.getAccountName()).toBe("MasterCard");
    expect(creditCardAccount.getBalance()).toBe(0);
    expect(creditCardAccount.setToCredit()).toBeTruthy();
    expect(creditCardAccount.isCredit()).toBeTruthy();
    
    const lineOfCreditAccount = new Account("Line of Credit", -200);
    expect(lineOfCreditAccount.getAccountName()).toBe("Line of Credit");
    expect(lineOfCreditAccount.getBalance()).toBe(-200);
    expect(lineOfCreditAccount.setToCredit()).toBeTruthy();
    expect(lineOfCreditAccount.isCredit()).toBeTruthy();;
    
});

test('130c: Does Account Controller class instantiation and methods work?', () => {

    //
    // Create Account Controller for client Duane Munro
    //

    const duane = new AccountController("Duane Munro");
    expect(duane.getClientName()).toBe("Duane Munro");

    //
    // Test messaging for controller
    //

    expect(duane.isMessage()).toBeFalsy();
    expect(duane.getMessages()).toBe("");
    expect(duane.addMessage("Welcome to the Bank of Munrobinson!")).toBe(true);
    expect(duane.addMessage("We provide all your banking needs with no interest or service charges.")).toBe(true);
    expect(duane.addMessage("Enjoy your experience and have a GREAT day.")).toBe(true);
    expect(duane.isMessage()).toBeTruthy();
    expect(duane.getMessages()).toBe(" Welcome to the Bank of Munrobinson!" +
    " We provide all your banking needs with no interest or service charges." +
    " Enjoy your experience and have a GREAT day.");
    expect(duane.resetMessage()).toBe(true);
    expect(duane.isMessage()).toBeFalsy();
    expect(duane.getMessages()).toBe("");
    
    //
    // Add Savings Account
    //

    expect(duane.addAccount("Savings", 200, false)).toBe(1);
    expect(duane.getAcctName(1)).toBe("Savings");
    expect(duane.getAcctBalance(1)).toBe(200);
    expect(duane.isCredit(1)).toBeFalsy();
    expect(duane.getMessages()).toBe(` Created New Account ${duane.getAcctName(1)} ` +
        `with Initial Balance of $200.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Savings.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
    
    //
    // Add Chequing Account
    //

    expect(duane.addAccount("Chequing", 5, false)).toBe(2);
    expect(duane.getAcctName(2)).toBe("Chequing");
    expect(duane.getAcctBalance(2)).toBe(5);
    expect(duane.isCredit(2)).toBeFalsy();
    expect(duane.getMessages()).toBe(` Created New Account ${duane.getAcctName(2)} ` +
        `with Initial Balance of $5.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Chequing.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Add MasterCard Credit Card Account
    //
    
    expect(duane.addAccount("MasterCard", 0, true)).toBe(3);
    expect(duane.getAcctName(3)).toBe("MasterCard");
    expect(duane.getAcctBalance(3)).toBe(0);
    expect(duane.isCredit(3)).toBeTruthy();
    expect(duane.getMessages()).toBe(` Created New Credit Account ${duane.getAcctName(3)} ` +
        `with Initial Balance of $0.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: MasterCard.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Add Line of Credit Account
    //

    expect(duane.addAccount("Line of Credit", -200, true)).toBe(4);
    expect(duane.getAcctName(4)).toBe("Line of Credit");
    expect(duane.getAcctBalance(4)).toBe(-200);
    expect(duane.isCredit(4)).toBeTruthy();
    expect(duane.getMessages()).toBe(` Created New Credit Account ${duane.getAcctName(4)} ` +
        `with Initial Balance of -$200.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Remove the MasterCard Credit Account
    //

    expect(duane.removeAccount(3)).toBeTruthy();
    expect(duane.getMessages()).toBe(` Deleted Account MasterCard. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Summarize the total of all Accounts    //
    //

    expect(duane.sumAccounts()).toBe(5);

    //
    // Find HIGHest value Value Account    //
    //

    expect(duane.findHighAccount()).toBe(1);

    //
    // Find LOWest value Value Account    //
    //

    expect(duane.findLowAccount()).toBe(4);

    //
    // Attempt Deposit to non-Account
    //
    expect(duane.deposit(3, 50)).toBe(NaN);
    expect(duane.getMessages()).toBe(" Deposit $50.00 attempt FAILED to an account that does NOT exist.");
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
    
    //
    // Deposit to Savings
    //
    
    expect(duane.deposit(1, 50)).toBe(250);
    expect(duane.isMessage()).toBeTruthy();
    expect(duane.getMessages()).toBe(` Deposit $50.00 to ${duane.getAcctName(1)}. ` +
        `Balance is now: $250.00. ` +
        `Your HIGHest value account is Account: Savings. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
    
    //
    // Deposit to Chequing
    //
    
    expect(duane.deposit(2, 300)).toBe(305);
    expect(duane.isMessage()).toBeTruthy();
    expect(duane.getMessages()).toBe(` Deposit $300.00 to ${duane.getAcctName(2)}. ` +
        `Balance is now: $305.00. ` +
        `Your HIGHest value account is Account: Chequing. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
    
    //
    // Attempt Withdraw to non-Account
    //
    expect(duane.withdraw(3, 50)).toBe(NaN);
    expect(duane.getMessages()).toBe(" Withdraw $50.00 attempt FAILED from an account that does NOT exist.");
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Withdraw from Line of Credit
    //
    
    expect(duane.withdraw(4, 1000)).toBe(-1200);
    expect(duane.isMessage()).toBeTruthy();
    expect(duane.getMessages()).toBe(` Withdraw $1,000.00 from ${duane.getAcctName(4)}. ` +
        `Balance is now: -$1,200.00. ` +
        `Your HIGHest value account is Account: Chequing. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
    
       
    //
    // Add Visa Credit Card Account
    //
    
    expect(duane.addAccount("Visa", -5000, true)).toBe(5);
    expect(duane.getAcctName(5)).toBe("Visa");
    expect(duane.getAcctBalance(5)).toBe(-5000);
    expect(duane.isCredit(5)).toBeTruthy();
    expect(duane.getMessages()).toBe(` Created New Credit Account ${duane.getAcctName(5)} ` +
        `with Initial Balance of -$5,000.00. ` +
        `Your HIGHest value account is Account: Chequing. Your LOWest value account is Account: Visa.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    //
    // Summarize the total of all Accounts
    //

    expect(duane.sumAccounts()).toBe(-5645);

    //
    // Find HIGHest value Value Account
    //

    expect(duane.findHighAccount()).toBe(2);

    //
    // Find LOWest value Value Account
    //

    expect(duane.findLowAccount()).toBe(5);

    //
    // Transfer from Savings to Chequing
    //

    expect(duane.transfer(1, 2, 50)).toEqual([200,355]);

    //
    // Transfer from Line of Credit to Visa
    //

    expect(duane.transfer(4, 5, 500)).toEqual([-1700,-4500]);
    
    //
    // Attempt Transfer with a non-Account. Return NaN and balances
    // unchanged.
    //

    expect(duane.transfer(3, 5, 500)).toEqual([NaN,-4500]);
    expect(duane.transfer(5, 3, 500)).toEqual([-4500, NaN]);

    //
    // Testing account list sort.
    //

    expect(duane.sortAcctList("Name")).toEqual([2, 4, 1, 5]);

    //
    // More Remove account.
    //
    // Account must be zero balance!
    //

    expect(duane.removeAccount(5)).toBeFalsy();
    expect(duane.getMessages()).toBe(` Account ${duane.getAcctName(5)} ` +
        `must be a 0 balance for deletion. Deposit or Withdraw to $0.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();

    expect(duane.deposit(5, 4500)).toBe(0);
    expect(duane.isMessage()).toBeTruthy();
    expect(duane.getMessages()).toBe(` Deposit $4,500.00 to ${duane.getAcctName(5)}. ` +
        `Balance is now: $0.00. ` +
        `Your HIGHest value account is Account: Chequing. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
        
    expect(duane.removeAccount(5)).toBeTruthy();
    expect(duane.getMessages()).toBe(` Deleted Account Visa. ` +
        `Your HIGHest value account is Account: Chequing. Your LOWest value account is Account: Line of Credit.`);
    expect(duane.resetMessage()).toBeTruthy();
    expect(duane.isMessage()).toBeFalsy();
});