// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
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
    message: "Add some screenshots of your project.",
    name: "usage",
  },
  {
    type: "input",
    message: "How can the user test your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "Would you like contributions for this project?",
    name: "contributing",
  },
  {
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: ["MIT", "ISC", "BSD 3-Clause", "GPL 3.0", "Apache 2.0"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "questions",
  }
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
 return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeFile("README.md", generateMarkdown(response))
  });
}

// Function call to initialize app
init();