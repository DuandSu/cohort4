// This is competency 130a.
// This is the Account Class definition.
//
class Account {

    constructor(acctName, acctBal) {

        this.acctName = acctName;
        this.acctBal = acctBal;
    
    }

    getBalance() {

        return this.acctBal;

    }

    deposit(amt) {

        return this.acctBal += amt;

    }

    withdraw(amt) {

        return this.acctBal -= amt;

    }
}

export default Account;
