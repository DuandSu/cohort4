import functions from './functions.js';
import calculator from './calculator.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
//
// Note that used ".textContent" and ".innerHTML" to play and test. Seems they do the same
// thing visually anyways. Normally would stick with one, but left as is for future reference.
//
addBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").textContent = calculator.addTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));

subtractBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").innerHTML = calculator.subtractTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));

multiplyBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").innerHTML = calculator.multiplyTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));

divideBtn.addEventListener("click", (() => {
    document.getElementById("calculateAction").innerHTML = calculator.divideTwoNumbers(
        Number(document.getElementById("inputField1").value), 
        Number(document.getElementById("inputField2").value));
}));