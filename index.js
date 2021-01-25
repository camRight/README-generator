const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const axios = require("axios");
const readmePopulation = require('./utils/generate-README')


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
            message: "What is your description? [Close editor when *Done*--NO SAVE]",
            name: "varDescription"
        },
        {
            type: "editor",
            message: "Step-by-Step Installation Guide. Provide steps to get the development running.",
            name: "varInstallSteps"
        },
        {
            type: "list",
            message: "What license would you like?",
            choices: ['Apache License', 'MIT License', 'Mozilla Public License 2.0', 'GPL License'],
            name: "varLicense"
        },
        {
            type: "input",
            message: "Who collaborated with you on this project?",
            name: "varCredits"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "varGithubUser"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "varEmail"
        }
    ])
    .then(answers => {
        console.log(answers)

        axios.get("https://api.github.com/users/" + answers.varGithubUser)
            .then(function (results) {
                answers.profilelink = results.data.html_url
                const readmeContent = readmePopulation(answers)
                fs.writeFile("./README.md", readmeContent, function (error) {
                    console.log("success!")
                })
            })


        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong, it's working in your current environment...")
        }
    });



function truthyPic() {
    inquirer.prompt
}
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
