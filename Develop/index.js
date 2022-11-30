// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project-title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    }, 
    {
        type: 'input',
        message: 'List your collaborators.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Provide license information',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


`
# ${data.project-title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Tests

${data.tests}

## Features

${data.features}

## Questions

If you have questions, please reach out at the following.
[GitHub](https://github.com/${data.username})
[Email](${data.email})

`