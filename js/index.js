
// TODO fix calculate tip function
// TODO fix display not updating on update

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


// use a function to calculate the tip
function calculateTip() {
    // get values from the user input
    // bill
    var bill = document.getElementById("bill").value;
    // tip
    var tip = document.getElementById("tip").value;
    // people
    var people = document.getElementById("people").value;
    // calculate the tip
    // calculate the total
    var total = tip + bill
    // calculate the tip per person
    var tipPerPerson = tip / people
    // calculate the total per person
    var totalPerPerson = total / people
    // console log the data
    console.log(`total: ${total}`);
    console.log(`tip per person: ${tipPerPerson}`);
    console.log(`total per person: ${totalPerPerson}`);
}


// console log the data
console.log(`tipPerPerson: ${tipPerPerson}`);
console.log(`totalPerPerson: ${totalPerPerson}`);

// update the display
// using a function to update the display
function updateDisplay() {
    calculateTip();
    // 1000 miliseconds timeout
    setTimeout(function() {
        // update the tip per person
        document.getElementById("tipPerPerson").innerHTML = tipPerPerson
        // update the total per person
        document.getElementById("totalPerPerson").innerHTML = totalPerPerson
    }, 1000);
}
