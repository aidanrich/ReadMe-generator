// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'collab',
    },
    {
        type: 'checkbox',
        message: 'The last section of a high-quality README file is the license.',
        name: 'license',
        choices: ["MIT", "APACHE", "none"]
    },
    
    
    
    
    

];
inquirer
    .prompt(questions)
    // // TODO: Create a function to write README file
// function writeToFile('README-gen.md', data) {}
    .then((response) => {

        fs.writeFile('README-gen.md', `# ${response.name}
## Description
- ${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
- ${response.install}
## Usage
- ${response.instructions}
## Credits
- ${response.collab}
        `, (err) =>
            // TODO: Describe how this ternary operator works
            err ? console.error(err) : console.log('Commit logged!')

        )

    }
    )



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
