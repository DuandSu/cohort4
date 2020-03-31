// This is competency 130a & 130b.

export class Account {

    constructor(acctName, acctBal) {

        this.acctName = acctName;
        this.acctNum = 0;
        this.acctBal = acctBal;
        this.acctType = "Normal";
        
    }
    
    setToCredit() {

        this.acctType = "Credit";
        return true;
    
    }
    
    isCredit() {

        if (this.acctType === "Credit") return true;
        else return false;
    
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

    constructor(clientName) {

        this.clientName = clientName;
        this.listOfAccts = [];
        this.nextAcctNum = 1;
    
    }

    getClientName() {

        return this.clientName;

    }

    addAccount(acctObj) {

        acctObj.acctNum = this.nextAcctNum++;
        this.listOfAccts[acctObj.acctNum] = acctObj;
            
        return acctObj.acctNum;

    }

    getAcctName(acctNum) {

        return this.listOfAccts[acctNum].getAccountName();

    }

    getAcctBalance(acctNum) {

        // console.log(`Get Account Name for Account Number: ${acctNum}`);
        // console.log(`Client Name: ${this.clientName}`);
        // console.log(`Account Number for Account ${acctNum}: ${this.listOfAccts[acctNum].acctNum}`);
        // console.log(`Account Name for Account ${acctNum}: ${this.listOfAccts[acctNum].acctName}`);
        // console.log(`Account Type for Account ${acctNum}: ${this.listOfAccts[acctNum].acctType}`);
        // console.log(`Account Balance for Account ${acctNum}: ${this.listOfAccts[acctNum].acctBal}`);
        // console.log(`Next Account Number: ${this.nextAcctNum}`);

        return this.listOfAccts[acctNum].getBalance();

    }

    removeAccount(acctNum) {

        const emptyAccount = new Account();
        return this.listOfAccts[acctNum] = emptyAccount;
            
    }
    
    sumAccounts() {

        let sumAccts = 0;
        for (let i = 1; i < this.listOfAccts.length; i++) {
            if (typeof this.listOfAccts[i].getAccountName() !== 'undefined') {
                sumAccts += this.listOfAccts[i].getBalance();
            }
        }
    return sumAccts;
    }

    findHighAccount() {

        if (this.listOfAccts.length > 0) {
            let highestAcctNum = 1;
            let highestAcctBal = this.listOfAccts[1].getBalance();
            for (let i = 1; i < this.listOfAccts.length; i++) {
                if (typeof this.listOfAccts[i].getAccountName() !== 'undefined') {
                    if (this.listOfAccts[i].getBalance() > highestAcctBal)
                        highestAcctNum = i;
                }
            }
            return highestAcctNum;
        }
        return 0;
    }

    findLowAccount() {

        if (this.listOfAccts.length > 0) {
            let lowestAcctNum = 1;
            let lowestAcctBal = this.listOfAccts[1].getBalance();
            for (let i = 1; i < this.listOfAccts.length; i++) {
                if (typeof this.listOfAccts[i].getAccountName() !== 'undefined') {
                    if (this.listOfAccts[i].getBalance() < lowestAcctBal)
                        lowestAcctNum = i;
                }
            }
            return lowestAcctNum;
        }
        return 0;
    }
}