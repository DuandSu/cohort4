import c110DOM from './c110DOM.js';


// **********
//
// Add the event listeners
// 

div1.addEventListener('click', (eIDdiv1 => {
    //
    // eIDdiv1 holds the information targeted by the click event.
    //
    // If clicked on an LI of the OL1 ordered list, this will delete all the matching LI items.
    //

    const numberRemoved = c110DOM.removeTargetLIFromOL(eIDdiv1.target);

    //
    // The following actually works to delete the ol1 from div1. Kept it around for learning reference because
    // it led me to the code above that removes li from ol1.
    //
    //let x = document.getElementById("div1");
    //let y = document.getElementById("ol1");
    //x.removeChild(y);
}));

//
// Event listener for the Show button, which adds to the ordered list.
//

showBtn.addEventListener('click', (eIDshowBtn => {
    const liElement = document.querySelectorAll("li");
    alert (c110DOM.displayliElements(liElement));
}));

//
// Event listener for the Add button, which adds to the ordered list.
//

addBtn.addEventListener('click', (eIDaddBtn => {
    const textContentResult = c110DOM.addliElement("END");
}));

//
// Event listener for the Add to Start button, which adds to the beginning of the ordered list.
//

addToStartBtn.addEventListener('click', (eIDaddToStartBtn => {
    const textContentResult = c110DOM.addliElement("START");
}));