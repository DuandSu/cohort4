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
    
        if (typeof this.acctBal !== 'undefined') {

            return this.acctBal;

        }
        else {

            return NaN;

        }

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
        this.msgQueue = [];

    }
    
    getClientName() {
        
        return this.clientName;
        
    }
        
    isMessage() {
    
        if (this.msgQueue.length > 0)
            return true;
        else
            return false;
    }
    
    getMessages() {

        let messages = "";
        for (let i = 0; i < this.msgQueue.length; i++) {
            messages += " " + `${this.msgQueue[i]}`;
            // messages += "\n" + `${this.msgQueue[i]}`;
            // messages += "<br>" + `${this.msgQueue[i]}`;
        }

        return messages;
    }

    addMessage(textMsg) {

        this.msgQueue[this.msgQueue.length] = textMsg;

        return true;
    }

    resetMessage() {

        this.msgQueue = [];
        
        return true;

    }

    addAccount(acctName, acctBalance, creditFlag) {

        const newAcct = new Account(acctName, Number(acctBalance));

        newAcct.acctNum = this.nextAcctNum++;
        if (creditFlag) newAcct.setToCredit();
        this.listOfAccts[newAcct.acctNum] = newAcct;
            
        return newAcct.acctNum;
    }

    getAcctName(acctNum) {
        
        return this.listOfAccts[acctNum].getAccountName();
        
    }
    
    getAcctBalance(acctNum) {
        
        if (typeof this.listOfAccts[acctNum].getAccountName() !== 'undefined') {

            return this.listOfAccts[acctNum].getBalance();

        }
        else {

            return NaN;

        }
        
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

        if (typeof this.listOfAccts[acctNum].getAccountName() !== 'undefined') {
             
            const newBal = this.listOfAccts[acctNum].deposit(amt);
            this.addMessage(`Deposit $${amt} to ${this.listOfAccts[acctNum].getAccountName()}. ` +
                `Balance is now: $${newBal}.`);
            this.addMessage(`Your HIGHest account is Account: ${this.getAcctName(this.findHighAccount())}.`);
            this.addMessage(`Your LOWest account is Account: ${this.getAcctName(this.findLowAccount())}.`);
            return newBal;
        }
        else {

            this.addMessage(`Deposit $${amt} attempt FAILED to an account that does NOT exist.`);
            return NaN;

        }
    }
    
    withdraw(acctNum, amt) {
        
        if (typeof this.listOfAccts[acctNum].getAccountName() !== 'undefined') {
            
            const newBal = this.listOfAccts[acctNum].withdraw(amt);
            this.addMessage(`Withdraw $${amt} from ${this.listOfAccts[acctNum].getAccountName()}. ` +
            `Balance is now: $${newBal}.`);
            this.addMessage(`Your HIGHest account is Account: ${this.getAcctName(this.findHighAccount())}.`);
            this.addMessage(`Your LOWest account is Account: ${this.getAcctName(this.findLowAccount())}.`);
            return newBal;

        }
        else {

            this.addMessage(`Withdraw $${amt} attempt FAILED from an account that does NOT exist.`);
            return NaN;

        }
            
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
                    if (this.listOfAccts[i].getBalance() > highestAcctBal) {
                        highestAcctNum = i;
                        highestAcctBal = this.listOfAccts[i].getBalance();
                    }
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
                    if (this.listOfAccts[i].getBalance() < lowestAcctBal) {
                        lowestAcctNum = i;
                        lowestAcctBal = this.listOfAccts[i].getBalance();
                    }
                }
            }
            return lowestAcctNum;
        }
        return 0;
    }
}