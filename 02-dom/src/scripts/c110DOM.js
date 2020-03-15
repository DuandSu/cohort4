// This is competency 100D.
// The purpose of this Javascript is to demonstrate usage of the array and dictionary objects, following the instructions
// in the competency.
//
// Note: Separation of concerns is pretty good I think. However, there is no TDD for any of the methods. Need to figuire
// that out.
//

const c110DOM = {

    displayliElements: (liElement) => {
        // 
        // The following method displays all "li" elements array to a returned string field that can be used to 
        // display/show the li elements in the array.
        //
        let textOfElements = "[";
        for (let i = 0; i < liElement.length; i++) {
                if (i === (liElement.length-1)) textOfElements += liElement[i].textContent;
                else textOfElements += liElement[i].textContent + ", ";
        }
        textOfElements += "]";

        return textOfElements;
    },

    //
    // First check and make sure the target was an LI type then continue to delete it.
    // Return the number of LI elements removed.
    //

    removeTargetLIFromOL: (targetFromEvent) => {

        let removedCount = 0;

        if (targetFromEvent.nodeName === "LI") {

            targetFromEvent.parentElement.removeChild(targetFromEvent);
            removedCount++;
        }
        //return targetFromEvent.parentElement.nodeName;
        return removedCount;

        //let removedCount = 0;

        //if (eventDiv.target.nodeName === "LI") {

        //    eventDiv.target.parentElement.removeChild(eventDiv.target);
        //    removedCount++;
        //}
        //return removedCount;
    },

    //
    // First check and make sure the target was an LI type then continue to delete it. Then
    // loop through the ol1 and delete all li that match the outerText values of the list.
    // I find it strange I could not find an index value in the eIDdiv1 showing which index was targetted.
    // Return the number of LI elements removed.
    //
    // Note: This was my first attempt at deleting using the target. I finally realized I could use the target as
    // the pointer and NOT the array. I therefore switched to using the method removeTargetLIFromOL, but kept this
    // around for learning and reference.
    //

    removeMatchingLIFromOL: (eventDiv) => {

        let removedCount = 0;

        if (eventDiv.target.nodeName === "LI") {

            const parentOL = document.getElementById("ol1");
            let childLI;
            console.log("Inside removeMatchingLIFromOL");
            console.log(eventDiv);
        
            for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
                if (document.getElementsByTagName("li")[i].outerText === eventDiv.target.outerText) {
                    childLI = document.getElementsByTagName("li")[i];
                    parentOL.removeChild(childLI);
                    removedCount++;
                }
            }
        }
        return removedCount;
    },

    //
    // Add a child LI element to the parent OL element.
    // Specify "END" to add as the last of the list, or "START" to the beginning or 1st of the list.
    //

    addliElement: (addWhere) => {
        
        const ol1Document = document.getElementById("ol1");
        const liNewElement = document.createElement("li");
        liNewElement.appendChild(document.createTextNode("Item " + (Number(ol1Document.childElementCount)+1)));

        if (addWhere === "END") ol1Document.appendChild(liNewElement);
        else if (addWhere === "START") ol1Document.insertBefore(liNewElement,ol1Document.childNodes[0]);
        else addCount = 0;

        return ol1Document.textContent;
    },

    displayAllCardElements: (leftCardsElement, rightCardsElement) => {
        // 
        // The following method displays all the card elements on left side and right side to a returned string field that can be used to 
        // display/show them to the user.
        //
        let textOfElements = "[";
        for (let i = 0; i < leftCardsElement.length; i++) {
                if (i === (leftCardsElement.length-1)) textOfElements += leftCardsElement[i].textContent;
                else textOfElements += leftCardsElement[i].textContent + ", ";
        }
        textOfElements += "],[";

        for (let i = 0; i < rightCardsElement.length; i++) {
            if (i === (rightCardsElement.length-1)) textOfElements += rightCardsElement[i].textContent;
            else textOfElements += rightCardsElement[i].textContent + ", ";
        }

        textOfElements += "]";

        return textOfElements;
    },

    //
    // Add a child LI element to the parent OL element.
    // Specify "END" to add as the last of the list, or "START" to the beginning or 1st of the list.
    //

    addCardElement: (addWhere) => {
        
        let addCount = 1;
        const divLPDocument = document.getElementsByClassName("divLeftPanel");
        const divNewElement = document.createElement("div");
        let att = document.createAttribute("class");
        att.value = "clCardLS";
        divNewElement.setAttributeNode(att);

        const nextCardNumber = divLPDocument[0].childElementCount-1;

        const pNewElement = document.createElement("p");
        pNewElement.appendChild(document.createTextNode("Card " + nextCardNumber));
        divNewElement.appendChild(pNewElement);

        const addBeforeButtonNewElement = document.createElement("BUTTON");
        addBeforeButtonNewElement.textContent = "Add Before";
        att = document.createAttribute("id");
        att.value = "addBeforeBtn";
        addBeforeButtonNewElement.setAttributeNode(att);
        divNewElement.appendChild(addBeforeButtonNewElement);

        const addAfterButtonNewElement = document.createElement("BUTTON");
        addAfterButtonNewElement.textContent = "Add After";
        att = document.createAttribute("id");
        att.value = "addAfterBtn";
        addAfterButtonNewElement.setAttributeNode(att);
        divNewElement.appendChild(addAfterButtonNewElement);

        const addDeleteButtonNewElement = document.createElement("BUTTON");
        addDeleteButtonNewElement.textContent = "Delete";
        att = document.createAttribute("id");
        att.value = "addDeleteBtn";
        addDeleteButtonNewElement.setAttributeNode(att);
        divNewElement.appendChild(addDeleteButtonNewElement);

        //console.log(divLPDocument[0]);
        //console.log(divNewElement);

        if (addWhere === "END") divLPDocument[0].appendChild(divNewElement);
        //else if (addWhere === "START") ol1Document.insertBefore(liNewElement,ol1Document.childNodes[0]);
        //else addCount = 0;

        return addCount;
        //return "[Card 1Add BeforeAdd AfterDelete, Card 2Add BeforeAdd AfterDelete], Card 3Add BeforeAdd AfterDelete],[]";
    }

};

export default c110DOM;
