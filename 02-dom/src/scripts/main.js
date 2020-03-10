//import c110DOM from './c110DOM.js';


// **********
//
// Add the event listeners
// 

div1.addEventListener('click', (eIDdiv1 => {
    //
    // eIDdiv1 holds the information targeted by the click event.
    //
    console.log("Inside the Event Listner for div1");
    console.log(eIDdiv1);

    //
    // If the target was an LI type then continue to delete it.
    //

    if (eIDdiv1.target.nodeName === "LI") {
        console.log(eIDdiv1.target.nodeName + ":" + eIDdiv1.target.outerText);
        //
        // The following actually works to delete the ol1 from div1. Now figure out how to remove li from ol1.
        //
        //let x = document.getElementById("div1");
        //let y = document.getElementById("ol1");
        //x.removeChild(y);

        //
        // Loop through the ol1 and delete all li that match the outerText values of the list.
        // I find it strange I could not find an index value in the eIDdiv1 showing which index was targetted.
        //
        let x = document.getElementById("ol1");
        let y = document.getElementsByTagName("li")[0];

        for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
            if (document.getElementsByTagName("li")[i].outerText === eIDdiv1.target.outerText) {
                y = document.getElementsByTagName("li")[i];
                x.removeChild(y);
            }
        }
    }
 }));

//
// Event listener for the Show button, which adds to the ordered list. ToDo would be to add
// the for loop to a method to separate concerns and attempt TDD.
//

showBtn.addEventListener('click', (eIDshowBtn => {
    const liElement = document.querySelectorAll("li");
    let textOfElements = "[";
    for (let i = 0; i < liElement.length; i++) {
        if (i === (liElement.length-1)) textOfElements += liElement[i].textContent;
        else textOfElements += liElement[i].textContent + ", ";
    }
    textOfElements += "]";
    alert("The Ordered List contains the following items: " + textOfElements);
}));

//
// Event listener for the Add button, which adds to the ordered list. At the moment this looks like only interface and
// don't see how TDD would work or is of value. ToDo is to validate this thought.
//

addBtn.addEventListener('click', (eIDaddBtn => {
    const ol1Document = document.getElementById("ol1");
    const liNewElement = document.createElement("li");
    liNewElement.appendChild(document.createTextNode("Item " + (Number(ol1Document.childElementCount)+1)));
    ol1Document.appendChild(liNewElement);
}));

//
// Event listener for the Add to Start button, which adds to the beginning of the ordered list. At the moment this looks like only interface and
// don't see how TDD would work or is of value. ToDo is to validate this thought.
//

addToStartBtn.addEventListener('click', (eIDaddToStartBtn => {
    const ol1Document = document.getElementById("ol1");
    const liNewElement = document.createElement("li");
    liNewElement.appendChild(document.createTextNode("Item " + (Number(ol1Document.childElementCount)+1)));
    ol1Document.insertBefore(liNewElement,ol1Document.childNodes[0]);
}));