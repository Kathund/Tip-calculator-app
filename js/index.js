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
    update();
    }
);
tip.addEventListener("input", function() {
    tip = document.getElementById("tip").value;
    update();
    }
);
people.addEventListener("input", function() {
    people = document.getElementById("people").value;
    update();
    }
);

// on user input update
// log to console
function update() {
    console.log("bill: " + bill);
    console.log("tip: " + tip);
    console.log("people: " + people);
}
