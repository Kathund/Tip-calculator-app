// get input from user under the id of "bill"
var bill = document.getElementById("bill").value;
// get input from user under the id of "tip"
var tip = document.getElementById("tip").value;
// get input from user under the id of "people"
var people = document.getElementById("people").value;

// then log the data to console
console.log(bill, tip, people);

// work out the tip
function calculateTip() {
    // work out the tip
    var tipAmount = (bill * tip) / 100;
    // work out the total
    var total = bill + tipAmount;
    // work out the tip per person
    var tipPerPerson = tipAmount / people;
    // work out the total per person
    var totalPerPerson = total / people;
    // display the tip per person
    document.getElementById("tipPerPerson").innerHTML = tipPerPerson;
    // disaply the total per person
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;
}

// funcation reset
// clear the input fields
function reset() {
    // document.getElementById("bill").value = "";
    // document.getElementById("tip").value = "";
    // document.getElementById("people").value = "";
    // get input from user under the id of "bill"
    var bill = document.getElementById("bill").value;
    // get input from user under the id of "tip"
    var tip = document.getElementById("tip").value;
    // get input from user under the id of "people"
    var people = document.getElementById("people").value;
    // work out the tip
    var tipAmount = (bill * tip) / 100;
    // work out the total
    var total = bill + tipAmount;
    // work out the tip per person
    var tipPerPerson = tipAmount / people;
    // work out the total per person
    var totalPerPerson = total / people;
    // console log all the data
    console.log(bill, tip, people, tipAmount, total, tipPerPerson, totalPerPerson);
    // display the tip per person
    document.getElementById("tipPerPerson").innerHTML = tipPerPerson;
    // disaply the total per person
    document.getElementById("totalPerPerson").innerHTML = totalPerPerson;

}
