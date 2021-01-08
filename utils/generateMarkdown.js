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
   - [Credits](#credits)
   - [Tests](#tests)
   - [Features](#features)
   - [Contributions](#contributions)
   - [Badges](#badges)
   - [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Features
  ${data.features}

  ## Contributions
  ${data.contributions}

  ## Badges
  ${data.badges}

  ## License
  ${data.license}

  ## GitHub
  ${data.gitHub}

  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;