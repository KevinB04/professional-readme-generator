// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
   {
     type: "input",
     message: "What is the name of your project?",
     name: "name",
   },
    {
      type: "input",
      message: "What is the description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "How can a user install your project?",
      name: "installation",
    },
     {
      type: "input",
      message: "What credits would you like to give for your project?",
      name: "credits",
    },
    {
      type: "input",
      message: "How can the user test your project?",
      name: "tests",
    },
    {
      type: "input",
      message: "What features would you like to add?",
      name: "features",
    },
    {
      type: "input",
      message: "Where there any contributors on this project?",
      name: "contributions",
    },
    {
      type: "input",
      message: "Would you like to add any badges?",
      name: "badges",
    },
    {
      type: "input",
      message: "What license would you like to use?",
      name: "license",
      choices: ["MIT", "ISC", "BSD 3-Clause"],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
    writeToFile("generateMarkdown.js", response))
}

// Function call to initialize app
init();




// # Table of Contents

//  - [Description](#description)
//  - [Installation](#installation)
//  - [Credits](#credits)
//  - [Tests](#tests)
//  - [Features](#features)
//  - [Contributions](#contributions)
//  - [Badges](#badges)
//  - [License](#license)

// ## Description:
//     ${response.description}
// ## Installation:
//     ${response.installation}
// ## Credits: 
//     ${response.credits}
// ## Tests: 
//     ${response.tests}
// ## Features: 
//     ${response.features}
// ## Contribution:
//     ${response.contributions}
// ## Badges:
//     ${response.badges}
// ## License:
//     ${response.license}
