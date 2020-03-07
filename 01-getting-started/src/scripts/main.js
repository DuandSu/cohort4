import functions from './functions.js';
import calculator from './calculator.js';
import taxCalculator from './taxcalculator.js';
import ArraysDictionaries from './arraysdictionaries.js';


// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

//
// Event listeners for Calculator
// 
addBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").textContent = calculator.addTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));

subtractBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").textContent = calculator.subtractTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));

multiplyBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").textContent = calculator.multiplyTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));

divideBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").textContent = calculator.divideTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));
//
// Event listeners for Tax Calculator
// 
calculateTaxBtn.addEventListener("click", (() => {
    document.getElementById("calculateTax").textContent = taxCalculator.calculateFederalTax(
        Number(document.getElementById("inputGrossIncome").value));
}));
//
// Event listeners and JS for Working with Arrays
// 
// Define array used for Competency 100C
//

let competency100Array = [];

addArrayBtn.addEventListener("click", (() => {
    if (isNaN(document.getElementById("inputArrayValue").value))
        document.getElementById("arrayMessage").textContent = "Input is not a valid number.";
    else {
        competency100Array = ArraysDictionaries.addToArray(competency100Array, 
            Number(document.getElementById("inputArrayValue").value));
        document.getElementById("arrayMessage").textContent = "Number was added to the array."
    }
}));

showArrayBtn.addEventListener("click", (() => {
    document.getElementById("arrayMessage").textContent = ArraysDictionaries.displayArray(competency100Array)
}));

totalArrayBtn.addEventListener("click", (() => {
    document.getElementById("arrayMessage").textContent = ArraysDictionaries.totalArray(competency100Array)
}));

clearArrayBtn.addEventListener("click", (() => {
    competency100Array = ArraysDictionaries.clearArray(competency100Array);
    document.getElementById("arrayMessage").textContent = "All array entries cleared. Array is now empty"
}));

//
// Event listeners and JS for Working with Dictionaries
// 
lookupProvDescBtn.addEventListener("click", (() => {
    const provDesc = ArraysDictionaries.lookupProvDesc(document.getElementById("inputProvCode").value);
    if (provDesc === "") document.getElementById("dictionaryMessage").textContent = "Province NOT Found!";
    else document.getElementById("dictionaryMessage").textContent = "Province is " + provDesc;
}));
