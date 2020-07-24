const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// function to initialize program
function init() {
    inquirer.prompt([
        // question inputs for inquirer when called in command line
        {
            type: "input",
            message: "Enter the title of your project.",
            name: "title",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter a description for your project.",
            name: "description",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter instructions on installation of your project.",
            name: "installation",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter instructions on how to use your project.",
            name: "usage",
            validate: answerVal
        },
        {
            type: "list",
            message: "Select the type of license you would like to use for this project.",
            choices: ["MIT", "MPL 2.0", "Apache 2.0", "GNU GPLv3", "BSD 3--clause", "The Unlicense", "Boost 1.0", "ISC", "AGPLv3"],
            name: "license",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter the contribution guidelines for your project.",
            name: "contribution",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter the test instructions for your project.",
            name: "test",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "username",
            validate: answerVal
        },
        {
            type: "input",
            message: "Enter your email address.",
            name: "email",
            validate: answerVal
        },
    ])
    .then(function(answers) {
        console.log(answers);

        
        // writes answers into ReadMe file in generateMarkdown.js
        fs.writeFile("README.md", generateMarkdown(answers), function(err){
            if (err){
                return console.log(err);
            }
        })
        console.log("successful install");
    });
    
};

// Validates the answers to make sure no section is left blank.
function answerVal(value) {

    if (value === "") {
        return "Section cannot be left blank."
    } else {
        return true;
    }
};

// function call to initialize program
init();
