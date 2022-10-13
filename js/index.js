// get user input bill
var bill = document.getElementById("bill");
// get user input tip
var tip = document.getElementById("tip");
// get user input people
var people = document.getElementById("people");

// console log user input
console.log("bill: " + bill);
console.log("tip: " + tip);
console.log("people: " + people);


// check for update on user input
// then update the vars
bill.addEventListener("input", function() {
    bill = document.getElementById("bill").value;
    // update the variables
    update();
    // update the display
    updateDisplay();
    }
);
tip.addEventListener("input", function() {
    tip = document.getElementById("tip").value;
    // update the variables
    update();
    // update the display
    updateDisplay();
    }
);
people.addEventListener("input", function() {
    people = document.getElementById("people").value;
    // update the variables
    update();
    // update the display
    updateDisplay();
    }
);

// on user input update
// log to console
function update() {
    console.log("bill: " + bill);
    console.log("tip: " + tip);
    console.log("people: " + people);
}

// work out the tip
// log into variables
var tipAmount = bill * (tip / 100);
var total = bill + tipAmount;
var tipPerPerson = tipAmount / people;
var totalPerPerson = total / people;

// log the variables
console.log("tipAmount: " + tipAmount);
console.log("total: " + total);
console.log("tipPerPerson: " + tipPerPerson);
console.log("totalPerPerson: " + totalPerPerson);

// on load
// update the display
window.onload = function() {
    // update the display
    document.getElementById("tipPerPerson").innerHTML = tipPerPerson;
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;
}

// update the display
function updateDisplay() {
    // update the display
    document.getElementById("tipPerPerson").innerHTML = tipPerPerson;
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;
}

// reset
function reset() {
    // reset the user input
    document.getElementById("bill").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("people").value = "";
    // reset the display
    document.getElementById("tipPerPerson").innerHTML = 0;
    document.getElementById("totalPerPerson").innerHTML = 0;
}