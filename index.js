const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateReadme")
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation of your project: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your project used for?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Were there any contributors? Please give their GitHub username: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Chose the license for this project: ',
            choices: [
                "Apache",
                "Boost",
                "Eclipse",
                "IBM",
                "ISC",
                "MIT",
                "Mozilla",
                "Unlicense"
            ]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there a test included?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])

}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }

init();
