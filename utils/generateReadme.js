// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.title}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
- ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
- ${answers.installation}
## Usage
- ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contribution
- ${answers.contribution}
## Tests
- ${answers.test}
## Questions
- Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
- Email me with any questions: ${answers.email}
    `;
  }
  
  module.exports = generateReadme;