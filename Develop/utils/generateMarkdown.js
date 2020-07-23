// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
-------------
${data.description}

## Table of Contents
-------------

## Installation
-------------
${data.installation}

## Usage
-------------
${data.usage}

## License
-------------
This project is currently licensed under the ${data.license} license.

## Contributing
-------------
${data.contribution}

## Tests
-------------
${data.test}

## Questions
-------------
Any questions regarding this project please contact me at:  
GitHub: https://www.github.com/${data.username}  
email: ${data.email}
`;
}

module.exports = generateMarkdown;
