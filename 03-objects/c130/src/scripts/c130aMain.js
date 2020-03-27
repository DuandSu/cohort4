import c110DOM from './c110DOM.js';

// This comment only viewed from branch play.
// This change should only show in DEV

// **********
//
// Add the event listeners and VavaScript code
// 

let nextCardNumber = 3;
let numberCardsAdded = 0;
let numberCardsDeleted = 0;


//
// Event listener for the Show Cards button.
//

mainShowBtn.addEventListener('click', (eIDmainShowBtn => {
    const leftCardsElement = document.getElementsByClassName("clCardLS");
    const rightCardsElement = document.getElementsByClassName("clCardRS");
    alert (c110DOM.displayAllCardElements(leftCardsElement, rightCardsElement));
}));

//
// Event listener for the Main Add button, which adds to the bottom of the cards.
//

mainAddBtn.addEventListener('click', (eIDaddBtn => {
    numberCardsAdded = c110DOM.addCardElement("END", eIDaddBtn.target, nextCardNumber++);
}));

//
// Event listener for the buttons within the card: "Add Before", "Add After" and "Delete". Required in general
// event listener, rather than dedicated "id" event, since mutiple occurrences of same button with dynamically
// created card elements.
//

document.body.addEventListener("click", e => {
 
    if (e.target.nodeName === 'BUTTON') {
        if (e.target.textContent === "Add Before") {
            numberCardsAdded = c110DOM.addCardElement("BEFORE", e.target.parentElement, nextCardNumber++);
        }
        else if (e.target.textContent === "Add After") {
             numberCardsAdded = c110DOM.addCardElement("AFTER", e.target.parentElement, nextCardNumber++);
        }
        else if (e.target.textContent === "Delete") {
            console.log("In the Delete button: " + e);
            numberCardsDeleted = c110DOM.deleteCardElement(e.target.parentElement);
        }
    }
})