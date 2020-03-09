// import ArraysDictionaries from './arraysdictionaries.js';


// **********
//
// Add the event listeners
// 

div1.addEventListener('click', (eIDdiv1 => {
    console.log("Inside the Event Listner for div1");
    //console.log(eIDdiv1);
}));

showBtn.addEventListener('click', (eIDshowBtn => {
    let liElement = document.querySelectorAll("li");
    let textOfElements = "[";
    for (let i = 0; i < liElement.length; i++) {
        if (i === (liElement.length-1)) textOfElements += liElement[i].textContent;
        else textOfElements += liElement[i].textContent + ", ";
    }
    textOfElements += "]";
    alert("The Ordered List contains the following items: " + textOfElements);
}));

addBtn.addEventListener('click', (eIDshowBtn => {
    let ol1Document = document.getElementById("ol1");
    let liNewElement = document.createElement("li");
    liNewElement.appendChild(document.createTextNode("Item " + (Number(ol1Document.childElementCount)+1)));
    ol1Document.appendChild(liNewElement);
}));

//addBtn.addEventListener("click", (() => {
//    document.getElementById("calculateAction").textContent = calculator.addTwoNumbers(
//        Number(document.getElementById("inputField1").value), 
//        Number(document.getElementById("inputField2").value));
//}));

//let competency100Array = [];

//addArrayBtn.addEventListener("click", (() => {
//    if (isNaN(document.getElementById("inputArrayValue").value))
//        document.getElementById("arrayMessage").textContent = "Input is not a valid number.";
//    else {
//        competency100Array = ArraysDictionaries.addToArray(competency100Array, 
//            Number(document.getElementById("inputArrayValue").value));
//        document.getElementById("arrayMessage").textContent = "Number was added to the array."
//    }
//}));

//clearArrayBtn.addEventListener("click", (() => {
//    competency100Array = ArraysDictionaries.clearArray(competency100Array);
//    document.getElementById("arrayMessage").textContent = "All array entries cleared. Array is now empty"
//}));

//
// Event listeners and JS for Working with Dictionaries
// 
//lookupProvDescBtn.addEventListener("click", (() => {
//    const provDesc = ArraysDictionaries.lookupProvDesc(document.getElementById("inputProvCode").value);
//    if (provDesc === "") document.getElementById("dictionaryMessage").textContent = "Province NOT Found!";
//    else document.getElementById("dictionaryMessage").textContent = "Province is " + provDesc;
//}));
