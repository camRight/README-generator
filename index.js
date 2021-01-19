const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios')

const readmePopulation = require('./generateREADME')


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
            message: "What is your description?",
            name: "varDescription"
        },
        {
            type: "editor",
            message: "Step-by-Step Installation Guide. Provide steps to get the development running.",
            name: "varInstallSteps"
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
