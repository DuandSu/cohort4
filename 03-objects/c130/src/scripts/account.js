// This is competency 130a, 130b & 130c.

export class Account {

    //
    // acctNum left as 0. Calling function can determine account number assignment.
    //

    constructor(acctName, acctBal) {

        this.acctName = acctName;
        this.acctNum = 0;
        this.acctBal = acctBal;
        this.acctType = "Normal";
        
    }
    
    setAcctNum(acctNum) {

        this.acctNum = acctNum;
        return true;
    
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

        newAcct.setAcctNum(this.nextAcctNum++);
        if (creditFlag) newAcct.setToCredit();
        this.listOfAccts[newAcct.acctNum] = newAcct;
        
        // messageArea.textContent = `Created New Account ${client.getAcctName(newAcct.acctNum)}`
        //     + ` with Initial Balance of $${client.getAcctBalance(newAcctNum)}.`;
        this.addMessage(`Created New Account ${acctName} with Initial Balance of $${acctBalance}.`);
        this.addMessage(`Your HIGHest value account is Account: ${this.getAcctName(this.findHighAccount())}.`);
        this.addMessage(`Your LOWest value account is Account: ${this.getAcctName(this.findLowAccount())}.`);

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
            this.addMessage(`Your HIGHest value account is Account: ${this.getAcctName(this.findHighAccount())}.`);
            this.addMessage(`Your LOWest value account is Account: ${this.getAcctName(this.findLowAccount())}.`);
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
            this.addMessage(`Your HIGHest value account is Account: ${this.getAcctName(this.findHighAccount())}.`);
            this.addMessage(`Your LOWest value account is Account: ${this.getAcctName(this.findLowAccount())}.`);
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

    sortAcctList(sortBy) {

        // const emptyAccount = new Account();

        const tmpAcctList = [];
        let tmpAcct = new Account();
        let tmpCnt = 0
        let retArrKeys = [];

        //
        // Set up tmpAcctList as duplicate of Account List without]
        // the missing accounts. Note that index in tmpAcctList no
        // longer represents account number, but can grab that from
        // the account class.
        //

        for (let i = 1; i < this.listOfAccts.length; i++) {

            if (typeof this.listOfAccts[i].getAccountName() !== 'undefined') {
                tmpAcctList[tmpCnt++] = this.listOfAccts[i];
                console.log(`New index ${tmpCnt-1} is Account: ${tmpAcctList[tmpCnt-1].acctName}`);
            }
        }
    
        let tradesMade = true;

        while (tradesMade) {

            tradesMade = false;
            for (let i = 0; i < tmpAcctList.length; i++) {

                
                if (i !== (tmpAcctList.length - 1)) {
                    
                    console.log(`Compare index ${i+1} Account: ${tmpAcctList[i+1].acctName}`);
                    console.log(`To index ${i} Account: ${tmpAcctList[i].acctName}`);

                    if (tmpAcctList[i+1].acctName < tmpAcctList[i].acctName) {
                        tmpAcct = tmpAcctList[i];
                        tmpAcctList[i] = tmpAcctList[i+1];
                        tmpAcctList[i+1] = tmpAcct;
                        tradesMade = true;
                    }
                }        
            }
        }

        //
        // Only need to return the keys acctNum sorted.
        //

        for (let i = 0; i < tmpAcctList.length; i++) {

            retArrKeys[i] = tmpAcctList[i].acctNum;
        }

        return retArrKeys;
    }

    findHighAccount() {

        if (this.listOfAccts.length > 0) {
            let highAcctNum = 1;
            let highAcctBal = this.listOfAccts[1].getBalance();
            for (let i = 1; i < this.listOfAccts.length; i++) {
                if (typeof this.listOfAccts[i].getAccountName() !== 'undefined') {
                    if (this.listOfAccts[i].getBalance() > highAcctBal) {
                        highAcctNum = i;
                        highAcctBal = this.listOfAccts[i].getBalance();
                    }
                }
            }
            return highAcctNum;
        }
        return 0;
    }
    
    findLowAccount() {
        
        if (this.listOfAccts.length > 0) {
            let lowAcctNum = 1;
            let lowAcctBal = this.listOfAccts[1].getBalance();
            for (let i = 1; i < this.listOfAccts.length; i++) {
                if (typeof this.listOfAccts[i].getAccountName() !== 'undefined') {
                    if (this.listOfAccts[i].getBalance() < lowAcctBal) {
                        lowAcctNum = i;
                        lowAcctBal = this.listOfAccts[i].getBalance();
                    }
                }
            }
            return lowAcctNum;
        }
        return 0;
    }
}