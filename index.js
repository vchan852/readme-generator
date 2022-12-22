// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?",
        validation: titleInput => titleInput ? true : false
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?",
        validation: descriptionInput => descriptionInput ? true : false
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "How do you install this application?",
        validation: descriptionInput => descriptionInput ? true : false
    },
    {
        type: "input",
        name: "usageInformation",
        message: "How do you use your application?",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "How can someone contribute to this application?",
    },
    
    {
        type: "input",
        name: "testInstructions",
        message: "How can someone test your application?",
    },
    {
        type: "confirm",
        name: "isLicense",
        message: "Is there a license you would like to add?",
        default: true,
    },
    {
        type: "rawlist",
        name: "licenseType",
        message: "What is your project's description?",
        choices: ["mit", "apache-2.0", "gpl-3.0", "mpl-2.0"],
        when: ({ isLicense }) => {
            if (isLicense) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
         console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);

        const returnedString = generateMarkdown(answers);
        writeToFile("README.md", returnedString);
    });
}

// Function call to initialize app
init();
