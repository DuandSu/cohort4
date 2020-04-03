// This is competency 130a, 130b & 130c.

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
        this.msgQueue = "";
        this.msgFlag = false;
        
    }
    
    getClientName() {
        
        return this.clientName;
        
    }
    
    getMessage() {
        
        return this.msgQueue;
        
    }
    
    isMessage() {
        
        return this.msgFlag;
        
    }
    
    resetMessage() {

        this.msgQueue = "";
        this.msgFlag = false;
        
        return true;

    }

    addAccount(acctName, acctBalance, creditFlag) {

        const newAcct = new Account(acctName, acctBalance);

        newAcct.acctNum = this.nextAcctNum++;
        if (creditFlag) newAcct.setToCredit();
        this.listOfAccts[newAcct.acctNum] = newAcct;
            
        return newAcct.acctNum;
    }

    getAcctName(acctNum) {

        return this.listOfAccts[acctNum].getAccountName();

    }

    getAcctBalance(acctNum) {

        return this.listOfAccts[acctNum].getBalance();

    }

    removeAccount(acctNum) {

        const emptyAccount = new Account();
        return this.listOfAccts[acctNum] = emptyAccount;
            
    }
    
    isCredit(acctNum) {

        if (this.listOfAccts[acctNum].acctType === "Credit") return true;
        else return false;

    }

    deposit(acctNum, amt) {

        return this.listOfAccts[acctNum].deposit(amt);

    }
    
    withdraw(acctNum, amt) {
        
        return this.listOfAccts[acctNum].withdraw(amt);

    }

    transfer(fromAcctNum, toAcctNum, amt) {
        
        let returnArray = [0, 0];
        
        //
        // If non-account and NaN balance, then return NaN and balances unchanged.
        //  

        if (isNaN(this.listOfAccts[fromAcctNum].getBalance()) || isNaN(this.listOfAccts[toAcctNum].getBalance())) {
            
            returnArray[0] = this.listOfAccts[fromAcctNum].getBalance();
            returnArray[1] = this.listOfAccts[toAcctNum].getBalance();
            
        }
        else {

            returnArray[0] = this.listOfAccts[fromAcctNum].withdraw(amt);
            returnArray[1] = this.listOfAccts[toAcctNum].deposit(amt);

        }

        return returnArray;

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