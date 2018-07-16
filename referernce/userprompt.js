// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


var inquirer = require("inquirer")

var username;
var drink;
var password;
var temp;

function askName() {
    inquirer
        .prompt([
            // an array that contains objects...
            {
                type: "password",
                message: "Welcome to the Spy Cafe. Do you know the password?",
                name: "password"
            },
            {
                type: "input",
                message: "Ah, good, good. Who are you?",
                name: "username"
            }
        ])
        .then(function (inquirerResponse) {
            username = inquirerResponse.username;
            confirmName();
        });
}

askName();

function confirmName() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "So, your name is " + username + "?",
                name: "confirmName"
            }
        ]).then(function (inquirerResponse) {
            if (inquirerResponse.confirmName === true) {
                console.log("Nice to meet you, " + username + "!")
                offerDrink();
            }
            else {
                console.log("Ah, okay. Let me ask again...")
                askName();
            }
        })
};

function offerDrink() {
    inquirer
        .prompt([
            // an array that contains objects...
            {
                type: "list",
                message: "Would you like something to drink?",
                choices: ["coffee", "tea"],
                name: "drink"
            },
            {
                type: "checkbox",
                message: "And would you like that hot, or iced?",
                choices: ["hot", "iced"],
                name: "temp"
            }
        ]).then(function(inquirerResponse) {
            drink = inquirerResponse.drink;
            temp = inquirerResponse.temp;
            console.log("Okay! Here's your " + temp + drink + ". Enjoy!")
        })
}