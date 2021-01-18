const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios')



inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "What is your name?",
            name: "varName"
        }
    ])
    .then(answers => {
        console.log(answers)
        console.log(answers.varName)
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });


// function difference(x,y){
//     return y-x
// }    

// function public(difference) {

//     function private(x, y) {
//        console.log(difference(x,y))
//     }

//     private(8,10)
// }
// public(difference)
