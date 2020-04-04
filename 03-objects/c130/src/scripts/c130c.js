//
// This is competency 130c.
//

const c130c = {

    divCreateAddAcctElement: () => {

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
    
    createdivAddAcct: () => {
    
        if (document.getElementById("idAddAcct") === null) {

            idAccts.parentElement.insertBefore(c130c.divCreateAddAcctElement(), idAccts);

            btnCreateAcct.addEventListener('click', (e => {
 
                //
                // Add the code to Create the account.
                //
        
                c130c.createNewAcct(duane);

                //
                // Account was added. Now with Add div.
                // Remove the div and events its buttons.
                //

                c130c.removedivAddAcct ();
              
            }));
    
            btnCancelAcct.addEventListener('click', (e => {
        
                console.log("In the btnCancelAcct of addEventListener");
    
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
 
            messageArea.textContent = `Please input the new Account name`;
            return newAcctNum;

        }
        else {

            newAcctNum = client.addAccount(inputNewAcct.value.trim(), inputAmt.value, 
                inputRadioCredit.checked);
            if (newAcctNum !== 0) {
                messageArea.textContent = `Created New Account ${client.getAcctName(newAcctNum)}`
                + ` with Initial Balance of $${client.getAcctBalance(newAcctNum)}`;
            }
            else {
                messageArea.textContent = 
                    `New Account was not created with failed Account Number of ${newAcctNum}`;
            }

            return newAcctNum;
        }
    },

    actionTransaction: (actionType, client) => {

        const inputValue = inputAmt.value;
        const srcValue = selectAcct.value;
        
        let actionPreposition = "to";
        if (actionType === "Withdraw") actionPreposition = "from";
        
        if (srcValue === "srcSelect") {
            messageArea.textContent = `Please Select an Account`;
        }
        else if (inputValue < 0) {
            messageArea.textContent = `You May Only ${actionType} a Positive Amount`;
        }
        else if (inputValue < 1) {
            messageArea.textContent = `Please Input an Amount to ${actionType}`;
        }
        else {
            
            const acctNum = Number(srcValue.replace("srcAcct", ""));
            if (actionType === "Deposit") client.deposit(acctNum, inputValue);
            else if (actionType === "Withdraw") client.withdraw(acctNum, inputValue);

            messageArea.textContent = `${actionType} $${inputValue} ${actionPreposition} ` +
                `${client.getAcctName(acctNum)}. Balance is now: $${client.getAcctBalance(acctNum)}`;
            document.getElementById(`sumAcct${acctNum}`).textContent = `$${client.getAcctBalance(acctNum)}`;
            idSum.textContent = `$${client.sumAccounts()}`;

            selectAcct.value = "srcSelect";
            inputAmt.value = 0.00;
        }
    }

    // displayliElements: (liElement) => {
    //     // 
    //     // The following method displays all "li" elements array to a returned string field that can be used to 
    //     // display/show the li elements in the array.
    //     //
    //     let textOfElements = "[";
    //     for (let i = 0; i < liElement.length; i++) {
    //             if (i === (liElement.length-1)) textOfElements += liElement[i].textContent;
    //             else textOfElements += liElement[i].textContent + ", ";
    //     }
    //     textOfElements += "]";

    //     return textOfElements;
    // },

    // //
    // // First check and make sure the target was an LI type then continue to delete it.
    // // Return the number of LI elements removed.
    // //

    // removeTargetLIFromOL: (targetFromEvent) => {

    //     let removedCount = 0;

    //     if (targetFromEvent.nodeName === "LI") {

    //         targetFromEvent.parentElement.removeChild(targetFromEvent);
    //         removedCount++;
    //     }
    //     //return targetFromEvent.parentElement.nodeName;
    //     return removedCount;

    //     //let removedCount = 0;

    //     //if (eventDiv.target.nodeName === "LI") {

    //     //    eventDiv.target.parentElement.removeChild(eventDiv.target);
    //     //    removedCount++;
    //     //}
    //     //return removedCount;
    // },

    // //
    // // First check and make sure the target was an LI type then continue to delete it. Then
    // // loop through the ol1 and delete all li that match the outerText values of the list.
    // // I find it strange I could not find an index value in the eIDdiv1 showing which index was targetted.
    // // Return the number of LI elements removed.
    // //
    // // Note: This was my first attempt at deleting using the target. I finally realized I could use the target as
    // // the pointer and NOT the array. I therefore switched to using the method removeTargetLIFromOL, but kept this
    // // around for learning and reference.
    // //

    // removeMatchingLIFromOL: (eventDiv) => {

    //     let removedCount = 0;

    //     if (eventDiv.target.nodeName === "LI") {

    //         const parentOL = document.getElementById("ol1");
    //         let childLI;
    //         console.log("Inside removeMatchingLIFromOL");
    //         console.log(eventDiv);
        
    //         for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    //             if (document.getElementsByTagName("li")[i].outerText === eventDiv.target.outerText) {
    //                 childLI = document.getElementsByTagName("li")[i];
    //                 parentOL.removeChild(childLI);
    //                 removedCount++;
    //             }
    //         }
    //     }
    //     return removedCount;
    // },

    // //
    // // Add a child LI element to the parent OL element.
    // // Specify "END" to add as the last of the list, or "START" to the beginning or 1st of the list.
    // //

    // addliElement: (addWhere) => {
        
    //     const ol1Document = document.getElementById("ol1");
    //     const liNewElement = document.createElement("li");
    //     liNewElement.appendChild(document.createTextNode("Item " + (Number(ol1Document.childElementCount)+1)));

    //     if (addWhere === "END") ol1Document.appendChild(liNewElement);
    //     else if (addWhere === "START") ol1Document.insertBefore(liNewElement,ol1Document.childNodes[0]);
    //     else addCount = 0;

    //     return ol1Document.textContent;
    // },

    // displayAllCardElements: (leftCardsElement, rightCardsElement) => {
    //     // 
    //     // The following method displays all the card elements on left side and right side to a returned string field that can be used to 
    //     // display/show them to the user.
    //     //
    //     let textOfElements = "[";
    //     for (let i = 0; i < leftCardsElement.length; i++) {
    //             if (i === (leftCardsElement.length-1)) textOfElements += leftCardsElement[i].textContent;
    //             else textOfElements += leftCardsElement[i].textContent + ", ";
    //     }
    //     textOfElements += "],[";

    //     for (let i = 0; i < rightCardsElement.length; i++) {
    //         if (i === (rightCardsElement.length-1)) textOfElements += rightCardsElement[i].textContent;
    //         else textOfElements += rightCardsElement[i].textContent + ", ";
    //     }

    //     textOfElements += "]";

    //     return textOfElements;
    // },

    // //
    // // Add a card element. "ADD" to the end. "BEFORE" before the target card. "AFTER" after the target card.
    // //

    // addCardElement: (addWhere, targetFromEvent, nextCardNumber) => {
        
    //     console.log("Next Number will be: " + nextCardNumber);

    //     let addCount = 1;
    //     const divLPDocument = document.getElementsByClassName("divLeftPanel");
    //     const divNewElement = document.createElement("div");
    //     let att = document.createAttribute("class");
    //     att.value = "clCardLS";
    //     divNewElement.setAttributeNode(att);

    //     const pNewElement = document.createElement("p");
    //     pNewElement.appendChild(document.createTextNode("Card " + nextCardNumber));
    //     divNewElement.appendChild(pNewElement);

    //     const addBeforeButtonNewElement = document.createElement("BUTTON");
    //     addBeforeButtonNewElement.textContent = "Add Before";
    //     divNewElement.appendChild(addBeforeButtonNewElement);

    //     const addAfterButtonNewElement = document.createElement("BUTTON");
    //     addAfterButtonNewElement.textContent = "Add After";
    //     divNewElement.appendChild(addAfterButtonNewElement);

    //     const addDeleteButtonNewElement = document.createElement("BUTTON");
    //     addDeleteButtonNewElement.textContent = "Delete";
    //     divNewElement.appendChild(addDeleteButtonNewElement);

    //     if (addWhere === "END") divLPDocument[0].appendChild(divNewElement);
    //     else if (addWhere === "BEFORE") targetFromEvent.parentElement.insertBefore(divNewElement, targetFromEvent);
    //     else if (addWhere === "AFTER") targetFromEvent.parentElement.insertBefore(divNewElement, targetFromEvent.nextElementSibling);
    //     else addCount = 0;
 
    //     return addCount;
    // },

    // //
    // // Delete the target card element.
    // //

    // deleteCardElement: (targetFromEvent) => {

    //     let removedCount = 0;

    //     targetFromEvent.parentElement.removeChild(targetFromEvent);
    //     removedCount++;

    //     return removedCount;
    // }

};

export default c130c;
