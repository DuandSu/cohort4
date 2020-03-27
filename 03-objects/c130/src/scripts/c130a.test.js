import c130a from './c130a.js'
import Account from './account.js'

test('130a: Does class instantiation and methods work?', () => {

    const savingsAccount = new Account("Savings", 100);
    expect(savingsAccount.acctName).toBe("Savings");
    expect(savingsAccount.acctBal).toBe(100);
    expect(savingsAccount.getBalance()).toBe(100);
    expect(savingsAccount.deposit(150)).toBe(250);
    expect(savingsAccount.getBalance()).toBe(250);
    expect(savingsAccount.withdraw(50)).toBe(200);
    expect(savingsAccount.getBalance()).toBe(200);

    const checkingAccount = new Account("Chequing", 25);
    expect(checkingAccount.acctName).toBe("Chequing");
    expect(checkingAccount.acctBal).toBe(25);
    expect(checkingAccount.getBalance()).toBe(25);
    expect(checkingAccount.deposit(10)).toBe(35);
    expect(checkingAccount.getBalance()).toBe(35);
    expect(checkingAccount.withdraw(30)).toBe(5);
    expect(checkingAccount.getBalance()).toBe(5);

});
