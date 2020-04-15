//
// This is competency 130c.
//

const c130c = {

    divMakeAddAcctElement: () => {

        //
        // Create the following div for Adding Account Name:
        //
        // <div id=idAddAcct class="divAddAcct">
        //     Enter Name of New Account: <input id="inputNewAcct" type=text>
        //      Added label and radio button.
        //     <button id="btnCreateAcct" type="button">Create</button>
        //     <button id="btnCancelAcct" type="button">Cancel</button>
        // </div>
        //
        
        const divAdd = document.createElement("div");
        divAdd.textContent = "Enter Name of New Account: ";
        divAdd.setAttribute("id", "idAddAcct");
        divAdd.setAttribute("class", "divAddAcct");
         
        const newAcctInput = document.createElement("INPUT");
        newAcctInput.setAttribute("type", "text");
        newAcctInput.setAttribute("id", "inputNewAcct");
        divAdd.appendChild(newAcctInput);

        const createBtn = document.createElement("BUTTON");
        createBtn.textContent = "Create";
        createBtn.setAttribute("type", "button");
        createBtn.setAttribute("id", "btnCreateAcct");
        divAdd.appendChild(createBtn);
            
        const cancelBtn = document.createElement("BUTTON");
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute("type", "button");
        cancelBtn.setAttribute("id", "btnCancelAcct");
        divAdd.appendChild(cancelBtn);
    
        const brLine = document.createElement("BR");
        divAdd.appendChild(brLine);
        divAdd.appendChild(brLine);
        
        const labelNewCreditFlg = document.createElement("LABEL");
        labelNewCreditFlg.textContent = "Check if Credit Account: ";
        labelNewCreditFlg.setAttribute("for", "inputRadioCredit");
        divAdd.appendChild(labelNewCreditFlg);

        const newCreditFlgRadio = document.createElement("INPUT");
        newCreditFlgRadio.setAttribute("type", "radio");
        newCreditFlgRadio.setAttribute("id", "inputRadioCredit");
        newCreditFlgRadio.setAttribute("name", "inputRadioCredit");
        newCreditFlgRadio.setAttribute("value", "inputRadioCredit");
        divAdd.appendChild(newCreditFlgRadio);
        
        return divAdd;
    },

    //
    // The event listeners for "Create" and "Cancel" buttons, for the "Add Account" div are
    // in the following functions, since they actually exist only when the div is created.
    // When the div is added or deleted, the event listeners need to be created or removed.
    //
    
    createdivAddAcct: (client) => {
    
        if (document.getElementById("idAddAcct") === null) {

            idAccts.parentElement.insertBefore(c130c.divMakeAddAcctElement(), idAccts);

            btnCreateAcct.addEventListener('click', (e => {
 
                //
                // Add the code to Create the account.
                //
        
                c130c.createNewAcct(client);

                //
                // Account was added. Now with Add div.
                // Remove the div and events its buttons.
                //

                c130c.removedivAddAcct ();
              
            }));
    
            btnCancelAcct.addEventListener('click', (e => {
        
                //          
                // Cancel button would indicate done with Add div.
                // Remove the div and events its buttons.
                //
                c130c.removedivAddAcct ();
        
            }));
        }
    },

    removedivAddAcct: () => {

        btnCreateAcct.removeEventListener("click", e => {});
        btnCancelAcct.removeEventListener("click", e => {});
        idAccts.parentElement.removeChild(idAddAcct);

        selectAcct.value = "srcSelect";
        inputAmt.value = 0.00;
    },

    createNewAcct: (client) => {

        let newAcctNum = 0

        if (inputNewAcct.value.trim() === "") {
 
            messageArea.textContent = `Please input the new Account name.`;
            return newAcctNum;

        }
        else {

            newAcctNum = client.addAccount(inputNewAcct.value.trim(), inputAmt.value, 
                inputRadioCredit.checked);
            
            c130c.refreshAccountList(client);

            idSum.textContent = `${c130c.formatCurrency.format(client.sumAccounts())}`;

            if (client.isMessage()) {
                messageArea.textContent = client.getMessages();
                client.resetMessage();
            }
                
            return newAcctNum;
        }
    },

    deleteAccount: (client) => {

        const srcValue = selectAcct.value;
        if (srcValue === "srcSelect") {
            messageArea.textContent = `Please Select an Account.`;
        }
        else {
            
            const acctNum = Number(srcValue.replace("srcAcct", ""));
            
            const deleteOK = client.removeAccount(acctNum);
            
            if (client.isMessage()) {
                messageArea.textContent = client.getMessages();
                client.resetMessage();
            }
            
            if (deleteOK) {
                
                ulAcctList.removeChild(document.getElementById(`listAcct${acctNum}`));
                ulAcctBal.removeChild(document.getElementById(`sumAcct${acctNum}`));

                let maxLoop = selectAcct.children.length - 1;
                
                for (let i = maxLoop; i > -1; i--) {
        
                    if (selectAcct.children[i].value === `srcAcct${acctNum}`) {
        
                        selectAcct.removeChild(selectAcct.children[i]);
        
                    }
                }
        
                maxLoop = selectDestAcct.children.length - 1;
                
                for (let i = maxLoop; i > -1; i--) {
        
                    if (selectDestAcct.children[i].value === `destAcct${acctNum}`) {
        
                        selectDestAcct.removeChild(selectDestAcct.children[i]);
        
                    }
                }
                
                c130c.refreshAccountList(client);
                idSum.textContent = `${c130c.formatCurrency.format(client.sumAccounts())}`;
            }
        }
    },
    
    actionTransaction: (actionType, client) => {

        const inputValue = inputAmt.value;
        const srcValue = selectAcct.value;
        
        let actionPreposition = "to";
        if (actionType === "Withdraw") actionPreposition = "from";
        
        if (srcValue === "srcSelect") {
            messageArea.textContent = `Please Select an Account.`;
        }
        else if (inputValue < 0) {
            messageArea.textContent = `You May Only ${actionType} a Positive Amount.`;
        }
        else if (inputValue < 1) {
            messageArea.textContent = `Please Input an Amount to ${actionType}.`;
        }
        else {
            
            const acctNum = Number(srcValue.replace("srcAcct", ""));
            if (actionType === "Deposit") client.deposit(acctNum, inputValue);
            else if (actionType === "Withdraw") client.withdraw(acctNum, inputValue);

            if (client.isMessage()) {
                messageArea.textContent = client.getMessages();
                client.resetMessage();
            }

            document.getElementById(`sumAcct${acctNum}`).textContent = `${c130c.formatCurrency.format(client.getAcctBalance(acctNum))}`;
            idSum.textContent = `${c130c.formatCurrency.format(client.sumAccounts())}`;

            selectAcct.value = "srcSelect";
            inputAmt.value = 0.00;
        }
    },

    refreshAccountList: (client) => {

        //
        // First delete the existing list li and select elements.
        //

        c130c.deleteAccountList();

        //
        // Create the new list li and select in account name sort order.
        //

        c130c.createAccountList(client);
        
    },
            
    deleteAccountList: () => {

        //
        // Delete the account list names.
        //

        let maxLoop = ulAcctList.children.length - 1;
        let delNameCnt = 0
        
        for(let i = maxLoop; i > -1; i--) {

            if (ulAcctList.children[i].nodeName === "LI") {
                
                if (ulAcctList.children[i].id !== "idSumTxt") {
                    
                    ulAcctList.removeChild(document.getElementById(`${ulAcctList.children[i].id}`));
                    delNameCnt++;
                    
                }
            }
        }
        
        //
        // Delete the account list balances.
        //
        
        maxLoop = ulAcctBal.children.length - 1;
        let delBalCnt = 0
        
        for(let i = maxLoop; i > -1; i--) {

            if (ulAcctBal.children[i].nodeName === "LI") {

                if (ulAcctBal.children[i].id !== "idSum") {
                    
                    ulAcctBal.removeChild(document.getElementById(`${ulAcctBal.children[i].id}`));
                    delBalCnt++;

                }
            }
        }

        maxLoop = selectAcct.children.length - 1;
        let delSrcSelCnt = 0
        
        for (let i = maxLoop; i > -1; i--) {

            if (selectAcct.children[i].value !== "srcSelect" && 
                selectAcct.children[i].value !== "srcAddAcct") {

                selectAcct.removeChild(selectAcct.children[i]);
                delSrcSelCnt++;

            }
        }

        maxLoop = selectDestAcct.children.length - 1;
        let delDestSelCnt = 0
        
        for (let i = maxLoop; i > -1; i--) {

            if (selectDestAcct.children[i].value !== "destSelect") {

                selectDestAcct.removeChild(selectDestAcct.children[i]);
                delDestSelCnt++;

            }
        }

        if (delBalCnt === delNameCnt && delNameCnt === delSrcSelCnt && delSrcSelCnt === delDestSelCnt) return delBalCnt;
        else return -1;

    },

    createAccountList: (client) => {

        //
        // First, sort the accounts by Account Name into temp array.
        //

        const tempArr = client.sortAcctList("Name")
        
        //
        // Add the li elements in temp array order to create new list.
        //

        let addNameCnt = 0

        for (let i = 0; i < tempArr.length; i++) {

            const liAdd = document.createElement("li");
            liAdd.textContent = client.getAcctName(tempArr[i]);
            liAdd.setAttribute("id", `listAcct${tempArr[i]}`);
            if ((i+1) % 2 == 0) liAdd.setAttribute("class", "liEven");
            else liAdd.setAttribute("class", "liOdd");

            idSumTxt.parentElement.insertBefore(liAdd, idSumTxt);
            addNameCnt ++;
        }

        let addSumCnt = 0
        
        for (let i = 0; i < tempArr.length; i++) {
            
            const liAdd = document.createElement("li");
            liAdd.textContent = `${c130c.formatCurrency.format(client.getAcctBalance(tempArr[i]))}`;
            liAdd.setAttribute("id", `sumAcct${tempArr[i]}`);
            if ((i+1) % 2 == 0) liAdd.setAttribute("class", "liEven");
            else liAdd.setAttribute("class", "liOdd");
            
            idSum.parentElement.insertBefore(liAdd, idSum);
            addSumCnt++;
        }

        let addSrcCnt = 0
        
        for (let i = 0; i < tempArr.length; i++) {
            
            const srcAdd = document.createElement("OPTION");
            srcAdd.textContent = `${client.getAcctName(tempArr[i])}`;
            srcAdd.setAttribute("value", `srcAcct${tempArr[i]}`);
            
            selectAcct.appendChild(srcAdd);
            addSrcCnt++;
        }

        let addDestCnt = 0
        
        for (let i = 0; i < tempArr.length; i++) {
            
            const srcDest = document.createElement("OPTION");
            srcDest.textContent = `${client.getAcctName(tempArr[i])}`;
            srcDest.setAttribute("value", `destAcct${tempArr[i]}`);
            
            selectDestAcct.appendChild(srcDest);
            addDestCnt++;
        }

        if (addSumCnt === addNameCnt && addNameCnt === addSrcCnt && addSrcCnt === addDestCnt) return addSumCnt;
        else return -1;
    },
    
    formatCurrency: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

};


export default c130c;
