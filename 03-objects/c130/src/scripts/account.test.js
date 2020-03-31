import {Account, AccountController} from './account.js'

test('130a/b: Does class instantiation and methods work?', () => {

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

    //
    // Create AccountController for client Duane Munro
    //
    const duane = new AccountController("Duane Munro");
    expect(duane.getClientName()).toBe("Duane Munro");
    //
    // Add the prior Savings Account
    //
    expect(duane.addAccount(savingsAccount)).toBe(1);
    expect(duane.getAcctName(1)).toBe("Savings");
    expect(duane.getAcctBalance(1)).toBe(200);
    expect(duane.listOfAccts[1].isCredit()).toBeFalsy();
    //
    // Add the prior Chequing Account
    //
    expect(duane.addAccount(checkingAccount)).toBe(2);
    expect(duane.getAcctName(2)).toBe("Chequing");
    expect(duane.getAcctBalance(2)).toBe(5);
    expect(duane.listOfAccts[2].isCredit()).toBeFalsy();
    //
    // Add the prior Credit Card Account
    //
    expect(duane.addAccount(creditCardAccount)).toBe(3);
    expect(duane.getAcctName(3)).toBe("MasterCard");
    expect(duane.getAcctBalance(3)).toBe(0);
    expect(duane.listOfAccts[3].isCredit()).toBeTruthy();
    //
    // Add the prior Line of Credit Account
    //
    expect(duane.addAccount(lineOfCreditAccount)).toBe(4);
    expect(duane.getAcctName(4)).toBe("Line of Credit");
    expect(duane.getAcctBalance(4)).toBe(-200);
    expect(duane.listOfAccts[4].isCredit()).toBeTruthy();
    //
    // Remove the MasterCard Credit Account
    //
    const emptyAccount = new Account();
    expect(duane.removeAccount(3)).toEqual(emptyAccount);
    //
    // Summarize the total of all Accounts    //
    //
    expect(duane.sumAccounts()).toBe(5);
    //
    // Find Highest Value Account    //
    //
    expect(duane.findHighAccount()).toBe(1);
    //
    // Find Lowest Value Account    //
    //
    expect(duane.findLowAccount()).toBe(4);

});
