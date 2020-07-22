const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the title of your project.",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Enter instructions on installation of your project.",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter instructions on how to use your project.",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter the contribution guidelines for your project.",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter the test instructions for your project.",
            name: "test"
        },
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your email address.",
            name: "email"
        },
    ])
    .then(function(answers) {
        console.log(answers);
    })
};

// function call to initialize program
init();