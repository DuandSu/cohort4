import c110DOM from './c110DOM.js';


// **********
//
// Add the event listeners
// 

//div1.addEventListener('click', (eIDdiv1 => {
    //
    // eIDdiv1 holds the information targeted by the click event.
    //
    // If clicked on an LI of the OL1 ordered list, this will delete all the matching LI items.
    //

    //const numberRemoved = c110DOM.removeTargetLIFromOL(eIDdiv1.target);

    //
    // The following actually works to delete the ol1 from div1. Kept it around for learning reference because
    // it led me to the code above that removes li from ol1.
    //
    //let x = document.getElementById("div1");
    //let y = document.getElementById("ol1");
    //x.removeChild(y);
//}));

//
// Event listener for the Show button, which adds to the ordered list.
//

mainShowBtn.addEventListener('click', (eIDmainShowBtn => {
    const leftCardsElement = document.getElementsByClassName("clCardLS");
    const rightCardsElement = document.getElementsByClassName("clCardRS");
    alert (c110DOM.displayAllCardElements(leftCardsElement, rightCardsElement));
}));

//
// Event listener for the Add button, which adds to the ordered list.
//

mainAddBtn.addEventListener('click', (eIDaddBtn => {
    console.log("In the Main Add Button!");
//    const textContentResult = c110DOM.addliElement("END");
}));

//
// Event listener for the Add to Start button, which adds to the beginning of the ordered list.
//

//addToStartBtn.addEventListener('click', (eIDaddToStartBtn => {
//    const textContentResult = c110DOM.addliElement("START");
//}));