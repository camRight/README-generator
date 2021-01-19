const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const jest = require('jest');

const readmePopulation = require('./generate-README')


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "What is your title?",
            name: "varTitle"
        },
        {
            type: "editor",
            message: "What is your description? [Close editor when *Done*]",
            name: "varDescription"
        },
        {
            type: "editor",
            message: "Step-by-Step Installation Guide. Provide steps to get the development running.",
            name: "varInstallSteps"
        },
        // {
        //     // I want a hierarchical question tree that pulls up editor 
        //     // picture? yes/no if yes then editor if no then just write in console.
        //     type: "confirm",
        // },
        {
            type: "list",
            message: "What license would you like?",
            choices: ['Apache License', 'MIT License', 'Mozilla Public License 2.0', ' GPL License'],
            name: "varLicense"
        }
    ])
    .then(answers => {
        console.log(answers)
      
      const readmeContent = readmePopulation(answers)
      fs.writeFile("./README.md", readmeContent, function(error){
          console.log("success!")
      })
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
