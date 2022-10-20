// get tip info from the input
var tip = document.getElementById("tip").value;
// get bill info from the input
var bill = document.getElementById("bill").value;
// get number of people info from the input
var people = document.getElementById("people").value;

// using a function
// calculate the tip
function calculateTip() {
    // get the total amount
    var totalAmount = bill + tip
    // get the total amount per person
    var totalPerPerson = totalAmount / people
    // get the tip per person
    var tipPerPerson = tip / people
}

// using a funtion
// display the tip
function displayTip() {
    // get the element
    var tipElement = document.getElementById("tipPerPerson");
    // set the tip per person
    tipElement.innerHTML = tipPerPerson;
}