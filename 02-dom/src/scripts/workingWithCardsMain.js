import c110DOM from './c110DOM.js';


// **********
//
// Add the event listeners
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
// Event listener for the Add Before button within a card, which adds a new card before this
// target card.
//

document.body.addEventListener("click", e => {
    console.log("Event Listner: Next Number will be " + nextCardNumber);
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

//document.getElementsByClassName("addCardBeforeBtn")[0].addEventListener('click', (eIDaddBtn => {
//    console.log("In the Add Before Card Button!");
//    const numberCardsAdded = c110DOM.addCardElement("BEFORE", eIDaddBtn.target);
//}));


//
// Event listener for the Delete button within a card, which deletes the target card.
//

//deleteCardBtn.addEventListener('click', (eIDdelBtn => {
//    console.log("In the Card Delete Button!");
//    const numberCardsDeleted = c110DOM.deleteCardElement(eIDdelBtn.target);
//}));