// This is competency 130a & 130b.

export class Account {

    constructor(acctName, acctBal) {

        this.acctName = acctName;
        this.acctBal = acctBal;
    
    }

    getAccountName() {

        return this.acctName;

    }

    getBalance() {

        return this.acctBal;

    }

    deposit(amt) {

        return this.acctBal = (this.acctBal*100 + amt*100) / 100;

    }

    withdraw(amt) {

        return this.acctBal = (this.acctBal*100 - amt*100) / 100;

    }
}

export class AccountController {

    constructor(acctName, acctBal) {

        this.acctName = acctName;
        this.acctBal = acctBal;
    
    }
}
// export default Account;
