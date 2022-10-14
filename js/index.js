

// pull the user info from the user input sections
// bill
var bill = document.getElementById("bill").value;
// tip
var tip = document.getElementById("tip").value;
// people
var people = document.getElementById("people").value;

// console log the data
console.log(`bill: ${bill}`);
console.log(`tip: ${tip}`);
console.log(`people: ${people}`);


// calculate the tip
// calculate the total
var total = tip + bill
// calculate the tip per person
var tipPerPerson = tip / people;
// calculate the total per person
var totalPerPerson = (bill / people) + tipPerPerson;


// console log the data
console.log(`tipPerPerson: ${tipPerPerson}`);
console.log(`totalPerPerson: ${totalPerPerson}`);

// check if there is an update on user input
// bill
document.getElementById("bill").addEventListener("input", updateDisplay());
var bill = document.getElementById("bill").value;
// tip
document.getElementById("tip").addEventListener("input", updateDisplay());
var tip = document.getElementById("tip").value;
// people
document.getElementById("people").addEventListener("input", updateDisplay());
var people = document.getElementById("people").value;

// update the display
// using a function to update the display
function updateDisplay() {
    // update the tip per person
    document.getElementById("tipPerPerson").innerHTML = tipPerPerson
    // update the total per person
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson
}
