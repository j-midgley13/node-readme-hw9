// function to generate markdown for README
function generateMarkdown(data) {
  const linkLicense = data.license.replace(" ", "%20")
  return `# ${data.title}

  ##  ![License: ${data.license}](https://img.shields.io/badge/License-${linkLicense}-informational?style=for-the-badge&logo=appveyor.svg)

## Description  

${data.description}  

## Table of Contents  

* [Installation](#installation)  
* [Usage](#usage)  
* [License](#license)  
* [Contributing](#contributing)  
* [Tests](#tests)  
* [Questions](#questions)  

## Installation  

${data.installation}  

## Usage  

${data.usage}  

## License  

This project is currently licensed under the ${data.license} license.  

## Contributing  

${data.contribution}  

## Tests  

${data.test}  

## Questions  

Any questions regarding this project please contact me at:  
GitHub: https://www.github.com/${data.username}  
email: ${data.email}
`;
}

module.exports = generateMarkdown;
