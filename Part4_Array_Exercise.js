// PART 4 ARRAY EXERCISE
// This is a .js file with commented hints; it's optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = [];

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew() {
    var newName = prompt("Please enter a name");
    roster.push(newName);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
function remove() {
    var nameToRemove = prompt("Enter a name to remove");
    var index = roster.indexOf(nameToRemove);
    if (index !== -1) {
        roster.splice(index, 1);
    } else {
        console.log("Name not found in the roster.");
    }
}

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display() {
    prompt(roster);
}

var start = prompt("Start or end? y/n?");
var request = "empty";

if (start.toLowerCase() === "y") {
    while (request !== "q") {
        request = prompt("Please select an action: add/remove/display/q");
        if (request === "add") {
            addNew();
        } else if (request === "display") {
            display();
        } else if (request === "remove") {
            remove();
        } else {
            break;
        }
    }
}
