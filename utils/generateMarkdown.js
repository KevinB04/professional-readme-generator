function fixLicense(license) {
    return license.split(" ").join("%20")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub Logo](https://img.shields.io/badge/license-${fixLicense(data.license)}-blue)

 ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Tests](#tests)
   - [Contributing](#contributing)
   - [License](#license)
   - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Questions
  * [GitHub](http://github.com/${data.username})
  * [E-mail](${data.questions})

`;
}

module.exports = generateMarkdown;